import styles from '../project/ProjetoCard.module.css'

import { BsFillTrashFill } from 'react-icons/bs'

function ServiceCard({ id, name, cost, description, handleRemove }) {

    const remove = (e) => {
        e.preventDefault()
        handleRemove(id, cost)

    }

    return (
        <div className={styles.projeto_card}>
            <h4>{name}</h4>
            <p>
                <span>Custo total: {parseFloat(cost).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span>
            </p>
            <p>
                {description}
            </p>
            <div className={styles.projeto_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    )
}

export default ServiceCard