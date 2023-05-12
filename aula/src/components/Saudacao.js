function Saudacao({nome}) {
    function gerarSaudacao(recebeNome) {
        return `Olá, ${recebeNome}, testando StateLift`
    }

    return <>{nome &&<p>{gerarSaudacao(nome)}</p>}</>
}

export default Saudacao