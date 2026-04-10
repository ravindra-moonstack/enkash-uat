import React from "react"
import styles from "./StatisticsSection.module.scss"
import { DynamicHeading } from ".."

export interface StatCard {
    id: string
    stat: string
    label: string
}

export interface StatisticsSectionProps {
    title: string
    description?: string
    stats: StatCard[]
    className?: string
}

const StatisticsSection: React.FC<StatisticsSectionProps> = ({
    title,
    description,
    stats,
    className,
}) => {
    return (
        <section className={`${styles.statisticsSection} ${className}`}>
            <div className={`max-w-auto ${styles.container}`}>
                {/* Header */}
                <div className={styles.header}>
                    <DynamicHeading
                        content={[{ title: title, color: "color-grey-200" }]}
                        headingTag="h2"
                        className="f-6 mb-3 text-center"
                    />
                    {description && (
                        <DynamicHeading
                            content={[{ title: description, color: "color-alternate-grey" }]}
                            headingTag="p"
                            className={`subheading text-center mx-auto ${styles.descriptionText}`}
                        />
                    )}
                </div>

                {/* Stats Grid */}
                <div className={styles.statsGrid}>
                    {stats.map((stat) => (
                        <div key={stat.id} className={styles.statCard}>
                            {/* Top section with stat number */}
                            <div className={styles.statTop}>
                                <DynamicHeading
                                    content={[{ title: stat.stat, color: "color-equity-blue" }]}
                                    headingTag="h3"
                                    className="f-7 text-center mb-0"
                                />
                            </div>

                            {/* Bottom section with label */}
                            <div className={styles.statBottom}>
                                <DynamicHeading
                                    content={[{ title: stat.label, color: "color-alternate-grey" }]}
                                    headingTag="p"
                                    className="fs-16 font-medium text-center mb-0"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default StatisticsSection
