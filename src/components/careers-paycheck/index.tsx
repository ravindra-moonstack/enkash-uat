import Image from "next/image"
import styles from "./CareersPaycheck.module.scss"
import DynamicHeading from "../dynamic-heading"

export interface CareersPaycheckProps {
  title?: string
  description: string
  cardImage?: string
}

const CareersPaycheck = ({
  title,
  description,
  cardImage,
}: CareersPaycheckProps) => {
  //

  return (
    <div className={`d-flex flex-column text-start ${styles.card_body}`}>
      <div className="d-flex flex-column flex-grow-1">
        <div className={styles.card_top}>
          {cardImage && (
            <div className={`pb-2 ${styles.image_wrapper}`}>
              <Image
                src={cardImage}
                alt="card visual"
                className={styles.card_image}
                width={30}
                height={30}
              />
            </div>
          )}
          <div className={styles.title_wrapper}>
            {title ? (
              <DynamicHeading
                content={[
                  {
                    title: String(title),
                    color: "color-black ",
                  },
                ]}
                headingTag="h5"
                className="f-4"
              />
            ) : null}
          </div>
        </div>

        <DynamicHeading
          content={[
            {
              title: description,
              color: "color-black",
            },
          ]}
          headingTag="p"
          className="f-4 mt-2 mb-0"
        />
      </div>
    </div>
  )
}

export default CareersPaycheck
