import { useNavigate } from 'react-router-dom'

import styles from './NovoProjeto.module.css'

import ProjetoForm from '../project/ProjetoForm'

function NovoProjeto() {

    const navigate = useNavigate()


    function createPost(projeto) {

        //Inicializar cost e services

        projeto.cost = 0
        projeto.service = []


        fetch("http://localhost:5000/projetos", {

            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(projeto),

        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)

                navigate("/projetos", {state: { message: "Projeto criado com sucesso" }})
            }
            )
            .catch(err => console.log(err))


    }

    return (
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjetoForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    )

}

export default NovoProjeto