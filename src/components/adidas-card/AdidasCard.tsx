import React from "react"
import Image from "next/image"
import styles from "./AdidasCard.module.scss"
import DynamicHeading from "../dynamic-heading"

interface AdidasCardProps {
  image: string
  title1: string
  title2?: string
  description: string
  name: string
  role: string
  profileImg: string
  rightTopIcon?: string
  backLogo: string
  ourlayClass?: string
}

const AdidasCard: React.FC<AdidasCardProps> = ({
  image,
  title1,
  title2,
  description,
  name,
  role,
  profileImg,
  rightTopIcon,
  backLogo,
  ourlayClass = "",
}) => {
  return (
    <div className={`${styles.cordData}`}>
      <div
        className={`${styles.cardsDataFront} ${ourlayClass}`}
        style={{ backgroundImage: `url(${image})` }}
      >
        {rightTopIcon && (
          <div className={`${styles.rightTopIcon}`}>
            <Image
              src={rightTopIcon}
              alt="icon"
              width={40}
              height={40}
              className="card-img-top"
            />
          </div>
        )}

        <div className={`${styles.frontHeading}`}>
          <DynamicHeading
            content={[
              {
                title: title1 + " ",
                color: "color-white f-3",
              },
              {
                title: title2,
                color: "color-white",
              },
            ]}
            headingTag="h5"
            className="f-5"
          />
        </div>
      </div>
      <div className={`${styles.backCardData}`}>
        <div className={`${styles.backTopIcon}`}>
          <Image src={backLogo} alt="logo" width={100} height={50} />
        </div>
        <div className={`${styles.backContent}`}>
          <DynamicHeading
            content={[
              {
                title: description,
                color: "color-black",
              },
            ]}
            headingTag="p"
            className="f-4"
          />
        </div>

        <div className={`${styles.profile}`}>
          <Image src={profileImg} alt={name} width={40} height={40} />
          <div className={`${styles.profileSection}`}>
            <strong>{name}</strong>
            <span>{role}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdidasCard
