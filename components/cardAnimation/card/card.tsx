"use client"
import Image from "next/image"
import styles from "./card.module.scss"
import icon from "./img/primaryIcon.svg"
import { Heading } from "@/components"
import blueArrow from "./img/blue-arrrow.svg"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import React, { forwardRef } from "react"

interface CardProps {
  i: number
  title: string
  description: string
  src: string
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ i, title, description, src }, ref) => {
    return (
      <div
        className={`${styles.customCard} card card${i + 1}`}
        id={String(i + 1)}
        ref={ref}
        style={{
          zIndex: i + 1,
        }}
      >
        <div className={styles.body}>
          <div className={`d-flex col-6 align-items-start gap-3 p-3`}>
            <div
              className="d-flex justify-content-center align-items-center bg-light rounded-circle"
              style={{ width: "55px", height: "55px" }}
            >
              <Image src={icon} alt="icon" />
            </div>
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
    )
  }
)

Card.displayName = "Card"
export default Card
