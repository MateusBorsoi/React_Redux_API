import styles from './List.module.css'
import Item from './Item'

function List() {

    return (
        <>
            <ul className={styles.listaContent}>
               <Item marca= "Fiat" ano_lancamento={2008}/>
               <Item marca= "Ford" ano_lancamento={2023}/>
               <Item />
            </ul>
        </>
    )
}

export default List