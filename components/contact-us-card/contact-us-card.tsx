import Image from "next/image";
import { arrow, contactUsMobile, contactUsSpiralImg } from ".";
import styles from "./contact-us-card.module.scss";

interface contactUsProps {
  title: string;
  description: string;
}

const ContactUsCard = ({ title, description }: contactUsProps) => {
  return (
    <div className={`row-padding-x-only ${styles.contact_us_body}`}>
      <div className={styles.text_container}>
        <div className="mt-md-5 mt-3">
          <div>
            <h1 className={styles.title}>{title}</h1>
          </div>
        </div>
        <div className="mt-md-3 mt-2">
          <div>
            <h1 className={styles.description}>{description}</h1>
          </div>
        </div>
        <div className={`d-flex mt-3 mb-md-5 mb-3 ${styles.action_container}`}>
          <h1 className={styles.contact_us}>Contact us</h1>
          <Image src={arrow} alt="arrow image" className="ms-2" width={50} />
        </div>
      </div>
      <div className={styles.image_container}>
        <Image
          src={contactUsSpiralImg}
          alt="contact us spiral"
          className={styles.web}
        />
        <Image
          src={contactUsMobile}
          alt="contact us spiral"
          className={styles.mobile}
        />
      </div>
    </div>
  );
};

export default ContactUsCard;
