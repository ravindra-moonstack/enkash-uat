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
                <h2 className={styles.mainHeading}>
                    How to <span className={styles.highlightText}>Become a Partner</span>
                </h2>

                <div className={styles.stepsGrid}>
                    {steps.map((step, index) => (
                        <div key={index} className={styles.stepCard}>
                            <div className={styles.stepNumber}>{step.stepNumber}</div>
                            <h3 className={styles.stepTitle}>{step.title}</h3>
                            <p className={styles.stepDescription}>{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
