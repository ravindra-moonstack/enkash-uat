"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

import styles from "./page.module.scss" // If you’re using SCSS modules

import { greenIcon, notificationImage } from "../payment-button"
import AllInOnePolicy from "@/components/all-in-one-policy/all-in-one-policy"

gsap.registerPlugin(ScrollTrigger)

const cardsData = [
  { color: "#Ffff", text: "Header 3" },
  { color: "#ffff", text: "Header 2" },
  { color: "#ffff", text: "Header 1" },
  { color: "#Ffff", text: "Header 3" },
  { color: "#ffff", text: "Header 2" },
  { color: "#ffff", text: "Header 1" },
]

const CardStacking: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([])

  useGSAP(() => {
    const cards = cardsRef.current.filter(Boolean)

    if (!cards.length) return

    // const firstCardST = ScrollTrigger.create({
    //   trigger: cards[0],
    //   start: "center center",
    // })

    const lastCardST = ScrollTrigger.create({
      trigger: cards[cards.length - 1],
      start: "center center",
    })

    cards.forEach((card, index) => {
      const scale = 1 - (cards.length - index) * 0.025

      const scaleDown = gsap.to(card, {
        scale: scale,
        transformOrigin: "50% -160%",
      })

      ScrollTrigger.create({
        trigger: card,
        start: "center center",
        end: () => lastCardST.start,
        pin: true,
        pinSpacing: false,
        scrub: true,
        markers: false,
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <div>
      <section className={styles.spacer} />

      <section className={styles.cardStacking}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className={styles.cards}>
                {cardsData.map((card, index) => (
                  <div
                    key={index}
                    className={`${styles.stackCard} d-flex align-items-center justify-content-between`}
                    style={{
                      backgroundColor: card.color,
                      border: "2px solid black",
                    }}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el
                    }}
                  >
                    <div className="stackCard__body w-100 d-flex align-items-center justify-content-between">
                      <span className="stackCard__body-content-header d-block">
                        {card.text}
                      </span>

                      <AllInOnePolicy
                        icon={greenIcon}
                        title="Match Your Style"
                        description="Match your brand’s look and feel with customizable styles, colors, and text. Design buttons that align with your business identity, creating a consistent and professional appearance for your online presence."
                        image={notificationImage}
                        buttonUrl="/sales/?source=expense_management"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.spacer} />
    </div>
  )
}

export default CardStacking
