import { Metadata } from "next"
import dynamic from "next/dynamic"

import styles from "./page.module.scss"

// components
import DynamicHeading from "@/src/components/dynamic-heading"
import HiringProcessModal from "@/src/components/hiring-process-modal"
const CareersTestimonialSlider = dynamic(() => import("@/src/components/careers-testimonial-slider"))
const CareersHero = dynamic(() => import("@/src/components/careers-hero-slider"))
import CareersPaycheck from "@/src/components/careers-paycheck"
import CoreValuesData from "@/src/components/core-values-data"

import { coreValues, HomePageRewardsVouchersSlide } from "./data"

import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Careers at EnKash: Join the Best Fintech Company",
  description:
    "Build your career with EnKash. Explore open roles in product, engineering, sales, and more. Join us in shaping the future of B2B payments and financial automation.",
  alternates: {
    canonical: `${process.env.URL}/careers`,
  },
})

const Careers = (): React.JSX.Element => {
  //

  return (
    <>
      <div className={`color-white ${styles.home_container}`}>
        <section className={`${styles.topBanner}`}>
          <CareersHero
            breadcrumbs={[
              { name: "Home", url: "/" },
              { name: "Careers", url: "/careers" },
            ]}
          />
        </section>
        <section className={`${styles.CoreValuesDataSection}`}>
          <div className="max-w-auto">
            <div className={`${styles.CoreValuesDataSectionOuter}`}>
              <div className="row">
                <div className="col-md-5 mb-4 mb-md-0">
                  <div className={`${styles.subTitle}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Core Values",
                          color: "color-black",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0"
                    />
                  </div>
                  <div className={`${styles.title}`}>
                    <DynamicHeading
                      content={[
                        {
                          title: "Our Driving Force",
                          color: "color-black",
                        },
                      ]}
                      headingTag="h2"
                      className="mb-0 f-6"
                    />
                  </div>
                  <div className={`${styles.content}`}>
                    <DynamicHeading
                      content={[
                        {
                          title:
                            "Our values are the DNA of our culture -  they define how we work and win together at EnKash.",
                          color: "color-black",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0"
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div>
                    {coreValues.map((value, index) => (
                      <div
                        key={index}
                        className={`${styles.CoreValuesDataOuter}`}
                      >
                        <CoreValuesData
                          icon={value.icon}
                          title={value.title}
                          description={value.description}
                          maxwidth={value.maxwidth}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.perksPayCheck}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <DynamicHeading
                  content={[
                    {
                      title: "Perks That ",
                      color: "color-black",
                    },
                    {
                      title: "Go Beyond ",
                      color: "color-equity-blue",
                    },
                    {
                      title: "the Paycheck",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h2"
                  className="text-center mb-4 mb-md-5"
                />
              </div>
            </div>
            <div className={`${styles.rewardsBottomSliderContentBox}`}>
              <div className="row">
                {HomePageRewardsVouchersSlide.map((item, index) => (
                  <div className="col-md-4 mb-4" key={index}>
                    <div className={`${styles.rewardsBottomSliderBox}`}>
                      <CareersPaycheck {...item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={`${styles.VoicesEnKashSection}`}>
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <DynamicHeading
                  content={[
                    {
                      title: "Employee Speaks",
                      color: "color-equity-blue",
                    },
                  ]}
                  headingTag="p"
                  className="text-center mb-2"
                />
                <DynamicHeading
                  content={[
                    {
                      title: "Voices of EnKash",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h2"
                  className="text-center f-6 mb-4 mb-md-5"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <CareersTestimonialSlider />
              </div>
            </div>
          </div>
        </section>
        <section
          className={`${styles.yourOpportunitySection}`}
          id="yourOpportunitySection"
        >
          <div className="max-w-auto">
            <div className="row">
              <div className="col-md-12">
                <div className={`${styles.subTitle}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "Find Your Opportunity",
                        color: "color-white text-uppercase",
                      },
                    ]}
                    headingTag="p"
                    className="mb-0 "
                  />
                </div>
                <div className={`${styles.title}`}>
                  <DynamicHeading
                    content={[
                      {
                        title: "We're always seeking talent.",
                        color: "color-white",
                      },
                    ]}
                    headingTag="h2"
                    className="mb-0 f-6"
                  />
                </div>
                <div className={`${styles.buttonData} mb-4 mb-md-5 mt-3 `}>
                  <HiringProcessModal />
                </div>
              </div>
            </div>

            {/* <div className="row">
              <div className="col-md-12">
                {jobs.map((job, index) => (
                  <YourOpportunityCareers
                    key={index}
                    title={job.title}
                    description={job.description}
                    department={job.department}
                    location={job.location}
                    applyLink={job.applyLink}
                  />
                ))}
              </div>
            </div> */}
          </div>
        </section>
      </div>
    </>
  )
}

export default Careers
