import React from "react"
import Title from "../Title"
import styles from '../../css/contact.module.css'

const Contact = () => {
  return (
    <section className={styles.contact}>
      <Title title="nous" subtitle="contacter"/>
      <div className={styles.center}>
        <form className={styles.form} action="https://formspree.io/farid.benmebarek@hotmail.fr" method="POST">
          <div>
            <label htmlFor="name">nom</label>
            <input required type="text" name="name" id="name" className={styles.formControl} placeholder="john doe"/>
          </div>
          <div>
            <label htmlFor="email">email</label>
            <input required type="email" name="email" id="email" className={styles.formControl} placeholder="example@email.com"/>
          </div>
          <div>
            <label htmlFor="message">message</label>
            <textarea required name="message" id="message" rows="10" className={styles.formControl} placeholder="votre message..."/>
          </div>
          <div>
            <input type="submit" value="envoyer" className={styles.submit}/>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact
