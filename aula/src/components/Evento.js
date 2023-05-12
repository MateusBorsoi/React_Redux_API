
import Button from './evento/Button'

function Evento() {

    function ativaEvento() {

        alert(`Ativando primeiro evento`)
    }

    function segundoEvendo() {
        alert('Ativando o segundo evento')
        
    }

    return (
        <div>
            <p>Clique para Disparar um evento:</p>
            <Button event={ativaEvento} text="Primeiro Evento" />
            <Button event={segundoEvendo} text="Segundo Evento" />
        </div>



    )
}

export default Evento