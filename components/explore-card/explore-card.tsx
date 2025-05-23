"use client"

import Image from "next/image"
import { greenArrow, blueArrow } from "."
import Heading from "../heading/heading"
import styles from "./explore-card.module.scss"
import Link from "next/link"
import { motion, useScroll, MotionValue } from "framer-motion"
import { useRef } from "react"

export interface CardProps {
  title: string
  description: string
  theme: string
  link?: any
  linkTitle?: string
}

const ExploreCard = ({
  title,
  description,
  theme,
  link,
  linkTitle = "Explore Now",
}: CardProps) => {
  const isBlueTheme = () => theme === "blue"
  const getPrimaryColor = () =>
    isBlueTheme() ? "equity-blue" : "electric-green"
  const getSecondaryColor = () => (isBlueTheme() ? "black" : "white")
  const getArrowSrc = () => (isBlueTheme() ? blueArrow : greenArrow)

  const ref = useRef<HTMLDivElement>(null)

  const scrollData = useScroll({
    target: ref,
    offset: ["0% 90%", "0% 50%"],
  }) as { scrollYProgress: MotionValue<number> }

  return (
    <motion.div
      className="d-flex flex-column"
      ref={ref}
      style={{
        opacity: scrollData.scrollYProgress,
      }}
    >
      <div className="mb-3">
        <Heading title={title} color={getPrimaryColor()} size="h1" weight="6" />
      </div>
      <div className="mb-2">
        <Heading
          title={description}
          color={getSecondaryColor()}
          size="h4"
          weight="4"
        />
      </div>
      <Link href={link || ""} className={styles.link}>
        <div className={`${styles.arrow_icon} d-flex align-items-center mt-2`}>
          <Heading
            title={linkTitle}
            color={getPrimaryColor()}
            size="h6"
            weight="6"
          />
          <Image
            className={` m-2`}
            src={getArrowSrc()}
            alt="arrow icon"
            width={50}
          />
        </div>
      </Link>
    </motion.div>
  )
}

export default ExploreCard
