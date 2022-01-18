import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
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
