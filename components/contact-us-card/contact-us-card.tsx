import Image from "next/image";
import { contactUsSpiralImg } from ".";
import PrimaryButton from "../buttons/primary-button/primary-button";
import styles from "./contact-us-card.module.scss";
import Heading from "../heading/heading";

const ContactUsCard = () => {
  return (
    <div className={styles.contact_us_body}>
      <div className="row">
        <div className="col-6 d-flex justify-content-center"></div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <div className="mt-5">
            <div>
              <Heading
                title="Couldn’t find what"
                color="equity-blue"
                size="h2"
                weight="6"
              />
            </div>
            <div>
              <Heading
                title="you’re looking for?"
                color="equity-blue"
                size="h2"
                weight="6"
              />
            </div>
          </div>
          <div className="mt-3">
            <div>
              <Heading
                title="We're here to help! Get in touch with us so that we"
                color="black"
                size="h4"
                weight="4"
              />
            </div>
            <div>
              <Heading
                title=" can figure out 
            what's best for your business, together."
                color="black"
                size="h4"
              />
            </div>
          </div>
          <div className="d-flex mt-3 mb-5">
            <PrimaryButton
              title="Contact Us"
              isDisabled={false}
              url=""
              theme="theme-blue"
              size="medium"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
