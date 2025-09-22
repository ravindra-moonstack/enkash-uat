import styles from "./page.module.scss"
import { Metadata } from "next"

// data
import { allProductSections, policiesData } from "./data"

// components
import CommanButton from "@/src/components/buttons"
import AllInOnePolicy from "@/src/components/all-in-one-policy"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import LogoSlider from "@/src/components/logo-slider"
import AllProducts from "@/src/components/all-products"
import SalesForm from "@/src/components/forms/sales-form"

// utils
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "EnKash Platform: Comprehensive Product Suite",
  description:
    "Comprehensive product suite for all your business finance needs - payment gateway, expense management, corporate cards, payables, loyalty programs, brand vouchers and more",
  alternates: {
    canonical: `${process.env.URL}/products/`,
  },
})

const mergedCards = allProductSections.flatMap((section) => section.items)

const Rewards = (): React.JSX.Element => {
  return (
    <div className={`color-white ${styles.home_container}`}>
      <div className={`${styles.hero_section}`}>
        <div className="max-w-auto">
          <div className="d-flex">
            <CustomBreadcrumb
              items={[
                { name: "Home", url: "/" },
                { name: "Products", url: "/products" },
              ]}
            />
          </div>
          <div className="col-12 d-flex flex-column text-center">
            <div className="  mt-4 mb-3 text-center">
              <DynamicHeading
                content={[
                  {
                    title: "Control Every Rupee. ",
                    color: "color-black ",
                  },
                  {
                    title: "Automate Every Flow. ",
                    color: "color-equity-blue ",
                  },
                  {
                    title: "Grow Without Limits.",
                    color: "color-black ",
                  },
                ]}
                headingTag="h1"
                className="f-7"
              />
            </div>

            <div className=" mt-3 justify-content-center d-flex">
              <CommanButton
                title="Talk to Us"
                theme="blue"
                url={"#salesForm"}
              />
            </div>
          </div>
        </div>
        <div className={`${styles.logoSlider}`}>
          <LogoSlider />
        </div>
      </div>

      <div className={`${styles.fourth_row}  `}>
        <div className="max-w-auto">
          <div className={`row  align-items-center ${styles.section}`}>
            <div className={`${styles.title} text-center `}>
              <div className={` text-center pb-4 pb-md-5`}>
                <DynamicHeading
                  content={[
                    {
                      title:
                        "Simplify Payments, Expenses, Cards & Rewards with ",
                      color: "color-black ",
                    },
                    {
                      title: "One Powerful Platform",
                      color: "color-equity-blue ",
                    },
                  ]}
                  headingTag="h2"
                  className="f-6"
                />
              </div>
            </div>
            <div className={styles.allInOnePolicy}>
              {policiesData.map((policy, index) => (
                <AllInOnePolicy
                  key={index}
                  icon={policy.icon}
                  title={policy.title}
                  description={policy.description}
                  image={policy.image}
                  buttonUrl={policy.buttonUrl}
                  maxImageHeight={policy.maxImageHeight}
                  reverse={policy.reverse}
                  buttonText="Explore more"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles.slider_row} relative`}>
        <div className={`${styles.title} text-center  max-w-auto`}>
          <div className={`px-3 `}>
            <DynamicHeading
              content={[
                {
                  title: "The ",
                  color: "color-black ",
                },
                {
                  title: "#1 Platform  ",
                  color: "color-equity-blue ",
                },
                {
                  title: "to Unify and Automate Business Spends and Payments ",
                  color: "color-black ",
                },
              ]}
              headingTag="h2"
              className="f-6"
            />
          </div>
        </div>
        <AllProducts
          title="All Features"
          subtitle="Combine all use cases"
          data={mergedCards}
        />
      </div>

      <div id="salesForm" className={`${styles.sales_form}`}>
        <SalesForm />
      </div>
    </div>
  )
}

export default Rewards
