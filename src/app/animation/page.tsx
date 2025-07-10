"use client"

import React, { useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { slideUpData } from "../products/corporate-cards/data"
import Card from "@/components/cardAnimation/card/card"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

const Page = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        start: "top-=50px top",
        end: `+=${slideUpData.length * 100}%`,
        scrub: 1,
        pin: true,
        pinSpacing: true,
        markers: true,
      },
    })

    slideUpData.forEach((_, i) => {
      const current = cardsRef.current[i]
      const prev = cardsRef.current[i - 1]

      if (!current) return

      if (i === 0) {
        tl.to(current, {
          y: 0,
          opacity: 1,
        })
      } else {
        // Enter current card
        tl.from(current, {
          y: 75, // enter from below
          opacity: 0,
        })

        // Push previous card up by 10px per level
        if (prev) {
          tl.to(
            prev,
            {
              y: -5 * i, // stack upwards with fixed spacing
              opacity: 1,
            },
            "-=0.5"
          )
        }
      }
    })

    return () => tl.kill()
  }, [])

  return (
    <div>
      <div className="cards my-5 m-auto">
        {slideUpData.map((project, i) => (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            ref={(el) => {
              cardsRef.current[i] = el
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Page
