import styles from './ProjetoForm.module.css'

import { useState, useEffect } from 'react'

import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjetoForm({ handleSubmit, btnText, projectData }) {

    const [categorias, setCategorias] = useState([])
    const [projeto, setProjeto] = useState(projectData || [])

    useEffect(() => {

        fetch("http://localhost:5000/categorias", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((resp) => resp.json())
            .then((data) => {
                setCategorias(data)
            })
            .catch((err) => console.log(err))

    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(projeto)
    }

    function handleChange(e) {
        setProjeto({ ...projeto, [e.target.name]: e.target.value })
    }

    function handleCategory(e) {
        setProjeto({ ...projeto, categoria: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input
                type="text"
                text="Nome do Projeto"
                name="name"
                placeholder="Insira o nome do projeto"
                handleOnChange={handleChange}
                value={projeto.name ? projeto.name: ''}
            />
            <Input
                type="number"
                text="Orçamento do Projeto"
                name="budget"
                placeholder="Insira o orçamento total"
                handleOnChange={handleChange}
                value={projeto.budget ? projeto.budget: ''}

            />
            <Select
                name="id"
                text="Selecione a categoria"
                options={categorias}
                handleOnChange={handleCategory}
                value={projeto.categoria ? projeto.categoria.id : ''}
            />
            <SubmitButton
                text={btnText}
            />
        </form>
    )

}

export default ProjetoForm