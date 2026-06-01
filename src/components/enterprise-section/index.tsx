import styles from "./EnterpriseSection.module.scss"
import DynamicHeading from "../dynamic-heading"
import { FaArrowRight } from "react-icons/fa"
import Image from "next/image"
import transitionImg from "./img/transitionImg.svg"

interface EnterpriseSectionProps {
  headingPart1?: string
  headingPart2?: string
  subText?: string[]
  buttonText?: string
  buttonHref?: string
  className?: string
}

const EnterpriseSection: React.FC<EnterpriseSectionProps> = ({
  headingPart1 = "Enterprise-Grade Platform, ",
  headingPart2 = "Built on Bharat Connect",
  subText = [
    "Secure utility payments via Bharat Connect",
    "Pay Utility Bills from 20,000+ Billers in One Place",
    "Multi-layer encryption and fraud monitoring",
    "Automated reminders and alerts",
    "Flexible payment options, including bulk and auto-pay for all business bills",
    "APIs for ERP and accounting integrations",
  ],
  buttonText = "Get Started",
  buttonHref = "/sales?source=homepage",
  className = "",
}) => {
  return (
    <div className={`${styles.EnterpriseSection} ${className}`}>
      <div className="max-w-auto">
        <div className={styles.getStartedBox}>
          <div className={styles.getStartedBoxInner}>
            {/* Heading */}
            <DynamicHeading
              content={[
                {
                  title: `${headingPart1} `,
                  color: "color-black f-3 d-block",
                },
                {
                  title: headingPart2,
                  color: "color-black",
                },
              ]}
              headingTag="h3"
              className="f-6 mb-3"
            />

            {/* Content List */}
            <div className={styles.content}>
              <ul className={styles.list}>
                {subText.map((item, index) => (
                  <li key={index} className={styles.listItem}>
                    <DynamicHeading
                      content={[
                        {
                          title: item,
                          color: "color-black",
                        },
                      ]}
                      headingTag="p"
                      className="mb-2"
                    />
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <div className={styles.buttons}>
              <a href={buttonHref} className={styles.ctaButton}>
                {buttonText}
                <FaArrowRight />
              </a>
            </div>
          </div>
          <div className={styles.transitionImgWrapper}>
            <Image src={transitionImg} alt="pay bills with bbps platform" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EnterpriseSection
