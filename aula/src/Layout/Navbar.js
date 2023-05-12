import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';
import { FaWarehouse, FaConnectdevelop, FaEnvira, FaRedhat } from 'react-icons/fa'

function Navbar() {
  return (
    <ul className={styles.lista}>
      <li className={styles.item}>
        <Link to="/">Home <FaWarehouse /></Link>
      </li>
      <li className={styles.item}>
        <Link to="/empresa">Empresa <FaConnectdevelop /></Link>
      </li>
      <li className={styles.item}>
        <Link to="/contato">Contato <FaEnvira /></Link>
      </li>
      <li className={styles.item}>
        <Link to="/sobre">Sobre <FaRedhat /> </Link>
      </li>
    </ul>

  )
}

export default Navbar