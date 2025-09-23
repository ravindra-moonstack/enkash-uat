"use client"
import * as React from "react"

import styles from "./scrollable-cards-section.module.scss"
import PolicyCard from "../policy-card"
import CommanButton from "../buttons"

interface CardData {
  url?: string
  icon: string
  title: string
  description: string
  hoverClass?: string | undefined
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
  link?: string
}

const ScrollableCardsSection = ({
  cardsData,
  showScroll = false,
  maxHeight = "400px",
  buttonTitle,
  buttonTheme = "outline-blue",
  buttonUrl,
  marginBottoms,
}: ScrollableCardsSectionProps): React.JSX.Element => {
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
        {cardsData.map((item, i) => (
          <div
            key={i}
            style={{
              direction: "ltr",
              marginBottom: marginBottoms ? marginBottoms : "20px",
            }}
            className={styles.scrollCard}
          >
            <PolicyCard
              icon={item.icon}
              title={item.title}
              description={item.description}
              url={item.url}
              hoverClass={item.hoverClass}
            />
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
            <CommanButton
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
