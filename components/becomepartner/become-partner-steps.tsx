import DynamicHeading from "../dynamicHeading/dynamic-heading"
import styles from "./become-partner-steps.module.scss"

interface StepData {
    stepNumber: string
    title: string
    description: string
}

const steps: StepData[] = [
    {
        stepNumber: "Step 1",
        title: "Connect with Us",
        description: "Mail us or fill the form below for our team to reach out to us.",
    },
    {
        stepNumber: "Step 2",
        title: "Customize Your Offering",
        description:
            "We'll co-create tailored solutions; co-branded, white-labeled, or integrated based on your ecosystem and customers.",
    },
    {
        stepNumber: "Step 3",
        title: "Launch & Grow Together",
        description: "Go live with plug-and-play APIs, dedicated support, and GTM strategies to scale revenue and reach.",
    },
]

export default function BecomePartnerSteps() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <DynamicHeading
                    content={[
                        {
                            title: " How to ",
                            color: "color-black",
                        },
                        {
                            title: "Become a Partner",
                            color: "color-equity-blue",
                        },
                    ]}
                    headingTag="h2"
                    className="f-5 mb-4 mb-md-5"
                />

                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.stepNumber}>{step.stepNumber}</div>
                            <DynamicHeading
                                content={[
                                    {
                                        title: step.title,
                                        color: "color-black",
                                    },
                                ]}
                                headingTag="h5"
                                className="f-5"
                            />

                            <DynamicHeading
                                content={[
                                    {
                                        title: step.description,
                                        color: "color-black",
                                    },
                                ]}
                                headingTag="p"
                                className="f-4 mb-0"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
