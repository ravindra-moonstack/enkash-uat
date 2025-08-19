import Image from "next/image"
import styles from "./page.module.scss"
import { DynamicHeading, CustomBreadcrumb } from "@/components"
import { scrollIconOne, aboutBannerBottomIcon, careerCardIcon } from "."

import OurStoryCard from "@/components/AboutOurStoryCard/AboutOurStoryCard"
import LeadersSection from "@/components/AboutLeadersCard/AboutLeadersCard"
import InvestorsLogos from "@/components/InvestorsLogos/InvestorsLogos"
import EmployeeSlider from "@/components/EmployeeSlider/EmployeeSlider"
import CareersCard from "@/components/AboutCareersCard/AboutCareersCard"
import LocationTabsMap from "@/components/LocationTabsMap/LocationTabsMap"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"

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

export const metadata: Metadata = generateMetaData({
  title: "About EnKash: India’s Leading Spend Management & Payments Platform ",
  description:
    "Learn about EnKash’s mission, leadership, and journey in transforming B2B payments. Discover how we empower businesses with smarter spend and finance automation solutions.",
  alternates: {
    canonical: "https://www.enkash.com/about",
  },
})

const About = (): React.JSX.Element => {
  return (
    <>
      <div className={`color-white ${styles.home_container}`}>
        <section className={`${styles.topBanner}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.customBreadcrumbSection} mb-4`}>
                  <CustomBreadcrumb
                    items={[
                      { name: "Home", url: "/" },
                      {
                        name: "About Us",
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
                    <div className={`${styles.pageTitle} `}>
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
                    <div className={`${styles.bannerOurSection} mt-4 mt-md-5`}>
                      <div className="row">
                        {bannerOurContent.map((item, index) => (
                          <div className="col-md-6" key={index}>
                            <div
                              className={`${styles.bannerOurCard} text-start`}
                            >
                              <div className={`styles.topIcon`}>
                                <Image
                                  src={item.icon}
                                  alt={item.title}
                                  width={30}
                                  height={30}
                                ></Image>
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
                                  className=" mb-2 mt-2"
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
            <div className={`${styles.bannerBottomBox} mt-4 mt-md-5`}>
              <div className="row">
                <div className="col-md-7">
                  <div className={`${styles.bannerBottomBoxInners}`}>
                    <OurStoryCard icon={aboutBannerBottomIcon} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.leaderSection}`}>
          <div className="max-w-auto">
            <LeadersSection />
          </div>
        </section>
        <section className={`${styles.investorsSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="heading">
                  <DynamicHeading
                    content={[
                      {
                        title: "Backed by Marquee Investors",
                        color: "color-black ",
                      },
                    ]}
                    headingTag="h2"
                    className="f-6 text-center mb-4 mb-md-5"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <InvestorsLogos />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.employeesSliderOuter}`}>
                  <EmployeeSlider />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.careerSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-6">
                <div className={`${styles.careerInnerBox}`}>
                  <CareersCard icon={careerCardIcon} />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={styles.locationsSection}>
          <div className="max-w-auto">
            <div className="row">
              <div>
                <LocationTabsMap />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default About
