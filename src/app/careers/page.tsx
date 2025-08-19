import styles from "./page.module.scss"
import { DynamicHeading } from "@/components"
import { HomePageRewardsVouchersSlide } from "./data"

import CareersHero from "@/components/CareersHeroSlider/CareersHeroSlider"
import CareersPaycheck from "@/components/CareersPaycheck/CareersPaycheck"
import CoreValuesData from "@/components/CoreValuesData/CoreValuesData"
import YourOpportunityCareers from "@/components/YourOpportunityCareers/YourOpportunityCareers"
import CareersTestimonialSlider from "@/components/CareersTestimonialSlider/CareersTestimonialSlider"
import {
  CoreValuesIcon1,
  CoreValuesIcon2,
  CoreValuesIcon3,
  CoreValuesIcon4,
  CoreValuesIcon5,
} from "."
import HiringProcessModal from "@/components/HiringProcessModal/HiringProcessModal"
import generateMetaData from "@/common/utils/metaData"
import { Metadata } from "next"
export const metadata: Metadata = generateMetaData({
  title: "Careers at EnKash: Join the Best Fintech Company ",
  description:
    "Build your career with EnKash. Explore open roles in product, engineering, sales, and more. Join us in shaping the future of B2B payments and financial automation.",
  alternates: {
    canonical: "https://www.enkash.com/careers",
  },
})

const coreValues = [
  {
    icon: CoreValuesIcon1,
    title: "Agility & Innovation",
    description: "Stay fast, adapt smart, and think bold to build what’s next.",
    maxwidth: "530px",
  },
  {
    icon: CoreValuesIcon2,
    title: "Ownership & Empowerment",
    description:
      "Act like an owner, decide with confidence, and deliver with impact.",
    maxwidth: "500px",
  },
  {
    icon: CoreValuesIcon3,
    title: "Resilience & Commitment",
    description:
      "Face challenges head-on, stay true to our mission, and never quit.",
    maxwidth: "480px",
  },
  {
    icon: CoreValuesIcon4,
    title: "Performance & Rewards",
    description: "Great work gets noticed, celebrated, and rewarded.",
    maxwidth: "360px",
  },
  {
    icon: CoreValuesIcon5,
    title: "Calculated Risk Taking",
    description: "Experiment fearlessly, backed by insight and responsibility.",
    maxwidth: "360px",
  },
]
const jobs = [
  {
    title: "Engineering Manager",
    description: "Ship product and lead our engineering teams",
    department: "Product",
    location: "Gurgaon, India",
    applyLink: "https://example.com/apply/engineering-manager",
  },
  {
    title: "Frontend Developer",
    description: "Build delightful UI experiences with React and Next.js",
    department: "Engineering",
    location: "Bangalore, India",
    applyLink: "https://example.com/apply/frontend-developer",
  },
  {
    title: "Product Designer",
    description: "Design intuitive experiences and interfaces",
    department: "Design",
    location: "Remote",
    applyLink: "https://example.com/apply/product-designer",
  },
]

const Careers = (): React.JSX.Element => {
  return (
    <>
      <div className={`color-white ${styles.home_container}`}>
        <section className={`${styles.topBanner}`}>
          <CareersHero />
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

            <div className="row">
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
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Careers
