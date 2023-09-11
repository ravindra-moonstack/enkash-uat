import Image from "next/image";
import styles from "./blog-card.module.scss";
import Heading from "../heading/heading";
import { arrow } from ".";

export interface BlogProps {
  title: string;
  date: string;
  description: string;
  blogImage: any;
  blogImageAlt: any;
}

const BlogCard = ({
  title,
  date,
  description,
  blogImage,
  blogImageAlt,
}: BlogProps) => {
  return (
    <div className={`d-flex flex-column ${styles.card_body}`}>
      <Image src={blogImage} alt={blogImageAlt} className="img-fluid" />
      <div className="d-flex flex-column p-4">
        <Heading title={title} color="black" size="h4" weight="7" />
        <div className="mt-3">
          <Heading title={date} color="black" size="h6" />
        </div>
        <div className="my-3">
          <Heading title={description} color="black" size="h6" weight="4" />
        </div>
        <div className={`d-flex align-items-center mt-2 ${styles.underline}`}>
          <Heading title="Read More" color="equity-blue" size="h6" />
          <Image src={arrow} alt="arrow icon" width={50} className="ms-2" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
