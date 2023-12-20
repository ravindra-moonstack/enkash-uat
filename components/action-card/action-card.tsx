import styles from "./action.card.module.scss";
import Heading from "../heading/heading";
import Image from "next/image";
import { space } from "@/common/constant";
import greenArrow from "./green-arrow.svg";
import Link from "next/link";

interface data {
  mainTitle: any;
  mainImage: any;
  description: string;
  link?: any;
}

const ActionCard = ({ mainTitle, mainImage, description, link = "" }: data) => {
  return (
    <div
      className={`d-flex col-12 flex-column-reverse flex-md-row ${styles.container}`}
    >
      <div className={`d-flex flex-column bg-indi-volt ${styles.left_row}`}>
        <div className="d-flex flex-column">
          <div className="d-flex">{mainTitle}</div>
          <div className="my-4">
            <Heading title={description} color="white" size="h6" weight="4" />
          </div>
          <Link href={link} target="_blank">
            <div
              className={`d-flex align-items-center mt-2 ${styles.action_container}`}
            >
              <Heading
                title="Get Started"
                color="electric-green"
                size="h6"
                weight="4"
              />
              <Image
                className="m-2"
                src={greenArrow}
                alt="arrow icon"
                width={50}
              />
            </div>
          </Link>
        </div>
      </div>
      <div className={styles.right_row}>
        <Image src={mainImage} alt="office team image" className="img-fluid" />
      </div>
    </div>
  );
};

export default ActionCard;
