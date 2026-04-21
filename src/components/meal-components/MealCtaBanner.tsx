// import React from "react";
// import styles from "./MealCtaBanner.module.scss";
// import DynamicHeading from "../dynamic-heading";
// import Image from "next/image";
// import { CommanButton } from "..";

// interface MealCtaBannerProps {
//     leftImage?: any;
//     rightImage?: any;
//     buttonText?: string;
//     buttonUrl?: string;
//     titleLight?: string;
//     titleBold?: string;
// }

// const MealCtaBanner: React.FC<MealCtaBannerProps> = ({
//     leftImage,
//     rightImage,
//     buttonText,
//     buttonUrl,
//     titleLight,
//     titleBold
// }) => {
//     return (
//         <section className={styles.wrapper}>
//             <div className={`${styles.sideLines} ${styles.sideLinesLeft}`}>
//                 {leftImage && (
//                     <Image src={leftImage} alt="Decorative side lines" width={100} height={100} />
//                 )}
//             </div>

//             <div className={`${styles.sideLines} ${styles.sideLinesRight}`}>
//                 {rightImage && (
//                     <Image src={rightImage} alt="Decorative side lines" width={100} height={100} />
//                 )}
//             </div>

//             <div className={`${styles.card} max-w-auto`}>
//                 <div className={styles.textBlock}>
//                     <DynamicHeading
//                         content={[
//                             {
//                                 title: titleLight || "Smarter Corporate Spending",
//                                 color: "color-white",
//                             },
//                         ]}
//                         headingTag="h3"
//                         className={styles.headingLight}
//                     />
//                     <DynamicHeading
//                         content={[
//                             {
//                                 title: titleBold || "Starts Here",
//                                 color: "color-white",
//                             },
//                         ]}
//                         headingTag="h3"
//                         className={styles.headingBold}
//                     />
//                 </div>

//                 <CommanButton
//                     title={buttonText || "Schedule a Demo"}
//                     theme="white-without-hover"
//                     arrow
//                     className={styles.ctaButton}
//                     url={buttonUrl}
//                 />
//             </div>
//         </section>
//     );
// };

// export default MealCtaBanner;
import React from "react";
import styles from "./MealCtaBanner.module.scss";
import DynamicHeading from "../dynamic-heading";
import Image from "next/image";
import { CommanButton } from "..";

interface MealCtaBannerProps {
    leftImage?: any;
    rightImage?: any;
    buttonText?: string;
    buttonUrl?: string;
    titleLight?: string;
    titleBold?: string;
    description?: string;
}

const MealCtaBanner: React.FC<MealCtaBannerProps> = ({
    leftImage,
    rightImage,
    buttonText,
    buttonUrl,
    titleLight,
    titleBold,
    description,
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
                <div className={styles.contentBox}>
                    <DynamicHeading
                        content={[
                            {
                                title: titleBold,
                                color: "color-white",
                            },
                        ]}
                        headingTag="h2"
                        className={styles.headingBold}
                    />
                    <DynamicHeading
                        content={[
                            {
                                title: titleLight || "Rely on EnKash for Meal Benefits",
                                color: "color-white",
                            },
                        ]}
                        headingTag="h3"
                        className={styles.headingLight}
                    />
                    <DynamicHeading
                        content={[
                            {
                                title: description,
                                color: "color-white f-5 mb-0",
                            },
                        ]}
                        headingTag="p"
                        className={`mb-0 ${styles.description}`}
                    />

                    <CommanButton
                        title={buttonText || "Talk to a Benefits Expert"}
                        theme="white-without-hover"
                        arrow
                        className={styles.ctaButton}
                        url={buttonUrl}
                    />
                </div>
            </div>
        </section>
    );
};

export default MealCtaBanner;