import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from "../layout/Message"
import Container from '../layout/Container'
import Loading from '../layout/Loading'
import LinkButton from '../layout/LinkButton'
import ProjetoCard from '../project/ProjetoCard'

import styles from './Projetos.module.css'


function Projetos() {

    const [projetos, setProjetos] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projetoMensagem, setProjetoMensagem] = useState('')

    const location = useLocation()
    let message = ''

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/projetos', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                    setProjetos(data)
                    setRemoveLoading(true)
                })
                .catch((err) => console.log(err))

        }, 400);

    }, [])


    function removeProjeto(id) {
        setProjetoMensagem('')
        fetch(`http://localhost:5000/projetos/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(resp => resp.json())
            .then(() => {
                setProjetos(projetos.filter((projeto) => projeto.id !== id))
                setProjetoMensagem('Projeto removido com sucesso')
            })
            .catch(err => console.log(err))
    }
    if (location.state) {
        message = location.state.message
    }

    return (
        <div className={styles.projeto_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton para="/novoprojeto" text="Criar Projeto" />
            </div>
            {message && <Message type="success" msg={message} />}
            {projetoMensagem && <Message type="success" msg={projetoMensagem} />}
            <Container customClass="start">
                {projetos.length > 0 &&
                    projetos.map((projeto) => <ProjetoCard
                        name={projeto.name}
                        id={projeto.id}
                        budget={projeto.budget}
                        categoria={projeto.categoria.name}
                        key={projeto.id}
                        handleRemove={removeProjeto}
                    />)}
                {!removeLoading && <Loading />}
                {removeLoading && projetos.length === 0 && (
                    <p>Não há projetos cadastrados!</p>
                )

                }

            </Container>
        </div>
    )

}

export default Projetos