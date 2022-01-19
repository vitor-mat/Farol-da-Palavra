export const getStaticPaths = async () => {
    const response = await fetch("http://localhost:3001/farol-da-palavra-api/");
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
    const response = await fetch("http://localhost:3001/farol-da-palavra-api/" + id)
    const data = await response.json()

    return({
        props: { data }
    })
}

import styles from '../../styles/Resume.module.css'
  
  
const selectedResumePage = ({ data }) => {

    return (
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.headerTitleText}>Farol da Palavra</h1>
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
                <img className={styles.socialMidiaIcons} src="/instagram_icon.png"/>
                <img className={styles.socialMidiaIcons} src="/facebook_icon.png"/>
                <img className={styles.socialMidiaIcons} src="/whatsapp_icon.png"/>
              </div>
            </div>
          </div>
        </main>
        <footer className={styles.footer}>
          <span className={styles.footerText}>Made by Vitor M.</span>
        </footer>
      </div>
    )
  }

  export default selectedResumePage

