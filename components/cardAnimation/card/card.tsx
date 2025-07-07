"use client"
import Image from "next/image"
import styles from "./card.module.scss"
import icon from "./img/primaryIcon.svg"
import { Heading } from "@/components"
import blueArrow from "./img/blue-arrrow.svg"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"

interface CardProps {
  i: number
  title: string
  description: string
  src: string
}

const Card: React.FC<CardProps> = ({ i, title, description, src }) => {
  return (
    <div className={styles.cardContainer}>
      <div
        style={{
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={styles.card}
      >
        <div className={styles.body}>
          <div className={`d-flex col-6 align-items-start gap-3 p-3 `}>
            {/* Icon */}
            <div
              className="d-flex justify-content-center align-items-center bg-light rounded-circle"
              style={{ width: "55px", height: "55px" }}
            >
              <Image src={icon} alt="icon" />
            </div>

            {/* Title and Description */}
            <div className="d-flex flex-column gap-3">
              <Heading title={title} color="black" size="h4" weight="5" />
              <Heading title={description} color="black" size="h5" weight="4" />
              <div className="mt-5">
                <RectangleButton
                  title="Get started today"
                  theme="border-gray"
                  actionImage={blueArrow}
                  iconSize={15}
                  url="/sales/?source=receivables"
                />
              </div>
            </div>
          </div>
          <div className={styles.imageContainer}>
            <div className={styles.inner}>
              <Image fill src={src} alt="image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
