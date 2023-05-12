import { Button, TextField } from "@mui/material"
import { useState } from 'react'
import styles from './Form.module.css'

export const Form = ({ onAddUser }) => {


    const [nome, setNome] = useState()
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    function handleSaveUser() {
        const data = {
            nome, email, senha
        }

        onAddUser(data)

    }

    return (
        <div className={styles.divform}>
            <form className={styles.form}>
                <TextField
                    id="outlined-basic"
                    label="Nome"
                    variant="outlined"
                    onChange={event => setNome(event.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    onChange={event => setEmail(event.target.value)}
                />
                <TextField
                    id="outlined-basic"
                    label="Senha"
                    variant="outlined"
                    type="password"
                    onChange={event => setSenha(event.target.value)}
                />
                <Button
                    variant="outlined"
                    onClick={handleSaveUser}>
                    Enviar
                </Button>

            </form>

        </div>

    )

}
