import Frase from './Frase.js';
import styles from './HelloWorld.module.css'

function HelloWorld() {
    return (
        <div className={styles.helloworldContainer}>
            <Frase/>
            <h3 className={styles.helloworldContent}>Olá, mundo, tentando componentes</h3>
            
        </div>

    )
}
export default HelloWorld