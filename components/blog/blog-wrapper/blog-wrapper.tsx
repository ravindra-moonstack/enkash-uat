import React from "react";
import BlogCard from "../blog-card/blog-card";
import blogData from "../blogData.json";
import MenuButton from "@/components/buttons/menu-button/menu-button";
import Heading from "@/components/heading/heading";

type BlogItem = {
  imageAlt: any;
  date: string;
  image: string;
  title: string;
  description: string;
  link: string;
};

type BlogData = {
  [pageName: string]: BlogItem[];
};

type BlogWrapperProps = {
  title: string;
  pageName?: string;
};

const BlogWrapper: React.FC<BlogWrapperProps> = ({
  title,
  pageName = "tax-payment",
}) => {
  const filteredData = (blogData as BlogData)[pageName] || [];

  return (
    <>
      <div className="col-12 d-flex justify-content-center">
        <Heading title={title} size="h1" color="black" weight="6" />
      </div>

      <div className="col-12 d-flex justify-content-center mt-4">
        <Heading
          title="Blogs on Related Topics"
          size="h4"
          color="equity-blue"
        />
      </div>

      <div className="col-12 d-flex justify-content-center mt-4">
        <MenuButton title="See all" theme="light" />
      </div>

      <div
        className={`col-12 d-flex justify-content-md-evenly mt-5 pb-3 scroll_container`}
      >
        {filteredData.map((blog, index) => (
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
    </>
  );
};

export default BlogWrapper;
