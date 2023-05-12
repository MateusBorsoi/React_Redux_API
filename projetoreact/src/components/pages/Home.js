import styles from './Home.module.css'
import savings from '../../img/savings.png'
import LinkButton from '../layout/LinkButton'


function Home() {
    return(
        <section className={styles.home_container}>
            <h1>Bem-Vindo(a) ao <span> Sailor!</span>
            </h1>
            <p>Gerencie Seus projetos agora mesmo!</p>
           <LinkButton para="/novoprojeto" text="Criar Projeto"/>
            <img src={savings} alt="Sailor"/>
        </section>
      
    )
    
}

export default Home