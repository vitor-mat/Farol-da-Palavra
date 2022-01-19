import Link from 'next/link';

import styles from '../../styles/Resume.module.css'
  
  
const ErrorPage = ({ resume }) => {
  
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.headerTitleText}>Farol da Palavra</h1>
          <Link href="/sobre"><a>Sobre</a></Link>
        </header>
        <main className={styles.main}>
            <span className={styles.ErrorMessage}>ERROR: NENHUM RESUMO FOI SELECIONADO.</span>
            <Link href="/"><a className={styles.btnVolar}>Voltar</a></Link>
        </main>
        <footer className={styles.footer}>
          <span className={styles.footerText}>Made by <a href="https://vitor-mat.github.io/portifolio/" target="_blank" rel="noreferrer">Vitor M.</a></span>
        </footer>
      </div>
    )
  }
  
export default ErrorPage
