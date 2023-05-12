import { useState } from 'react'

function Condicional() {

    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()


    function enviarEmail(event) {
        event.preventDefault()
        setUserEmail(email)
    }

    function limparEmail() {
        setUserEmail('')
    }

    return (
        <div>
            <h2>Cadastre seu E-mail</h2>
            <form>
                <input type='email' placeholder='Informe seu Email' onChange={(event) => setEmail(event.target.value)} />
                <button type='submit' onClick={enviarEmail}>Enviar</button>

                {userEmail && (
                    <div>
                        <p>O e-mail do usuário é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar Email</button>
                    </div>
                )}
            </form>

        </div>

    )

}

export default Condicional