import React from "react"
import styles from "./page.module.scss"
import CustomBreadcrumb from "@/components/breadcrumb/breadbrumb"
import DynamicHeading from "@/components/dynamicHeading/dynamic-heading"
import RectangleButton from "@/components/buttons/rectangle-button/rectangle-button"
import BankSolutions from "@/components/partnerships/BankSolutions"
import { bankSolutions } from "./data"
import PartnershipSection from "@/components/partnerShipSlider/PartnershipSection"
import BecomePartnerSteps from "@/components/becomepartner/become-partner-steps"

const partnershipsPage = (): React.JSX.Element => {
  return (
    <div className={`color-white  `}>
      <div className={`${styles.first_row}`}>
        <div className={`${styles.box_white}`}>
          <div className="max-w-auto ">
            <div className="d-flex">
              <CustomBreadcrumb
                items={[
                  { name: "Home", url: "/" },
                  { name: "Corporate Cards ", url: "/corporate-cards" },
                  {
                    name: "Meal Card",
                    url: "/corporate-cards/meal-card",
                  },
                ]}
              />
            </div>
            <div className={`${styles.title} col-7 `}>
              <div className="d-inline ">
                <DynamicHeading
                  content={[
                    {
                      title: "Partnership Program - for Banks",
                      color: "color-black",
                    },
                  ]}
                  headingTag="p"
                  className="mt-2 text-decoration-underline text-dark mb-4 "
                />
              </div>
              <div className="d-flex  flex-column ">
                <DynamicHeading
                  content={[
                    {
                      title: "",
                      color: "color-black f-3 d-block",
                    },
                    {
                      title:
                        "Empower your customers with seamless banking solutions ",
                      color: "color-black",
                    },
                  ]}
                  headingTag="h1"
                  className="mb-4 f-7"
                />
              </div>

              <div className={styles.button_wrapper}>
                <RectangleButton
                  title="Become a Partner"
                  theme="blue"
                  url="/sales/?source=expense_management"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.boxContainer}`}>
        <BankSolutions solutions={bankSolutions} />
      </div>

      <div className={`${styles.second_row}`}>
        <PartnershipSection />
      </div>
      <div className={`${styles.third_row}`}>
        <BecomePartnerSteps />
      </div>
    </div>
  )
}
export default partnershipsPage
