import styles from './Button.module.css'

function Button(props) {
    return <button onClick={props.event} className={styles.eventoButton}> {props.text}</button>
}

export default Button