"use client"
import React, { useState } from "react"
import styles from "./tabPoliciesWrapper.module.scss"
import PoliciesCard from "@/src/components/policies-card/policies-card"
import { StaticImageData } from "next/image"

interface Tab {
  key: string
}

interface Card {
  key: string
  description: string
  titleHtml: string
  cardImage: string | StaticImageData
  buttonUrl: string
}

interface TabPoliciesWrapperProps {
  tabs: Tab[]
  cards: Card[]
}

const TabPoliciesWrapper: React.FC<TabPoliciesWrapperProps> = ({
  tabs,
  cards,
}) => {
  const [activeTab, setActiveTab] = useState<string | null>(null)

  return (
    <div>
      {/* Tabs */}
      <div className={`row ${styles.tabBar}`}>
        {tabs.map((tab) => (
          <div key={tab.key} className="col-md-4 col-12">
            <div
              className={`${styles.tab} ${
                activeTab === tab.key ? styles.activeTab : ""
              }`}
            />
          </div>
        ))}
      </div>

      {/* Cards */}
      <div className={`${styles.cardList} row`}>
        {cards.map((card) => (
          <div key={card.key} className="col-md-4 col-12">
            <div
              onMouseEnter={() => setActiveTab(card.key)}
              onMouseLeave={() => setActiveTab(null)}
            >
              <PoliciesCard
                description={card.description}
                titleHtml={card.titleHtml}
                cardImage={card.cardImage}
                buttonUrl={card.buttonUrl}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TabPoliciesWrapper
