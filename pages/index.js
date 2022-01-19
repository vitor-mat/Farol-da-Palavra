import Link from 'next/link';

import styles from '../styles/Home.module.css'

export const getStaticProps = async () => {
  
  const response = await fetch("http://localhost:3001/farol-da-palavra-api/")
  const data = await response.json();

  return({
    props: { data }
  })

}



export default function Home({ data }) {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitleText}>Farol da Palavra</h1>
        <Link href="/sobre"><a>Sobre</a></Link>
      </header>
      <main className={styles.main}>
        <div className={styles.daysContainer}>
        {
          data.map(({ id, day}) => {
            return(
              <div className={styles.daysItems} key={id}>
                <Link href={`/resume/${id}`}><a>{day}</a></Link>
              </div>
            )
          })
        }
        </div>
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerText}>Made by <a href="https://vitor-mat.github.io/portifolio/" target="_blank" rel="noreferrer">Vitor M.</a></span>
      </footer>
    </div>
  )
}
