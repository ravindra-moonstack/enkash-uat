import { FC } from "react"
import styles from "./YourOpportunityCareers.module.scss"

export interface YourOpportunityCareersProps {
  title: string
  description: string
  department: string
  location: string
  applyLink: string
}

const YourOpportunityCareers: FC<YourOpportunityCareersProps> = ({
  title,
  description,
  department,
  location,
  applyLink,
}) => {
  return (
    <div className={`d-flex justify-content-between align-items-center p-3 ${styles.careerCard}`}>
      {/* Left section */}
      <div className="d-flex flex-column">
        <h5 className="mb-1 fw-bold">{title}</h5>
        <p className="mb-0 text-muted">{description}</p>
      </div>

      {/* Middle section */}
      <div className="d-flex align-items-center gap-4 text-uppercase small text-muted">
        <span>{department}</span>
        <span>📍 {location}</span>
      </div>

      {/* Right section */}
      <div>
        <a
          href={applyLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-sm"
        >
          APPLY NOW
        </a>
      </div>
    </div>
  )
}

export default YourOpportunityCareers
