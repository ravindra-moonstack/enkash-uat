import React from "react"
import styles from "./contact-card.module.scss"
import call from "./img/phoneIcon.svg"
import mail from "./img/mailIcon.svg"
import Image from "next/image"
import Heading from "@/components/heading/heading"

type Props = {
  title: string
  description: string
  email: string[]
  phone?: string
  titleSecond: string
}

const ContactCard: React.FC<Props> = ({
  title,
  description,
  email,
  phone,
  titleSecond,
}) => {
  return (
    <div className={styles.contactBlock}>
      <div className={styles.topSection}>
        <Heading title={title} size="h2" weight="6" />
        <Heading title={titleSecond} size="h2" weight="6" />
        <p>{description}</p>
      </div>
      <div className={styles.contactSection}>
        <div className={styles.contactItem}>
          <div className={styles.contactIcon}>
            <Image
              src={mail}
              alt="Contact Enkash"
              className={styles.help_icons}
              width={22}
              height={18}
            />
          </div>
          <ul>
            {email.map((e, idx) => (
              <li key={idx}>{e}</li>
            ))}
          </ul>
        </div>
        {phone && (
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>
              <Image
                src={call}
                alt="Contact Enkash"
                className={styles.help_icons}
                width={22}
                height={18}
              />
            </div>
            <span>{phone}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ContactCard
