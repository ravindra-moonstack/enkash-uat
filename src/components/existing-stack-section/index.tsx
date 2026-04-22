import Image from "next/image"
import styles from "./style.module.scss"
import { DynamicHeading } from ".."

interface Integration {
    name: string
    image: string
    bg: string
}

interface HeadingSegment {
    title?: string | number
    name?: string
    text?: string
    color?: string
    tag?: any
    className?: string
    link?: string
}

interface ExistingStackSectionProps {
    integrations: Integration[]
    heading?: HeadingSegment[]
    subtitle?: HeadingSegment[]
}

export default function ExistingStackSection({
    integrations,
    heading = [{ title: "Works with your existing stack", color: "color-grey-200" }],
    subtitle = [{ title: "Native plugins, clean APIs, and ERP sync — connect in hours, not weeks.", color: "color-alternate-grey" }],
}: ExistingStackSectionProps) {
    return (
        <section className={styles.section}>
            <div className={"max-w-auto text-center"}>
                <DynamicHeading
                    content={heading}
                    headingTag="h2"
                    className={`${styles.sliderHeader} f-5`}
                />
                <DynamicHeading
                    content={subtitle}
                    headingTag="p"
                    className={`${styles.subheading}`}
                />

                <div className={styles.grid}>
                    {integrations.map((item, index) => (
                        <div
                            key={index}
                            className={styles.card}
                            style={{ background: item.bg }}
                            title={item.name}
                        >
                            <Image
                                src={item.image}
                                alt={item.name}
                                width={70}
                                height={40}
                                className={styles.logo}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}