"use client"
import Image from "next/image"
import styles from "./page.module.scss"
import {
  Header,
  Footer,
  DynamicHeading,
  RectangleButton,
  CustomBreadcrumb,
} from "@/components"
import { scrollIconOne } from "."
import { counterData } from "./data"
import TalkToSales from "@/components/mobile-talks-to-sales/mobile-talk-to-sales"

const bannerOurContent = [
  {
    title: "Our Mission",
    description:
      "To power every modern business with technology that makes finance faster, smarter, and easier than ever.",
    icon: scrollIconOne,
  },
  {
    title: "Our Vision",
    description:
      "To be the force behind a world where every business can scale without financial friction.",
    icon: scrollIconOne,
  },
]

const Home = (): React.JSX.Element => {
  return (
    <>
      <div className={`color-white ${styles.home_container}`}>
        <Header utmSource="expense_management" />
        <section className={`${styles.topBanner}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.customBreadcrumbSection}`}>
                  <CustomBreadcrumb
                    items={[
                      { name: "Home", url: "/" },
                      {
                        name: "About",
                        url: "/about",
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className={`${styles.bannerContentSetion}`}>
              <div className={`${styles.bannerContentSetionTop}`}>
                <div className="row">
                  <div className="col-md-12">
                    <div className={`${styles.pageTitle}`}>
                      <DynamicHeading
                        content={[
                          {
                            title: "About",
                            color: "color-white ",
                          },
                        ]}
                        headingTag="p"
                        className="mb-3"
                      />
                    </div>
                    <div className={`${styles.banner_heading}`}>
                      <DynamicHeading
                        content={[
                          {
                            title: "Shaping the Future of Fintech",
                            color: "color-white italic",
                          },
                        ]}
                        headingTag="h1"
                        className="text-center mb-4"
                      />
                    </div>
                    <div className={`${styles.bannerOurSection}`}>
                      <div className="row">
                        {bannerOurContent.map((item, index) => (
                          <div className="col-md-6">
                            <div
                              className={`${styles.bannerOurCard}`}
                              key={index}
                            >
                              <div className={`styles.topIcon`}>
                                <Image src={item.icon} alt={item.title}></Image>
                              </div>
                              <div className={`styles.heading`}>
                                <DynamicHeading
                                  content={[
                                    {
                                      title: item.title,
                                      color: "color-white subHeading",
                                    },
                                  ]}
                                  headingTag="p"
                                  className=" mb-0"
                                />
                              </div>
                              <div className={`${styles.content}`}>
                                <DynamicHeading
                                  content={[
                                    {
                                      title: item.description,
                                      color: "color-white",
                                    },
                                  ]}
                                  headingTag="p"
                                  className=" mb-0"
                                />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  )
}

export default Home
