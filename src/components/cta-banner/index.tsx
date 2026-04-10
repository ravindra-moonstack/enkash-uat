import React from "react";
import styles from "./ctabanner.module.scss";
import DynamicHeading from "../dynamic-heading";
import Image from "next/image";
import { CommanButton } from "..";

interface CtaBannerProps {
    leftImage?: any;
    rightImage?: any;
    buttonText?: string;
    buttonUrl?: string;
    titleLight?: string;
    titleBold?: string;
}

const CtaBanner: React.FC<CtaBannerProps> = ({
    leftImage,
    rightImage,
    buttonText,
    buttonUrl,
    titleLight,
    titleBold
}) => {
    return (
        <section className={styles.wrapper}>
            <div className={`${styles.sideLines} ${styles.sideLinesLeft}`}>
                {leftImage && (
                    <Image src={leftImage} alt="Decorative side lines" width={100} height={100} />
                )}
            </div>

            <div className={`${styles.sideLines} ${styles.sideLinesRight}`}>
                {rightImage && (
                    <Image src={rightImage} alt="Decorative side lines" width={100} height={100} />
                )}
            </div>

            <div className={`${styles.card} max-w-auto`}>
                <div className={styles.textBlock}>
                    <DynamicHeading
                        content={[
                            {
                                title: titleLight || "Smarter Corporate Spending",
                                color: "color-white",
                            },
                        ]}
                        headingTag="h3"
                        className={styles.headingLight}
                    />
                    <DynamicHeading
                        content={[
                            {
                                title: titleBold || "Starts Here",
                                color: "color-white",
                            },
                        ]}
                        headingTag="h3"
                        className={styles.headingBold}
                    />
                </div>

                {/* CTA Button */}
                <CommanButton
                    title={buttonText || "Schedule a Demo"}
                    theme="blue-hover-white"
                    arrow
                    className={styles.ctaButton}
                    url={buttonUrl}
                />
            </div>
        </section>
    );
};

export default CtaBanner;