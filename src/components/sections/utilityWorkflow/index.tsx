import DynamicHeading from "../../dynamic-heading"
import styles from "./utilityWorkflow.module.scss"
import Image from "next/image"

interface UtilityItem {
  label: string
  icon: string
}

interface UtilityWorkflowProps {
  heading: { text: string; colorClass: string }[]
  description: { text: string; colorClass: string }[]
  items: UtilityItem[]
  className?: string
}

const UtilityWorkflow: React.FC<UtilityWorkflowProps> = ({
  heading,
  description,
  items,
  className,
}) => {
  return (
    <section className={`${styles.wrapper} ${className || ""}`}>
      <div className={styles.container}>
        {/* Left Content Card */}
        <div className={styles.leftCard}>
          <DynamicHeading
            content={heading.map((h) => ({
              title: h.text,
              color: h.colorClass,
            }))}
            headingTag="h2"
            className=""
          />

          <DynamicHeading
            content={description.map((h) => ({
              title: h.text,
              color: h.colorClass,
            }))}
            headingTag="p"
            className="fs-5"
          />
        </div>

        <div className={styles.grid}>
          {items.map((item, index) => (
            <div key={index} className={styles.utilityCard}>
              <Image src={item.icon} alt={item.label} width={40} height={40} />

              <DynamicHeading
                content={[
                  {
                    title: item.label,
                    color: "color-black",
                  },
                ]}
                headingTag="p"
                className="fs-5 mb-0 f-7"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default UtilityWorkflow
