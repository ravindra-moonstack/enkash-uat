import styles from "./not-found.module.scss"
import Image from "next/image"
import { DynamicHeading } from "@/src/components"
import notFoundImg from "@/public/images/not-found.webp"
import generateMetaData from "@/src/common/utils/metaData"
import { Metadata } from "next"

export const metadata: Metadata = generateMetaData({
  title: "404 Page",
  description:
    "Lost? The page you’re looking for isn’t here. Head to EnKash’s homepage to find the right business solution.",
  alternates: {
    canonical: `${process.env.URL}/not-found/`,
  },
})

export default function NotFound() {
  return (
    <div className={`${styles.notFound}`}>
      <div className="max-w-auto">
        <div className="row">
          <div className="col-md-6 col-12">
            <div>
              <DynamicHeading
                content={[
                  {
                    title: "Oops!",
                    color: "color-black",
                  },
                ]}
                headingTag="h1"
                className="f-7"
              />
              <DynamicHeading
                content={[
                  {
                    title: "This Page Took a Wrong Turn…",
                    color: "color-black",
                  },
                ]}
                headingTag="h3"
                className="f-4"
              />
              <DynamicHeading
                content={[
                  {
                    title: "But hey, don’t worry!",
                    color: "color-dim-grey ",
                  },
                ]}
                headingTag="p"
                className="mb-0 pt-2"
              />
            </div>
            <div>
              <DynamicHeading
                content={[
                  {
                    title: "Here's what you can do:",
                    color: "color-dim-grey ",
                  },
                ]}
                headingTag="p"
                className="mb-0 pt-4"
              />
              <ul>
                <li>
                  <DynamicHeading
                    content={[
                      {
                        title: "Return to Home",
                        color: "color-dim-grey ",
                        link: "/",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3"
                  />
                </li>
                <li>
                  <DynamicHeading
                    content={[
                      {
                        title: "Explore Our Products",
                        color: "color-dim-grey ",
                        link: "/products",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3"
                  />
                </li>
                <li>
                  <DynamicHeading
                    content={[
                      {
                        title: "Explore Our Blogs",
                        color: "color-dim-grey ",
                        link: `${process.env.URL}/resources/blog/`,
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3"
                  />
                </li>
                <li>
                  <DynamicHeading
                    content={[
                      {
                        title: "Talk to Sales",
                        color: "color-dim-grey ",
                        link: "/sales",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3"
                  />
                </li>
                <li>
                  <DynamicHeading
                    content={[
                      {
                        title: "Talk to Support",
                        color: "color-dim-grey ",
                        link: "/support",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 pt-3"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <Image
              src={notFoundImg}
              alt="card visual"
              className={styles.group_logo}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
