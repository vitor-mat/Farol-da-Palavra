export const getStaticPaths = async () => {
    const response = await fetch("http://localhost:3001/farol-da-palavra-api/")
    const data = response.json();

    const paths = data.map(value => {
        return {
            params: { id: value.id.toString()}
        }
    })

    return({
        paths,
        fallback: false
    })
}

export const getStaticProps = async (context) => {
    const id = context.params.id
    const response = fetch("http://localhost:3001/farol-da-palavra-api/" + id)
}

import styles from '../styles/Home.module.css'
  
  
  export default function Resume() {
  
    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.headerTitleText}>Farol da Palavra</h1>
        </header>
        <main className={styles.main}>

        </main>
        <footer className={styles.footer}>
          <span className={styles.footerText}>Made by Vitor M.</span>
        </footer>
      </div>
    )
  }
  
