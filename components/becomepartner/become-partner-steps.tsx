import Link from "next/link"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import styles from "./become-partner-steps.module.scss"
import Image from "next/image"

interface StepData {
  stepNumber: string
  title: string
  description: string
  link?: string
}

interface BecomePartnerStepsProps {
  heading: {
    content: { title: string; color: string }[]
    //@ts-ignore
    headingTag?: keyof JSX.IntrinsicElements
    className?: string
  }
  steps: StepData[]

  button?: {
    connectText: string
    connectUrl: string
    blueArrow: string
  }
}

export default function BecomePartnerSteps({
  heading,
  steps,
  button,
}: BecomePartnerStepsProps) {
  return (
    <section className={`${styles.becomePartnerSteps} max-w-auto`}>
      <div className={styles.content}>
        <DynamicHeading
          content={heading.content}
          headingTag={"h2"}
          className={heading.className || "f-5 mb-4 mb-md-5"}
        />

        <div className={styles.stepsGrid}>
          {steps.map((step, index) => (
            <Link
              href={step.link ? step.link : "/"}
              key={index}
              className={styles.stepCard}
            >
              <div className={styles.stepNumber}>{step.stepNumber}</div>

              <DynamicHeading
                content={[{ title: step.title, color: "color-black" }]}
                headingTag="h5"
                className="f-5"
              />
              <DynamicHeading
                content={[
                  { title: step.description, color: "color-dark-grey" },
                ]}
                headingTag="p"
                className="f-3 mb-0"
              />
            </Link>
          ))}
        </div>
        {button && (
          <div className={styles.buttonContainer}>
            <div>
              <div className="mt-3 d-none d-md-block">
                <div className={`connectWithUs ${styles.connectWithUs}`}>
                  <Link href={button.connectUrl}>
                    <DynamicHeading
                      content={[
                        {
                          title: button.connectText,
                          color: "color-equity-blue",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 f-5"
                    />
                    <Image
                      src={button.blueArrow}
                      alt="blue Arrow"
                      width={15}
                      height={15}
                      className="ms-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
