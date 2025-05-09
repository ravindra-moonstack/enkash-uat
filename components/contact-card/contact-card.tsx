import React from "react"
import styles from "./contact-card.module.scss"
import call from "./img/phoneIcon.svg"
import mail from "./img/mailIcon.svg"
import Image from "next/image"

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
          <Image
            src={mail}
            alt="Contact Enkash"
            className={styles.help_icons}
            width={22}
            height={18}
          />
          <ul>
            {email.map((e, idx) => (
              <li key={idx}>{e}</li>
            ))}
          </ul>
        </div>
        {phone && (
          <div className={styles.contactItem}>
            <Image
              src={call}
              alt="Contact Enkash"
              className={styles.help_icons}
              width={22}
              height={18}
            />
            <span>{phone}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactCard
