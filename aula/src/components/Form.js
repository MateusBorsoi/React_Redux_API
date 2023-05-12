import styles from './Form.module.css'

import { useState } from 'react'

function Form() {

    function cadastrarUsuario(event) {
        event.preventDefault()
        console.log(`Usuário: ${nome}, Email ${email}, Senha: ${senha}`)
    
    }

    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()
    const [email, setEmail] = useState()



    return (
        <div className={styles.formContainer}>
            <h1 className={styles.txtContent}>Meu Cadastro:</h1>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome" className={styles.labelArea}>Nome: </label>
                    <input type="text" id="nome" placeholder="Digite seu nome" onChange={(event) => setNome(event.target.value)}
                        className={styles.formContent} />
                </div>
                <div >
                    <label htmlFor='email' className={styles.labelArea}>Email: </label>
                    <input type='text' id="email" placeholder='Digite seu email' onChange={(event) => setEmail(event.target.value)}
                    className={styles.formContent}/>
                </div>
                <div>
                    <label htmlFor="senha" className={styles.labelArea}>Senha: </label>
                    <input type="password" id="senha" placeholder="Digite sua Senha" onChange={(event) => setSenha(event.target.value)}
                        className={styles.formContent} />
                </div>

                <div>
                    <input type="submit" value="Cadastrar" className={styles.buttonContent} />
                </div>


            </form>

        </div>
    )
}

export default Form