"use client"

import dynamic from "next/dynamic"
import React, { useEffect, useState } from "react"
import {
  collectPaymentAnimation,
  corporateCardAnimation,
  expenseAnimation,
  homeAnimation,
  makePaymentAnimation,
  rewardAnimation,
} from "."

const animationMap: Record<string, () => Promise<any>> = {
  ExpenseLottie: expenseAnimation,
  CorporateCardLottie: corporateCardAnimation,
  RewardAnimationLottie: rewardAnimation,
  MakePaymentAnimationLottie: makePaymentAnimation,
  HomeAnimationLottie: homeAnimation,
  CollectPaymentAnimation: collectPaymentAnimation,
}

const Lottie = dynamic(() => import("@novemberfiveco/lottie-react-light"))

interface LottieDynamicLoadComponentProps {
  animationName: string
  loop: boolean
}

const LottieDynamicLoadComponent = ({
  animationName,
  loop = true,
}: LottieDynamicLoadComponentProps) => {
  const [animationData, setAnimationData] = useState<any | null>(null)

  useEffect(() => {
    const loadAnimation = async () => {
      if (animationMap.hasOwnProperty(animationName)) {
        const dynamicAnimationModule = await animationMap[animationName]()
        setAnimationData(dynamicAnimationModule.default)
      } else {
        console.error(`Animation "${animationName}" not found.`)
      }
    }

    loadAnimation()
  }, [animationName])

  return (
    <>{animationData && <Lottie animationData={animationData} loop={loop} />}</>
  )
}

export default LottieDynamicLoadComponent
