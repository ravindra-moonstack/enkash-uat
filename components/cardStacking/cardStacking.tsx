"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import styles from "./cardStacking.module.scss"

gsap.registerPlugin(ScrollTrigger)

export interface CardStackingProps {
  cards: {
    color: string
    content: React.ReactNode
  }[]
}

const CardStacking: React.FC<CardStackingProps> = ({ cards }) => {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    const cardEls = cardsRef.current.filter(Boolean)
    if (!cardEls.length) return

    // const firstST = ScrollTrigger.create({
    //   trigger: cardEls[0],
    //   start: "center center",
    // })

    const lastST = ScrollTrigger.create({
      trigger: cardEls[cardEls.length - 1],
      start: "center center",
    })

    cardEls.forEach((card, index) => {
      const scale = 1 - (cardEls.length - index) * 0.025
      const scaleAnim = gsap.to(card, {
        scale: scale,
        "transform-origin": '"50% ' + lastST.start + '"',
      })

      ScrollTrigger.create({
        trigger: card,
        start: "40% 60%",
        end: () => lastST.start,
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
        animation: scaleAnim,
        toggleActions: "restart none none reverse",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <section className={styles.cardStacking}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className={styles.cards}>
              {cards.map((card, index) => (
                <div
                  key={index}
                  className={`${styles.stackCard} d-flex align-items-center justify-content-between`}
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

export default CardStacking
