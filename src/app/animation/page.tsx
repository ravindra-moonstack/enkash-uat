"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Image from "next/image"
import { slideUpData } from "../products/corporate-cards/data"
import styles from "./page.module.scss"
import { Heading } from "@/components"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"

gsap.registerPlugin(ScrollTrigger)

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
        markers: true,
        animation: scaleDown,
        toggleActions: "restart none none reverse",
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  return (
    <div className="bg-black p-5">
      <section className={styles.spacer} />

      <section className={styles.cardStacking}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className={styles.cards}>
                {slideUpData.map((card, index) => (
                  <div
                    key={index}
                    className={`${styles.stackCard} d-flex align-items-center justify-content-between`}
                    ref={(el) => {
                      if (el) cardsRef.current[index] = el
                    }}
                  >
                    <div className={`row ${styles.body}`}>
                      <div className="d-flex col-12 col-md-6 align-items-start gap-3 p-3">
                        <div
                          className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                          style={{ width: "55px", height: "55px" }}
                        >
                          <Image
                            src={card.icon}
                            alt="icon"
                            width={30}
                            height={30}
                          />
                        </div>
                        <div className="d-flex flex-column gap-3">
                          <Heading
                            title={card.title}
                            color="black"
                            size="h4"
                            weight="5"
                          />
                          <Heading
                            title={card.description}
                            color="black"
                            size="h5"
                            weight="4"
                          />
                          <div className="mt-5">
                            <RectangleButton
                              title="Get started today"
                              theme="border-gray"
                              iconSize={15}
                              url="/sales/?source=receivables"
                            />
                          </div>
                        </div>
                      </div>

                      <div
                        className={`pb-2 col-12 col-md-6 ${styles.imageContainer}`}
                      >
                        <div className={styles.inner}>
                          <Image fill src={card.src} alt="image" />
                        </div>
                      </div>
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
