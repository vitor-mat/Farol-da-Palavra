import Link from 'next/link';

import styles from '../../styles/Resume.module.css'

const environment = process.env.DEV_ENVIRONMENT !== "production"

const apiUrl = environment ? "http://localhost:3001/farol-da-palavra-api/" : "https://farol-da-verdade-api.herokuapp.com/farol-da-palavra-api/"

export const getStaticPaths = async () => {
    const response = await fetch(apiUrl);
    const data = await response.json();

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
    const response = await fetch(apiUrl + id)
    const data = await response.json()

    return({
        props: { data }
    })
}
  
  
const selectedResumePage = ({ data }) => {

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/"><a><h1 className={styles.headerTitleText}>Farol da Palavra</h1></a></Link>
          <Link href="/sobre"><a className={styles.linkSobreHeader}>Sobre</a></Link>
        </header>
        <main className={styles.main}>
          <h2 className={styles.resumeTitle}>
            {`Dia ${data.day} - ${data.title}`}
          </h2>
          <div className={styles.resumeContent}>{
            data.content.map((value, index) => {
              return(
                <span key={index}>{value}</span>
              )
            })
          }
          </div>
          <div className={styles.resumeFooter}>
            <img className={styles.authorFoto} src="/andre_foto.png" />
            <div className={styles.resumeFooterDataDiv}>
              <span>Autor: Mestre André Luiz Ministério de Ensino Paulo Afonso-Ba</span>
              <div className={styles.resumeFoterDataContactsDiv}>
                <span>Contatos:</span>
                <a href="https://www.instagram.com/mestre.andreluiz/" target="_blank" rel="noreferrer"><img className={styles.socialMidiaIcons} src="/instagram_icon.png"/></a>
                <a href="https://www.facebook.com/msandreluiz" target="_blank" rel="noreferrer"><img className={styles.socialMidiaIcons} src="/facebook_icon.png"/></a>
                <a href="https://wa.me/5575992259926" target="_blank" rel="noreferrer"><img className={styles.socialMidiaIcons} src="/whatsapp_icon.png"/></a>
              </div>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <span className={styles.footerText}>Made by <a href="https://vitor-mat.github.io/portifolio/" target="_blank" rel="noreferrer">Vitor M.</a></span>
        </footer>
      </div>
    )
  }

  export default selectedResumePage

