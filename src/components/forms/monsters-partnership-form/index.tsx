import styles from "./monstersPartnershipForm.module.scss"
import DynamicHeading from "../../dynamic-heading"

interface HeadingContent {
  title: string
  color?: string
}

interface MonstersPartnerShipFormProps {
  heading?: HeadingContent[]
  formComponent: React.ReactNode
}

const MonstersPartnerShipForm: React.FC<MonstersPartnerShipFormProps> = ({
  heading,
  formComponent,
}) => {
  return (
    <div className={`${styles.partnerform} max-w-auto`}>
      <div className="row align-items-center">
        <div className="col-md-5 col-12">
          <div className={styles.leftSection}>
            <h2>
              Four monsters.One gateway. <br />
              <span>Every moment protected.</span>
            </h2>
            <p>Your customer is ready to pay.Don’t let a monster stop them.</p>
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
