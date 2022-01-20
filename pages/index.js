import Link from 'next/link';

import styles from '../styles/Home.module.css'

const environment = process.env.DEV_ENVIRONMENT !== "production"

const apiUrl = environment ? "http://localhost:3001/farol-da-palavra-api/" : "https://farol-da-verdade-api.herokuapp.com/farol-da-palavra-api/"

export const getStaticProps = async () => {
  
  const response = await fetch(apiUrl)
  const data = await response.json();

  return({
    props: { data },
    revalidate: 300
  })

}



export default function Home({ data }) {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href="/"><a><h1 className={styles.headerTitleText}>Farol da Palavra</h1></a></Link>
        <Link href="/sobre"><a className={styles.linkSobreHeader}>Sobre</a></Link>
      </header>
      <main className={styles.main}>
        <div className={styles.daysContainer}>
        {
          data.map(({ id, day}) => {
            return(
                <Link href={`/resume/${id}`} key={id}><a className={styles.daysItems}>{day}</a></Link>
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
