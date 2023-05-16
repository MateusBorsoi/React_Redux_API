import { Alert, Button, TextField } from "@mui/material";
import styles from './Login.module.css'
import { useState } from 'react'
import { useDispatch} from "react-redux";
import { loginUser } from '../Redux/user/actions'
import { Link, useNavigate } from "react-router-dom";
import usersFetch from "../axios/config";


function Login() {


    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()
    const [mensagem, setMensagem] = useState()
    const [tipoAlert, setTipoAlert] = useState(null)




    const handleClickLogin = async () => {

        try {
            const response = await usersFetch.post('/login', {email, senha})
            setTipoAlert('success')
            setMensagem(response.data.mensagem)
            dispatch(loginUser({ email: email, senha: senha }))
            setTimeout(() => {
                navigate('/')
            }, 200);
            

        } catch (error) {
            console.log(error)
            setTipoAlert('error')
            setMensagem(error.response.data.mensagem)
            
        }
    }

    return (
        <div className={styles.login_content}>
            <div className={styles.div_login}>
                <form className={styles.form_login}>
                    <h2 className={styles.h2_login}>Login</h2>
                    <TextField
                        id="outlined-basic"
                        label="Email"
                        variant="outlined"
                        type="email"
                        className={styles.input_login}
                        onChange={event => setEmail(event.target.value)}
                    />
                    <TextField
                        id="outlined-basic-password"
                        label="Senha"
                        variant="outlined"
                        type="password"
                        className={styles.input_login}
                        onChange={event => setSenha(event.target.value)}
                    />
                    <Button
                        variant="outlined"
                        className={styles.button_login}
                        onClick={handleClickLogin}
                    >
                        Enviar
                    </Button>

                    <Link to="/register">
                        <span className={styles.span_form}>
                            Criar Conta
                        </span>
                    </Link>

                </form>
            </div>
            <div className={styles.login_alert}>
                {tipoAlert === 'success' &&
                    (<Alert severity={tipoAlert}> {mensagem} </Alert>
                    )}
                {tipoAlert === 'error' &&
                    (<Alert severity={tipoAlert}> {mensagem} </Alert>
                    )}
                {tipoAlert === 'warning' && (<Alert severity={tipoAlert}> {mensagem} </Alert>
                )}

            </div>
        </div>


    )

}

export default Login