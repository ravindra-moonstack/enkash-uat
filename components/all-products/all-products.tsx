import React from "react"
import styles from "./all-products.module.scss"

import Marquee from "react-fast-marquee"
import FeatureCard from "../featureCard/feature-card"
import { approve, auditExpence, autoCapture, reconcile, workflow } from "."

const cardData = [
  {
    title: "Auto-capture receipts",
    description: " and match them with transactions",
    image: autoCapture,
    link: "/payment-links/",
  },
  {
    title: "View, approve, and audit expenses - ",
    description: "all in one place",
    image: auditExpence,
    link: "/payment-page/",
  },
  {
    title: "Auto-reconcile ",
    description: " with your accounting software",
    image: reconcile,
    link: "/payment-button/",
  },
  {
    title: "Set policy-driven workflows",
    description: "that apply at the swipe level",
    image: workflow,
    link: "/qr-codes/",
  },
  {
    title: "Track and approve spends ",
    description: "Track and approve spends ",
    image: approve,
    link: "/auto-collect/",
  },
]

export type AllProductsDataProp = {
  title: string
  description: string
  image: string
  link: string
}

export type AllProductsProp = {
  title?: string
  subtitle?: string
  data?: Array<AllProductsDataProp>
}

const AllProducts = ({
  data = cardData,
}: AllProductsProp): React.JSX.Element => {
  return (
    <div>
      <div className={`${styles.integration_row} row`}>
        <div className={`${styles.container}`}>
          <Marquee speed={70} pauseOnClick={true}>
            {data.map((card, index) => (
              <div key={index} className="me-4">
                {" "}
                {/* Add spacing if needed */}
                <FeatureCard
                  titleHtml={card.title}
                  description={card.description}
                  cardImage={card.image}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  )
}

export default AllProducts
