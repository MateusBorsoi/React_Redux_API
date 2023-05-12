import { parse, v4 as uuidv4 } from 'uuid'


import styles from './Projeto.module.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import ProjetoForm from '../project/ProjetoForm'
import Message from '../layout/Message'
import ServiceForm from '../services/ServiceForm'
import ServiceCard from '../services/ServiceCard'

function Projeto() {

    const { id } = useParams()
    const [projeto, setProjeto] = useState([])
    const [service, setService] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [mensagem, setMensagem] = useState()
    const [tipoMensagem, setTipoMensagem] = useState()


    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projetos/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            }).then(resp => resp.json())
                .then((data) => {
                    setProjeto(data)
                    setService(data.service)
                })
                .catch(err => console.log(err))
        }, 300)
    }, [id])


    function editPost(projeto) {
        setMensagem('')

        if (projeto.budget < projeto.cost) {
            setMensagem('O orçamento não pode ser menor que o custo do projeto!')
            setTipoMensagem('error')
            return false
        }
        fetch(`http://localhost:5000/projetos/${projeto.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projeto),
        })
            .then(resp => resp.json())
            .then((data) => {
                setProjeto(data)
                setShowProjectForm(false)
                setMensagem('Projeto atualizado com sucesso')
                setTipoMensagem('success')
            })
            .catch(err => console.log(err))

    }

    function createService(projeto) {

        setMensagem('')

        const lastService = projeto.service[projeto.service.length - 1]
        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost
        const newCost = parseFloat(projeto.cost) + parseFloat(lastServiceCost)



        if (newCost > parseFloat(projeto.budget)) {
            setMensagem('Orçamento ultrapassado, verifique o valor do serviço')
            setTipoMensagem('error')
            projeto.service.pop()
            return false
        }

        projeto.cost = newCost

        fetch(`http://localhost:5000/projetos/${projeto.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projeto),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setShowServiceForm(false)
            })
            .catch(err => console.log(err))
    }


    function removeService(id, cost) {
        const serviceUpdate = projeto.service.filter(
            (service) => service.id !== id
        )

        const projectUpdated = projeto
        projectUpdated.service = serviceUpdate
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost)

        fetch(`http://localhost:5000/projetos/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectUpdated),
        })
            .then((resp) => resp.json())
            .then((data) => {
                setProjeto(projectUpdated)
                setService(serviceUpdate)
                setTipoMensagem('success')
                setMensagem('Serviço Removido com sucesso')
            })
            .catch(err => console.log(err))

    }


    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (
        <>
            {projeto.name ?
                <div className={styles.project_details}>
                    {mensagem && <Message type={tipoMensagem} msg={mensagem} />}
                    <Container customClass="column">
                        <div className={styles.details_container}>
                            <h1>Projeto: {projeto.name}
                            </h1>
                            <button className={styles.btn} onClick={toggleProjectForm}>
                                {!showProjectForm ? 'Editar Projeto' : 'Fechar'}
                            </button>
                            {!showProjectForm ? (
                                <div className={styles.project_info}>
                                    <p>
                                        <span>Categoria: </span> {projeto.categoria.name}
                                    </p>
                                    <p>
                                        <span>Total de Orçamento: </span> {parseFloat(projeto.budget).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </p>
                                    <p>
                                        <span>Total utilizado: </span> {parseFloat(projeto.cost).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                                    </p>
                                </div>
                            ) : (
                                <div className={styles.project_info}>
                                    <ProjetoForm handleSubmit={editPost} btnText="Concluir Edição" projetoData={projeto} />
                                </div>
                            )}

                        </div>
                    </Container>
                    <div className={styles.service_form_container}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && (
                                <ServiceForm
                                    handleSubmit={createService}
                                    textBtn="Adicionar Serviço"
                                    projetoData={projeto}
                                />

                            )}
                        </div>
                    </div>
                    <h2>Serviços:</h2>
                    <Container customClass="start">
                        {service.length > 0 &&
                            service.map((service) => (

                                <ServiceCard
                                    id={service.id}
                                    name={service.name}
                                    cost={service.cost}
                                    description={service.description}
                                    key={service.id}
                                    handleRemove={removeService}
                                />
                            ))

                        }
                        {service.length === 0 &&
                            <p> Não existem serviços cadastrados </p>

                        }
                    </Container>
                </div>
                : <Loading />}
        </>
    )
}

export default Projeto