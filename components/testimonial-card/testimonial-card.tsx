import Image from "next/image";
import styles from "./testimonial-card.module.scss";
import Heading from "../heading/heading";

export interface CardProps {
  authorImage?: any;
  authorName?: any;
  testimonialText?: any;
  companyName: string;
}

const TestimonialCard = ({
  authorImage,
  authorName,
  testimonialText,
  companyName,
}: CardProps) => {
  return (
    <div className={styles.card_body}>
      <div className="d-flex mb-5">
        <div>
          <Image src={authorImage} alt="testimonial image" className="me-4" />
          <Heading title={authorName} color="rainy-blue" weight="4" size="h6" />
        </div>
      </div>
      <div className="mb-5">
        <Heading title={testimonialText} color="white" weight="4" size="h6" />
      </div>
      <div>
        <Heading title={companyName} color="rainy-blue" weight="5" size="h4" />
      </div>
    </div>
  );
};

export default TestimonialCard;
