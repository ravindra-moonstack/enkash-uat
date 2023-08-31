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
      <Image src={blogImage} alt={blogImageAlt} width={350} />
      <div className="d-flex flex-column p-4">
        <Heading title={title} color="black" size="h4" />
        <Heading title={date} color="black" size="h5" />
        <div className="my-3">
          <Heading title={description} color="black" size="h6" />
        </div>
        <div className="d-flex align-items-center mt-2">
          <Heading title="Explore Now" color="black" size="h6" />
          <Image className="m-2" src={arrow} alt="arrow icon" width={50} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
