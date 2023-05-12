import styles from './Pessoa.module.css'



function Pessoa({ foto, nome, idade, profissao }) {
 
    return (
        <div className={styles.pessoaContainer}>

            <div className={styles.pessoaTxt}>
                
                <img src={foto} className={styles.pessoaImg} alt='Imagem Pessoa'></img>
                <p className={styles.pessoaContent} >Nome: {nome}</p>
                <p className={styles.pessoaContent} >Idade: {idade}</p>
                <p className={styles.pessoaContent}>Profissão: {profissao}</p>


            </div>

        </div>
    )
}

export default Pessoa