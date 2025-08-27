"use client"

import type React from "react"
import styles from "./partnershipForm.module.scss"
import DynamicHeading from "../dynamicHeading/dynamic-heading"

interface Feature {
  id: number
  text: string
}

interface HeadingContent {
  title: string
  color?: string
}

interface PartnerShipFormProps {
  heading: HeadingContent[]
  features: Feature[]
  formComponent: React.ReactNode // 👈 NEW PROP
}

const PartnerShipForm: React.FC<PartnerShipFormProps> = ({
  heading,
  features,
  formComponent,
}) => {
  return (
    <div className={`${styles.partnerform} max-w-auto`}>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className={styles.leftSection}>
            <DynamicHeading
              content={heading}
              headingTag="h3"
              className="f-5 mb-4 mb-md-5"
            />

            <div className={styles.features}>
              {features.map((feature) => (
                <div key={feature.id} className={styles.feature}>
                  <div className={styles.checkmark}>
                    {/* ✅ Same checkmark SVG */}
                    <svg
                      width="23"
                      height="25"
                      viewBox="0 0 23 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_3858_69384"
                        maskUnits="userSpaceOnUse"
                        x="0"
                        y="0"
                        width="23"
                        height="25"
                      >
                        <path
                          d="M11.4406 1.77197L14.23 3.80681L17.6832 3.80044L18.7436 7.08635L21.541 9.11057L20.4678 12.3922L21.541 15.6739L18.7436 17.6981L17.6832 20.984L14.23 20.9776L11.4406 23.0125L8.65117 20.9776L5.19799 20.984L4.13756 17.6981L1.34018 15.6739L2.41336 12.3922L1.34018 9.11057L4.13756 7.08635L5.19799 3.80044L8.65117 3.80681L11.4406 1.77197Z"
                          fill="white"
                          stroke="white"
                          strokeWidth="2.12405"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7.72275 12.3921L10.3778 15.0472L15.6879 9.73706"
                          stroke="black"
                          strokeWidth="2.12405"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </mask>
                      <g mask="url(#mask0_3858_69384)">
                        <path
                          d="M-1.30881 -0.354492H24.1798V25.1341H-1.30881V-0.354492Z"
                          fill="#1C5AF4"
                        />
                      </g>
                    </svg>
                  </div>
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12">
          {/* Right Section */}
          <div className={styles.rightSection}>{formComponent}</div>
        </div>
      </div>
    </div>
  )
}

export default PartnerShipForm
