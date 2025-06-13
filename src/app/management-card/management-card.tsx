import Image from "next/image";
import { blueArrow, whiteArrow } from ".";
import styles from "./management-card.module.scss";
import Heading from "../heading/heading";
import Link from "next/link";

export interface CardProps {
  whiteTitle?: any;
  titleHtml?: any;
  description: string;
  ctaColor?: string;
  source: string;
  cardImage?: string;
}

const ManagementCard = ({
  whiteTitle,
  titleHtml,
  description,
  ctaColor,
  source,
  cardImage,
}: CardProps) => {
  return (
    <div className={`d-flex flex-column ${styles.card_body}`}>
      {/* Title */}
      {titleHtml ? (
        <div className={styles.titleHtml}>{titleHtml}</div>
      ) : (
        <Heading title={whiteTitle} color="white" size="h2" weight="6" />
      )}

      {/* Description */}
      <div
        className={`my-3 ${styles.description}`}
        dangerouslySetInnerHTML={{ __html: description }}
      ></div>

      {/* Image */}
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
