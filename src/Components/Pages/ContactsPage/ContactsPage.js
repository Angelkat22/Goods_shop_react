import React from 'react'
import styles from './ContactsPage.module.css'

function ContactsPage() {
  return (
    <div className={styles.contact_page}>
        <h2>Contact us</h2>
        <p><a href='https://WA.ME/+37129178906' target='_blank'>WhatsApp</a></p>
        <div className={styles.contact_map}> 
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d18950.41142351792!2d9.87456335!3d53.579160449999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sde!4v1681328454149!5m2!1sen!2sde" lowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
  )
}



export default ContactsPage