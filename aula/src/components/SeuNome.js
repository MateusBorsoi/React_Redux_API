function SeuNome({setNome}){


    return (
        <div>
            <input type="text" placeholder="Digite seu nome" onChange={(event) => setNome(event.target.value)}></input>
        </div>

    )
}

export default SeuNome