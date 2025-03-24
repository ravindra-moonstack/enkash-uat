import Image from "next/image";
import { arrow, enkashStack } from ".";
import styles from "./contact-us-card.module.scss";
import Heading from "../heading/heading";
import Link from "next/link";

interface contactUsProps {
  title?: any;
  description: string;
  titleHtml?: any;
  source: string;
}

const ContactUsCard = ({
  title,
  description,
  titleHtml,
  source,
}: contactUsProps) => {
  return (
    <div className={`row-padding-x-only ${styles.contact_us_body}`}>
      <div className={styles.text_container}>
        <div className="mt-md-5 mt-3">
          <div>
            {titleHtml && <>{titleHtml}</>}
            {!titleHtml && (
              <>
                <Heading title={title} color="equity-blue" size="h2" />
              </>
            )}
          </div>
        </div>
        <div className="mt-md-3 mt-2">
          <div>
            <h2 className={styles.description}>{description}</h2>
          </div>
        </div>
        <Link href={"/sales/?source=" + source}>
          <div
            className={`d-flex mt-3 mb-md-5 mb-3 ${styles.action_container}`}
          >
            <div className={styles.contact_us}>Talk to us</div>
            <Image src={arrow} alt="arrow image" className="ms-2" />
          </div>
        </Link>
      </div>
      <div className={styles.image_container}>
        <Image src={enkashStack} alt="contact us spiral" />
      </div>
    </div>
  );
};

export default ContactUsCard;
