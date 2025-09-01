
import Image from "next/image"
import styles from "./CoreValuesData.module.scss"

export interface CoreValuesDataProps {
  icon: string
  title: string
  description: string
  maxwidth?: string
}

const CoreValuesData = ({ 
    icon, 
    title, 
    description,
    maxwidth= "100%"
 }: CoreValuesDataProps) => {
  return (
    <div className={`d-flex align-items-start ${styles.coreValueItem}`}  style={{ maxWidth: maxwidth }}>
      {/* Icon */}
      <div className={`${styles.iconWrapper} me-3`}>
        <Image src={icon} alt={title} width={40} height={40} />
      </div>

      {/* Text */}
      <div className={`${styles.content}`}>
        <span className={`${styles.title} fw-bold`}>{title}</span>
        <span className={`${styles.separeter} mx-1`}>—</span>
        <span className={`${styles.description}`}>{description}</span>
      </div>
    </div>
  )
}

export default CoreValuesData
