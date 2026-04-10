import { JSX } from "react"
import Link from "next/link"
import DynamicHeading from "../dynamic-heading"
import styles from "./EmployeeBenefitSteps.module.scss"
import { FaArrowRight } from "react-icons/fa6"
import CommonButton from "../buttons"

interface StepData {
    stepNumber: string
    title: string
    description: string
    link?: string
}

export interface EmployeeBenefitStepsProps {
    heading: {
        content: { title: string; color: string }[]
        headingTag?: keyof JSX.IntrinsicElements
        className?: string
    }
    description?: {
        content: { title: string; color?: string }[]
        className?: string
    }
    steps: StepData[]

    button?: {
        connectText: string
        connectUrl: string
    }
}

export default function EmployeeBenefitSteps({
    heading,
    description,
    steps,
    button,
}: EmployeeBenefitStepsProps) {
    return (
        <section className={`${styles.employeeBenefitSteps} max-w-auto`}>
            <div className={styles.content}>
                <div className="d-flex flex-column align-items-center mb-4 mb-md-5">
                    <DynamicHeading
                        content={heading.content}
                        headingTag={heading.headingTag || ("h2" as any)}
                        className={heading.className || "f-5 mb-3"}
                    />
                    {description && (
                        <DynamicHeading
                            content={description.content}
                            headingTag="p"
                            className={description.className || "f-3 text-center mb-0 subHeader"}
                        />
                    )}
                </div>

                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.stepNumber}>{step.stepNumber}</div>

                            <DynamicHeading
                                content={[{ title: step.title, color: "color-black" }]}
                                headingTag="h3"
                                className="f-5 heading-h5"
                            />
                            <DynamicHeading
                                content={[{ title: step.description, color: "color-alternate-grey" }]}
                                headingTag="p"
                                className="f-4 mb-0"
                            />
                        </div>
                    ))}
                </div>
                {button && (
                    <div className={styles.buttonContainer}>
                        <div>
                            <div className="d-md-block">
                                <div className={`connectWithUs ${styles.connectWithUs}`}>
                                    <CommonButton title={button.connectText} theme="blue" url={button.connectUrl} arrow />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
