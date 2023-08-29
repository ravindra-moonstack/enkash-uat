import Image from "next/image";
import { contactUsSpiralImg } from ".";
import H1 from "../heading/h1";
import H5 from "../heading/h5";
import PrimaryButton from "../buttons/primary-button/primary-button";
import styles from "./contact-us-card.module.scss";

const ContactUsCard = () => {
  return (
    <div className={styles.contact_us_body}>
      <div className="row">
        <div className="col-6 d-flex justify-content-center">
          {/* <Image
            src={contactUsSpiralImg}
            alt="mobile integrations"
            width={400}
          /> */}
        </div>
        <div className="col-6 d-flex flex-column justify-content-center">
          <div className="mt-5">
            <div>
              <H1 title="Couldn’t find what" color="equity-blue" />
            </div>
            <div>
              <H1 title="you’re looking for?" color="equity-blue" />
            </div>
          </div>
          <div className="mt-3">
            <div>
              <H5
                title="We're here to help! Get in touch with us so that we"
                color="black"
              />
            </div>
            <div>
              <H5
                title=" can figure out 
            what's best for your business, together."
                color="black"
              />
            </div>
          </div>
          <div className="d-flex mt-3 mb-5">
            <PrimaryButton
              title="Contact Us"
              isDisabled={false}
              url=""
              theme="theme-blue"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsCard;
