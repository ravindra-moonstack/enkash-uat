import Image from "next/image"
import { blueArrow, whiteArrow } from "."
import styles from "./get-started-card.module.scss"
import Heading from "../heading/heading"
import Link from "next/link"

export interface CardProps {
  whiteTitle?: any
  titleHtml?: any
  description: string
  ctaColor?: string
  source: string
}

const GetStartedCard = ({
  whiteTitle,
  titleHtml,
  description,
  ctaColor,
  source,
}: CardProps) => {
  return (
    <div
      className={`d-flex flex-column bg-indi-volt position-relative m-1 ${styles.card_body}`}
    >
      {titleHtml && <>{titleHtml}</>}
      {!titleHtml && (
        <>
          <Heading title={whiteTitle} color="rainy-blue" size="h2" weight="6" />
        </>
      )}

      <div
        className={`my-5 ${styles.description}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>
      <Link href={"/sales/?source=" + source}>
        <div
          className={`d-flex align-items-center mt-5 ${styles.action_container}`}
        >
          <div className={styles.underline}>
            <div
              className={`${styles.get_started_text} ${
                ctaColor ? "color-cyan-blue" : "color-white"
              }`}
            >
              Get Started
            </div>
          </div>
          {!ctaColor && (
            <Image
              className="m-2"
              src={whiteArrow}
              alt="arrow icon"
              width={50}
            />
          )}
          {ctaColor && (
            <Image
              className="m-2"
              src={blueArrow}
              alt="arrow icon"
              width={50}
            />
          )}
        </div>
      </Link>
    </div>
  )
}

export default GetStartedCard
