"use client"

import * as React from "react"
import styles from "./scrollable-cards-section.module.scss"
import PolicyCard from "../policyCard/policyCard"
import RectangleButton from "../buttons/rectangle-button/rectangle-button"

interface CardData {
  icon: string
  title: string
  description: string
}

interface ScrollableCardsSectionProps {
  cardsData: CardData[]
  showScroll?: boolean
  maxHeight?: string
  buttonTitle: string
  buttonTheme?:
    | "blue"
    | "green"
    | "black"
    | "outline-blue"
    | "border-gray"
    | "border-black"
  buttonUrl?: string
  marginBottoms?: string
  link?: string // Optional link prop for PolicyCard
}

const ScrollableCardsSection: React.FC<ScrollableCardsSectionProps> = ({
  cardsData,
  showScroll = false,
  maxHeight = "400px",
  buttonTitle,
  buttonTheme = "outline-blue",
  buttonUrl,
  marginBottoms,
  link
}) => {
  return (
    <>
      <div
        className={`mt-md-5 ${styles.scrollBoxOuter} ${
          showScroll ? "overflow-auto scrollbar-thin" : ""
        }`}
        style={{
          maxHeight,
          direction: showScroll ? "rtl" : "ltr",
        }}
      >
        {cardsData.map(({ icon, title, description }, i) => (
          <div
            key={i}
            style={{ direction: "ltr",
              marginBottom: marginBottoms
                ? marginBottoms
                : "50px" }}
            className={styles.scrollCard}

          >
            <PolicyCard icon={icon} title={title} description={description} link={link} />
          </div>
        ))}
      </div>
      {buttonTitle && (
        <div
          className={`${
            showScroll
              ? styles["scrollCardButton--scroll"]
              : styles["scrollCardButton"]
          }`}
        >
          <div className={styles.list_button}>
            <RectangleButton
              title={buttonTitle}
              theme={buttonTheme}
              url={buttonUrl}
            />
          </div>
        </div>
      )}
    </>
  )
}

export default ScrollableCardsSection
