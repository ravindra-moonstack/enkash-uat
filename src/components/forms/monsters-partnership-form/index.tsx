import styles from "./monstersPartnershipForm.module.scss"
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

interface MonstersPartnerShipFormProps {
  heading?: HeadingContent[]
  features: Feature[]
  formComponent: React.ReactNode
}

const MonstersPartnerShipForm: React.FC<MonstersPartnerShipFormProps> = ({
  heading,
  features,
  formComponent,
}) => {
  return (
    <div className={`${styles.partnerform} max-w-auto`}>
      <div className="row align-items-center">
        <div className="col-md-5 col-12">
          <div className={styles.leftSection}>
            <h2>
              One gateway. <span> Every moment protected.</span>
            </h2>
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
        <div className="col-md-7 col-12 pt-3 pt-lg-0">
          <div className={styles.rightSection}>{formComponent}</div>
        </div>
      </div>
    </div>
  )
}

export default MonstersPartnerShipForm
