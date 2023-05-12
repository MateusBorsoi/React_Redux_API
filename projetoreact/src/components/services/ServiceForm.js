import styles from '../project/ProjetoForm.module.css'


import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'


function ServiceForm({ handleSubmit, textBtn, projetoData }) {

    const [service, setService] = useState({})


    function submit(e) {
        e.preventDefault()
        projetoData.service.push(service)
        handleSubmit(projetoData)

    }

    function handleChange(e) {
        setService({ ...service, [e.target.name]: e.target.value })

    }

    return (
        <div>
            <form onSubmit={submit} className={styles.form}>
                <Input
                    type="text"
                    text="Nome do Serviço"
                    name="name"
                    placeholder="Insira o nome do serviço"
                    handleOnChange={handleChange}
                >
                </Input>
                <Input
                    type="number"
                    text="Custo do Serviço"
                    name="cost"
                    placeholder="Insira o valor total"
                    handleOnChange={handleChange}
                >
                </Input>
                <Input
                    type="text"
                    text="Descrição do Serviço"
                    name="description"
                    placeholder="Informe a descrição do serviço"
                    handleOnChange={handleChange}
                >
                </Input>
                <SubmitButton text={textBtn} />
            </form>

        </div>
    )
}

export default ServiceForm