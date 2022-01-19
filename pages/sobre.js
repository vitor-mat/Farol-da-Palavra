import Link from 'next/link';

import styles from '../styles/Sobre.module.css'

export default function Sobre({ data }) {

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.headerTitleText}>Farol da Palavra</h1>
        <Link href="/sobre"><a>Sobre</a></Link>
      </header>
      <main className={styles.main}>
        <h2 className={styles.sobreTitle}>Sobre</h2>
        <p className={styles.sobreContent}>
            Esta é uma aplicação desenvolvida por <a href="https://vitor-mat.github.io/portifolio/" target="_blank" rel="noreferrer">Vitor M.</a> com o intuito de ajudar todo e qualquer cristão no estudo da Bíblia, neste site estão disponibilizados 
            resumos sobre cada texto bíblico divididos em 365 grupos para uma leitura anual da Palavra de Deus. Quero agradecer ao <a href="https://www.instagram.com/mestre.andreluiz/" target="_blank" rel="noreferrer">Mestre André Luíz</a>, autor de 
            cada um dos resumos aqui presente disponibilizados gratuitamente para os estudos de todos aqueles buscam conhecimento na Palavra de forma gratuita. Como sinal de gratidão 
            peço a todos que se possível estejam visitando as redes sociais dele, seguindo, curtindo publicações e coisas do tipo, para que seu trabalho seja divulgado <b>(elas podem ser encontradas ao final de cada resumo)</b>.
        </p>
      </main>
      <footer className={styles.footer}>
        <span className={styles.footerText}>Made by <a href="https://vitor-mat.github.io/portifolio/" target="_blank" rel="noreferrer">Vitor M.</a></span>
      </footer>
    </div>
  )
}
