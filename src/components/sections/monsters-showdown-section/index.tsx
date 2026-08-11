import React from "react"
import styles from "./monsters-showdown.module.scss"
import { FeatureCard } from "@/src/components"
import DynamicHeading from "../../dynamic-heading"

const featuresList = [
  {
    title: "Reliable under pressure",
    description: "Infrastructure built for real payment moments.",
  },
  {
    title: "Developer-grade technology",
    description: "Clean APIs, realistic testing and useful error codes.",
  },
  {
    title: "Human support when it matters",
    description: "Real people who understand your payment context.",
  },
  {
    title: "Built for serious growth",
    description: "Industry-native payment journeys that scale",
  },
]

const showdownCards = [
  {
    title: "A Real Human Picks Up",
    description:
      "Botzila crashes the moment a real payments expert appears. No ticket queue, no bot — a payments specialist who has read your integration and can tell you exactly what happened.",
    icon: "/svgs/realHuman.svg",
  },
  {
    title: "Docs That Don’t Lie",
    description:
      "Clean REST APIs, versioned docs, granular error codes, and a sandbox that behaves like production. Simple, honest integration ends Complica’s chaos.",
    icon: "/svgs/docsThat.svg",
  },
  {
    title: "Checkout At Full Speed",
    description:
      "Fast payments and one-click checkout leave Lazlo no time to slow anything down. The loading bar he loved is gone before he wakes up.",
    icon: "/svgs/CheckoutAt.svg",
  },
  {
    title: "Payments That Actually Land",
    description:
      "High success rates, business-aware routing, and reliable infrastructure. A 50,000-rupee booking isn’t routed like a skincare order. It’s the only thing PayNo truly fears.",
    icon: "/svgs/PaymentsThat.svg",
  },
]

const MonstersShowdownSection = () => {
  return (
    <section className={styles.showdown_section}>
      <div className="max-w-auto">
        <div className={styles.showdown_header}>
          <DynamicHeading
            content={[
              {
                title: "The Showdown",
                color: "color-grey-200",
              },
            ]}
            headingTag="h2"
          />
        </div>

        <div className={styles.showdown_cards}>
          {showdownCards.map((card, index) => (
            <div key={index} className="d-flex">
              <FeatureCard
                titleHtml={card.title}
                description={card.description}
                cardImage={card.icon}
                hoverClass={styles.hoverClass}
                iconWidth={48}
                headingTag="h3"
                headingClassName="heading-h5"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MonstersShowdownSection
