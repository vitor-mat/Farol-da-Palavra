import styles from '../../styles/Resume.module.css'
  
  
const ErrorPage = ({ resume }) => {
  
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.headerTitleText}>Farol da Palavra</h1>
        </header>
        <main className={styles.main}>
            <span>ERROR: NENHUM RESUMO FOI SELECIONADO.</span>
        </main>
        <footer className={styles.footer}>
          <span className={styles.footerText}>Made by Vitor M.</span>
        </footer>
      </div>
    )
  }
  
export default ErrorPage
