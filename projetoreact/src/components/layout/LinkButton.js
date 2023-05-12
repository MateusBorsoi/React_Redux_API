import { Link } from 'react-router-dom'

import styles from './LinkButton.module.css'

function LinkButton({para, text}) {
    return (
        <Link className={styles.btn} to={para}>
            {text}
        </Link>
    )
}

export default LinkButton