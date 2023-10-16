import Image from "next/image";
import { arrow, contactUsMobile, contactUsSpiralImg } from ".";
import styles from "./contact-us-card.module.scss";

const ContactUsCard = () => {
  return (
    <div className={`row-padding-x-only ${styles.contact_us_body}`}>
      <div className={styles.text_container}>
        <div className="mt-md-5 mt-3">
          <div>
            <h1 className={styles.title}>
              Couldn’t find what you’re looking for?
            </h1>
          </div>
        </div>
        <div className="mt-md-3 mt-2">
          <div>
            <h1 className={styles.description}>
              We understand the unique challenges and opportunities your
              business might face, and that's why we're always on standby to
              assist you. Whenever you're ready, reach out to us, and together,
              we can engage in a comprehensive discussion. By understanding your
              objectives, hurdles, and aspirations, we can collaboratively
              devise the most optimal solutions tailored just for you. Remember,
              your success is paramount to us, and we're committed to ensuring
              that you have all the resources and support you need to thrive.
            </h1>
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
