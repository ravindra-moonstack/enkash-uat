import styles from "./BottomCtaSection.module.scss"
import DynamicHeading from "../dynamic-heading"
import { FaArrowRight } from "react-icons/fa"

interface BottomCtaSectionProps {
  headingPart1?: string
  headingPart2?: string
  subText?: string
  buttonText?: string
  buttonHref?: string
  className?: string
}

const BottomCtaSection: React.FC<BottomCtaSectionProps> = ({
  headingPart1 = "Why Use 5 Tools",
  headingPart2 = "When 1 Can Do It All?",
  subText = "Make the Switch Today!",
  buttonText = "Get Started",
  buttonHref = "/sales?source=homepage",
  className = "",
}) => {
  //

  return (
    <div className={`${styles.bottomCtaSection} ${className}`}>
      <div className="max-w-auto">
        <div className={`${styles.getStartedBox}`}>
          <div className={`${styles.getStartedBoxInner}`}>
            <DynamicHeading
              content={[
                {
                  title: headingPart1 + " ",
                  color: "color-black f-3 d-block",
                },
                {
                  title: headingPart2,
                  color: "color-black",
                },
              ]}
              headingTag="h3"
              className="f-6 mb-3 "
            />

            <div className={`${styles.content}`}>
              <DynamicHeading
                content={[
                  {
                    title: subText,
                    color: "color-black",
                  },
                ]}
                headingTag="p"
                className="mb-4 "
              />
            </div>

            <div className={`${styles.buttons}`}>
              <a href={buttonHref} className={`${styles.ctaButton}`}>
                {buttonText}
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BottomCtaSection
