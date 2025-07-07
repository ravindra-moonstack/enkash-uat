// components/allProducts/AllProducts.tsx
import React from "react"
import styles from "./all-products.module.scss"
import Marquee from "react-fast-marquee"
import FeatureCard from "../featureCard/feature-card"

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
 
  data = [],
}: AllProductsProp): React.JSX.Element => {
  return (
    <div className={`${styles.integration_row} row`}>
      <div className={`${styles.container}`}>
        <Marquee speed={70} pauseOnClick={true}>
          {data.map((card, index) => (
            <div key={index} className="me-4" >
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
  )
}

export default AllProducts
