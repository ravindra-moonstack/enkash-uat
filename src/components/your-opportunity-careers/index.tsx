import { FC } from "react"
import styles from "./YourOpportunityCareers.module.scss"
import DynamicHeading from "../dynamic-heading"

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
}) => {
  return (
    <div className={`${styles.careerCard}`}>
      <div className={`${styles.careerCardTitleDesc}`}>
        <DynamicHeading
          content={[
            {
              title: title,
              color: "color-white subHeading",
            },
          ]}
          headingTag="p"
          className="mb-2"
        />
        <p className="mb-0 f-3">{description}</p>
      </div>
      <div className={`${styles.careerCardDepartmentLocation}`}>
        <span>{department}</span>
        <span>
          <svg
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_4325_46921)">
              <path
                d="M7.44386 0.734375C9.00535 0.745082 10.4987 1.37536 11.5957 2.48667C12.6926 3.59798 13.3034 5.09938 13.2939 6.66088C13.2939 9.16288 11.5569 11.8944 8.12786 14.8779C7.93967 15.0386 7.70032 15.1268 7.45286 15.1268C7.2054 15.1268 6.96605 15.0386 6.77786 14.8779L6.54386 14.6844C3.25436 11.7729 1.59386 9.10888 1.59386 6.66088C1.58428 5.09938 2.1951 3.59798 3.29207 2.48667C4.38904 1.37536 5.88238 0.745082 7.44386 0.734375ZM7.44386 4.37938C7.14724 4.38062 6.8538 4.4405 6.58041 4.55557C6.30702 4.67064 6.05908 4.83863 5.85086 5.04988C5.42979 5.4804 5.19401 6.05867 5.19401 6.66088C5.19401 7.26308 5.42979 7.84135 5.85086 8.27188C6.05987 8.48141 6.30816 8.64765 6.58151 8.76108C6.85486 8.87451 7.14791 8.9329 7.44386 8.9329C7.73981 8.9329 8.03286 8.87451 8.30621 8.76108C8.57957 8.64765 8.82786 8.48141 9.03686 8.27188C9.45793 7.84135 9.69371 7.26308 9.69371 6.66088C9.69371 6.05867 9.45793 5.4804 9.03686 5.04988C8.82864 4.83863 8.5807 4.67064 8.30731 4.55557C8.03392 4.4405 7.74048 4.38062 7.44386 4.37938Z"
                fill="#989898"
              />
            </g>
            <defs>
              <clipPath id="clip0_4325_46921">
                <rect
                  width="14.4"
                  height="14.4"
                  fill="white"
                  transform="translate(0.246094 0.734375)"
                />
              </clipPath>
            </defs>
          </svg>
          {location}
        </span>
        <span className={`${styles.careerCardButton}`}>
          <a
            href={`mailto:careers@enkash.com?subject=${title}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            APPLY NOW
          </a>
        </span>
      </div>
    </div>
  )
}

export default YourOpportunityCareers
