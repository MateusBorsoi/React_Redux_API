import styles from './Input.module.css'

import { Button, TextField } from '@mui/material'

import { useState } from 'react'


export const Input = ({onAddUser}) => {

    const [nome, setNome] = useState()
    const [email, setEmail] = useState()

    function handleSaveUser() {
        const data = {
            nome, email
        }
        onAddUser(data)
    }


    return (
        <div className={styles.input_content}>

            <TextField
                id="outlined-basic"
                className={styles.input}
                label="Nome"
                variant="outlined"
                value={nome}
                onChange={event => setNome(event.target.value)}
            />

            <TextField
                className={styles.input}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={event => setEmail(event.target.value)} />

            <Button
                onClick={handleSaveUser}
                variant='outlined'>
                Salvar
            </Button>
        </div>
    )
}

