import { cnbc, inc42, nasscom, paymentAndCardSummit } from "@/app";
import Heading from "../heading/heading";
import styles from "@/app/page.module.scss";
import Image from "next/image";

const AwardSection = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <div className="d-flex flex-column">
          <Heading title="Awards & Accolades" color="equity-blue" size="h1" />
          <Heading
            title="( Prakash is working on this award section - this is not final )"
            color="black"
            size="h6"
            weight="6"
          />
        </div>
      </div>
      {/* <div
        className={`d-flex flex-column flex-md-row justify-content-center text-center ${styles.box}`}
      >
        <div
          className={`d-flex flex-column justify-content-between ${styles.box_item}`}
        >
          <div className="mb-3 mb-m-5 py-2">
            <Heading
              title="Amongst top 200 global fintech companies"
              color="black"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={cnbc}
              alt="inc42 logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className={`d-flex flex-column bg-black justify-content-between ${styles.box_item}`}
        >
          <div className="mb-5 py-2">
            <Heading
              title="Best Platform for SME Financial Growth at the 4th Annual BFSI Excellence Award"
              color="electric-green"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={nasscom}
              alt="nasscom logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className={`d-flex flex-column justify-content-betweens ${styles.box_item}`}
        >
          <div className="mb-3 mb-m-5 py-2">
            <Heading
              title="Fintech Festival India Award"
              color="black"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={paymentAndCardSummit}
              alt="payment and card summit logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div
        className={`d-flex flex-column flex-md-row justify-content-center text-center ${styles.box}`}
      >
        <div
          className={`d-flex flex-column justify-content-between ${styles.box_item}`}
        >
          <div className="mb-3 mb-m-5 py-2">
            <Heading
              title="Preferred Partner by NPCI"
              color="black"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={inc42}
              alt="inc42 logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className={`d-flex flex-column bg-black justify-content-between ${styles.box_item}`}
        >
          <div className="mb-5 py-2">
            <Heading
              title="Best Platform for SME Financial Growth at the 4th Annual BFSI Excellence Award"
              color="electric-green"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={nasscom}
              alt="nasscom logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className={`d-flex flex-column justify-content-betweens ${styles.box_item}`}
        >
          <div className="mb-3 mb-m-5 py-2">
            <Heading
              title="Fintech Festival India Award"
              color="black"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={paymentAndCardSummit}
              alt="payment and card summit logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div> */}

      <div
        className={`d-flex flex-column flex-md-row justify-content-center text-center ${styles.box}`}
      >
        <div
          className={`d-flex flex-column justify-content-between ${styles.box_item}`}
        >
          <div className="mb-3 mb-m-5 py-2">
            <Heading
              title="Preferred Partner by NPCI"
              color="black"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={inc42}
              alt="inc42 logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className={`d-flex flex-column bg-black justify-content-between ${styles.box_item}`}
        >
          <div className="mb-5 py-2">
            <Heading
              title="Best Platform for SME Financial Growth at the 4th Annual BFSI Excellence Award"
              color="electric-green"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={nasscom}
              alt="nasscom logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
        <div
          className={`d-flex flex-column justify-content-betweens ${styles.box_item}`}
        >
          <div className="mb-3 mb-m-5 py-2">
            <Heading
              title="Fintech Festival India Award"
              color="black"
              size="h6"
            />
          </div>
          <div>
            <Image
              src={paymentAndCardSummit}
              alt="payment and card summit logo"
              className="img-fluid"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AwardSection;
