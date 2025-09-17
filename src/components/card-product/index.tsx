import { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"

import styles from "./card-product.module.scss"
import DynamicHeading from "../dynamic-heading"

export interface CardProps {
  whiteTitle?: string
  titleHtml?: ReactNode
  description: string
  cardImage?: string | StaticImageData
  linkUrl?: string
}

const CardProduct = ({
  whiteTitle,
  titleHtml,
  description,
  cardImage,
  linkUrl,
}: CardProps) => {
  //

  const cardContent = (
    <>
      <div>
        {titleHtml ? (
          <div className={styles.titleHtml}>
            <DynamicHeading
              content={[
                {
                  title: String(titleHtml),
                  color: "color-white ",
                },
              ]}
              headingTag="h4"
              className="f-5"
            />
          </div>
        ) : (
          whiteTitle && (
            <DynamicHeading
              content={[
                {
                  title: whiteTitle,
                  color: "color-white ",
                },
              ]}
              headingTag="h4"
              className="f-5"
            />
          )
        )}

        <div>
          <DynamicHeading
            content={[
              {
                title: description,
                color: "color-white ",
              },
            ]}
            headingTag="p"
            className="mb-0 mt-2 "
          />
        </div>
      </div>

      {cardImage && (
        <div className={styles.image_wrapper}>
          <Image
            src={cardImage}
            alt="card visual"
            className={styles.card_image}
            width={400}
            height={250}
          />
        </div>
      )}
    </>
  )

  const Wrapper: React.ElementType = linkUrl ? "a" : "div"
  const wrapperProps = linkUrl
    ? { href: linkUrl, className: styles.link, rel: "noopener noreferrer" }
    : {}

  return (
    <Wrapper
      {...wrapperProps}
      className={`d-flex flex-column justify-content-between ${styles.card_body}`}
    >
      {cardContent}
    </Wrapper>
  )
}

export default CardProduct
