import React from "react"
import styles from "./contact-card.module.scss"

type Props = {
  title: string
  description: string
  email: string[]
  phone?: string
}

const ContactCard: React.FC<Props> = ({ title, description, email, phone }) => {
  return (
    <div className={styles.contactBlock}>
      <div className={styles.topSection}>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactItem}>
          {/* <Mail className={styles.icon} /> */}
          <ul>
            {email.map((e, idx) => (
              <li key={idx}>{e}</li>
            ))}
          </ul>
        </div>
        {phone && (
          <div className={styles.contactItem}>
            {/* <Phone className={styles.icon} /> */}
            <span>{phone}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactCard
