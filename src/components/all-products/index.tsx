import React, { memo } from "react"
import Marquee from "react-fast-marquee"

import styles from "./all-products.module.scss"
import FeatureCard from "../feature-card"
import { TAllProductsProp } from "@/src/types"

const AllProducts = ({ data = [] }: TAllProductsProp): React.JSX.Element => {
  //

  return (
    <div className={`${styles.integration_row} row`}>
      <div className={`${styles.container}`}>
        <Marquee speed={70} pauseOnClick={true} pauseOnHover={true}>
          <div className="d-flex align-items-stretch pb-4 pt-4 pt-md-5">
            {data?.map((card, index) => (
              <div key={index.toString()} className="d-flex">
                <FeatureCard
                  titleHtml={card.title}
                  title2={card.title2}
                  description={card?.description}
                  cardImage={card.image}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default memo(AllProducts)
