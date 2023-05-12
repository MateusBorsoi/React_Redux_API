import styles from './ProjetoCard.module.css'

import { Link } from 'react-router-dom'

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

function ProjetoCard({ id, name, budget, categoria, handleRemove }) {

    const remove = (event) => {
        event.preventDefault()
        handleRemove(id)
    }

    return (
        <div className={styles.projeto_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento: </span> {parseFloat(budget).toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})}
            </p>
            <p className={styles.categoria_text}>
                <span className={`${styles[categoria.toLowerCase()]}`}></span> {categoria}
            </p>
            <div className={styles.projeto_card_actions}>
                <Link to={`/projeto/${id}`}>
                    <BsPencil />  Editar
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>

            </div>
        </div>
    )
}

export default ProjetoCard