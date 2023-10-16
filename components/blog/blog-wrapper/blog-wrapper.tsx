import MenuButton from "@/components/buttons/menu-button/menu-button";
import Heading from "@/components/heading/heading";
import React from "react";
import BlogCard from "../blog-card/blog-card";
import cardOne from "../card-one-image.png";
import cardTwo from "../card-two-image.png";
import cardThree from "../card-three-image.png";

const BlogWrapper = ({ title }: any) => {
  return (
    <>
      <div className="col-12 d-flex justify-content-center">
        <Heading title={title} size="h1" color="black" weight="6" />
      </div>
      <div className="col-12 d-flex justify-content-center mt-4">
        <Heading
          title="Blogs to related topics"
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
        <div className="me-4 ms-md-4">
          <BlogCard
            title="Lorem ipsum dolor sit amet, consectetur."
            date="Dec 21, 2023"
            description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
    imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna "
            blogImage={cardOne}
            blogImageAlt="office image"
          />
        </div>
        <div className={`me-4`}>
          <BlogCard
            title="Lorem ipsum dolor sit amet, consectetur."
            date="Dec 21, 2023"
            description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
    imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna "
            blogImage={cardTwo}
            blogImageAlt="office image"
          />
        </div>

        <div className="me-4">
          <BlogCard
            title="Lorem ipsum dolor sit amet, consectetur."
            date="Dec 21, 2023"
            description="Lorem ipsum dolor sit amet consectetur. Magna malesuada 
    imperdiet fames feugiat nulla vitae aliquet. Sit purus sociis vitae in mi. Fames et diam quis urna "
            blogImage={cardThree}
            blogImageAlt="office image"
          />
        </div>
      </div>
    </>
  );
};

export default BlogWrapper;
