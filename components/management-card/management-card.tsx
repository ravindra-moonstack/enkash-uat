import Image from "next/image";
import styles from "./management-card.module.scss";
import Heading from "../heading/heading";
import { ReactNode } from "react";

export interface CardProps {
  whiteTitle?: string;
  titleHtml?: ReactNode; // or string if it's only HTML
  description: string;
  cardImage?: string;
}

const ManagementCard = ({
  whiteTitle,
  titleHtml,
  description,
  cardImage,
}: CardProps) => {
  return (
    <div className={`d-flex flex-column ${styles.card_body}`}>
      {titleHtml ? (
        <div className={styles.titleHtml}>{titleHtml}</div>
      ) : (
        whiteTitle && (
          <Heading title={whiteTitle} color="black" size="h4" weight="6" />
        )
      )}

      <div
        className={`my-3 ${styles.description}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

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
    </div>
  );
};

export default ManagementCard;
