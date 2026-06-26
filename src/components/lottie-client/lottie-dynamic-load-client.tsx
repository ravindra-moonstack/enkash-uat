"use client"

import dynamic from "next/dynamic"
import React, { useEffect, useState, useRef } from "react"
import {
  collectPaymentAnimation,
  expenseAnimation,
  homeAnimation,
  makePaymentAnimation,
  rewardAnimation,
} from "."

const animationMap: Record<string, () => Promise<any>> = {
  ExpenseLottie: expenseAnimation,
  RewardAnimationLottie: rewardAnimation,
  MakePaymentAnimationLottie: makePaymentAnimation,
  HomeAnimationLottie: homeAnimation,
  CollectPaymentAnimation: collectPaymentAnimation,
}

const Lottie = dynamic(() => import("@novemberfiveco/lottie-react-light"))

interface LottieDynamicLoadComponentProps {
  animationName: string
  loop?: boolean
  priority?: boolean
}

const LottieDynamicLoadComponent = ({
  animationName,
  loop = true,
  priority = false,
}: LottieDynamicLoadComponentProps) => {
  const [animationData, setAnimationData] = useState<any | null>(null)
  const [isVisible, setIsVisible] = useState(priority)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (priority) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.05, rootMargin: "200px" }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [priority])

  useEffect(() => {
    if (!isVisible) return

    const loadAnimation = async () => {
      if (animationMap.hasOwnProperty(animationName)) {
        const dynamicAnimationModule = await animationMap[animationName]()
        setAnimationData(dynamicAnimationModule.default)
      } else {
        console.error(`Animation "${animationName}" not found.`)
      }
    }

    loadAnimation()
  }, [animationName, isVisible])

  return (
    <div ref={containerRef} style={{ width: "100%", height: "100%", minHeight: "150px" }}>
      {isVisible && animationData ? (
        <Lottie animationData={animationData} loop={loop} />
      ) : null}
    </div>
  )
}

export default LottieDynamicLoadComponent
