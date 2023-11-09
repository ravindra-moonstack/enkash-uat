import Image from "next/image";
import styles from "./blog-card.module.scss";
import Heading from "../../heading/heading";
import { arrow } from ".";
import Link from "next/link";

export interface BlogProps {
  imageAlt: any;
  date: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const BlogCard = ({
  imageAlt,
  date,
  image,
  title,
  description,
  link,
}: BlogProps) => {
  return (
    <div className={`d-flex flex-column ${styles.card_body}`}>
      <div className={styles.desktop_image_container}>
        <Image src={image} alt={imageAlt} width={500} height={300} />
      </div>
      <div className={styles.mobile_image_container}>
        <Image src={image} alt={imageAlt} width={330} height={200} />
      </div>
      <div className="d-flex flex-column p-4">
        <Heading title={title} color="black" size="h4" weight="7" />
        <div className="mt-3">
          <Heading title={date} color="black" size="h6" />
        </div>
        <div className="my-3">
          <Heading title={description} color="black" size="h6" weight="4" />
        </div>
        <Link href={link} target="_blank">
          <div
            className={`d-flex align-items-center mt-2 ${styles.underline} ${styles.action_container}`}
          >
            <Heading title="Read More" color="equity-blue" size="h6" />
            <Image src={arrow} alt="arrow icon" width={50} className="ms-2" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
