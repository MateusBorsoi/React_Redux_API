import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'

import logo from '../../img/logo.png'

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Sailor" className={styles.img} />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/projetos">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                    <Link to="/empresa">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contato">Contato</Link>
                    </li>
                </ul>

            </Container>
        </nav>
    )
}

export default Navbar