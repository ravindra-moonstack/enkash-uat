import styles from "./partnershipForm.module.scss"
import DynamicHeading from "../../dynamic-heading"
import CheckmarkIcon from "@/src/assets/icons/checkmarkIcon"

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
  formComponent: React.ReactNode
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
                  <CheckmarkIcon width={18} height={18} />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 pt-3 pt-lg-0">
          <div className={styles.rightSection}>{formComponent}</div>
        </div>
      </div>
    </div>
  )
}

export default PartnerShipForm
