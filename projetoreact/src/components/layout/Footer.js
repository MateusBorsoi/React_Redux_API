import { FaFacebookSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'


import styles from './Footer.module.css'

function Footer() {

    const data = new Date()

    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaFacebookSquare />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
               
            </ul>
            <p className={styles.copy_right}><span >Sailor </span>&copy; {data.getFullYear()}</p>
        </footer>
    )
}

export default Footer