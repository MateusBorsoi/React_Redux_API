import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'
import Logo from '../img/users.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../Redux/user/selectors'
import { Avatar, Chip } from '@mui/material'

function Navbar() {

    const user = useSelector(selectUser)

    let useremail
    if (user) {
        useremail = user.email
    }


    return (

        <nav className={styles.nav_content}>

            <div className={styles.nav_div}>
                <div className={styles.nav_user}>
                    {user && (<Chip className={styles.nav_chip} avatar={<Avatar></Avatar>} label={useremail} />)}
                </div>
                <img src={Logo} className={styles.nav_img}
                ></img>
                <ul className={styles.nav_ul}>
                    <li className={styles.li_itens}>
                        <Link to="/login"> Login</Link>

                    </li>
                    <li className={styles.li_itens}>
                        <Link to="/users">Usuários</Link>
                    </li>
                    <li className={styles.li_itens}>
                        <Link to="/empresas">Empresas</Link>
                    </li>
                    <li className={styles.li_itens}>
                        <Link to="/">Home</Link>
                    </li>
                </ul>

            </div>
        </nav>

    )
}

export default Navbar