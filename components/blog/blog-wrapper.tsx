import React from "react";
import BlogCard from "./blog-card";
import MenuButton from "@/components/buttons/menu-button/menu-button";
import Heading from "@/components/heading/heading";
import Link from "next/link";

type BlogItem = {
  imageAlt: any;
  date: string;
  image: string;
  title: string;
  description: string;
  link: string;
};

type BlogWrapperProps = {
  title: string;
  blogData: BlogItem[];
};

const BlogWrapper = ({ title, blogData }: BlogWrapperProps) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <Heading title={title} size="h1" color="black" weight="6" />
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Heading title="Read Blogs" size="h4" color="equity-blue" />
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Link href={"https://www.enkash.com/resources/"} target="_blank">
          <MenuButton title="See all" theme="light" />
        </Link>
      </div>

      <div className="d-flex justify-content-center">
        <div className={`d-flex mt-5 pb-3 scroll_container`}>
          {blogData.map((blog, index) => (
            <div className="me-4" key={index}>
              <BlogCard
                title={blog.title}
                date={blog.date}
                description={blog.description}
                image={blog.image}
                imageAlt={blog.imageAlt}
                link={blog.link}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogWrapper;
