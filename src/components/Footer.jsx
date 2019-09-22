import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import styles from "../css/footer.module.css"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (<AniLink fade key={index} to={item.path}>{item.text}</AniLink>)
        })}
        <AniLink cover direction="right" bg="#fff" key={4} to="/contact">contact</AniLink>
      </div>
      <div className={styles.icons}>
        {socialIcons.map((item, index)=>{
          return (<a key={index} href={item.url} target="_blank" rel="noopener noreferrer">{item.icon}</a>)
        })}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Backroads Travel Company {new Date().getFullYear()} tous droits réservés
      </div>
      <div className={styles.amiral}>
        Réalisé par <a href="https://farid-benmebarek.fr" target="_blank" rel="noopener noreferrer">Amiral du Web</a>
      </div>
    </footer>
  )
}

export default Footer
