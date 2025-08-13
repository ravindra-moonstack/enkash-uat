"use client"

import React, { useRef, useEffect, useState, memo } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import styles from "./cardStacking.module.scss"
import { DynamicHeading } from ".."

gsap.registerPlugin(ScrollTrigger)
export interface CardStackingProps {
  cards: {
    color: string
    content: React.ReactNode
  }[]
}

const CardStacking: React.FC<CardStackingProps> = ({ cards }) => {
  const container = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<HTMLDivElement[]>([])
  const [isDesktop, setIsDesktop] = useState<boolean>(false)

  useEffect(() => {
    const checkScreen = () => setIsDesktop(window.innerWidth >= 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])
  const titleRef = useRef<HTMLDivElement>(null)
  useGSAP(() => {
    if (!isDesktop) return

    const cardEls = cardsRef.current.filter(Boolean)
    if (cardEls.length !== cards.length) return

    const firstST = ScrollTrigger.create({
      trigger: cardEls[0],
      start: "90% center",
    })
    console.log(cardEls, "card")
    const lastST = ScrollTrigger.create({
      trigger: cardEls[cardEls.length - 1],
      start: `top 100+=${titleRef.current?.offsetHeight || 0}px`,
    })
    if (titleRef.current) {
      ScrollTrigger.create({
        trigger: titleRef.current,
        start: "top 100px", // Pin when heading hits 20% from top
        end: () => lastST.start, // Unpin when last card animation starts
        pin: true,
        pinSpacing: false,
        markers: false,
        id: "heading-pin",
      })
    }
    cardEls.forEach((card, index) => {
      const scale = 1 - (cardEls.length - index) * 0.01
      const scaleAnim = gsap.to(card, {
        scale: scale,
      })

      ScrollTrigger.create({
        trigger: card,
        start: () => `top 100+=${titleRef.current?.offsetHeight || 0}px`,
        end: () => lastST.start,
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
        animation: scaleAnim,
        id: `index${index}`,
        toggleActions: "play none reverse none",
      })
    })
  }, [container, cardsRef, isDesktop])

  return (
    <section className={styles.cardStacking} ref={container}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className={`${styles.title} text-center `} ref={titleRef}>
              <DynamicHeading
                content={[
                  {
                    title: "Cards that your Employees Deserve Meal ",
                    color: "color-black",
                  },
                ]}
                headingTag="h2"
                className="f-6"
              />
            </div>
            <div className={styles.cards}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`${styles.stackCard} d-flex align-items-center justify-content-between mt-3`}
                  ref={(el) => {
                    if (el) cardsRef.current[index] = el
                  }}
                >
                  <div className="stackCard__body w-100 d-flex align-items-center justify-content-between">
                    {card.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default memo(CardStacking)
