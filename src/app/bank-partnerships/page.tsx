
import React from 'react'
import styles from "./page.module.scss"
import BankSolutions from '@/components/partnerships/BankSolutions'
import { BankSolutionHeading, bankSolutions, headingData, slideData, stepsData } from './data'
import PartnershipSection from '@/components/partnerShipSlider/PartnershipSection'
import BottomCtaSection from '@/components/bottomCtaSection/bottomCtaSection'
import FaqSection from '@/components/faqSection/faqSection'
import { ThirdfaqData } from './faq-data'
import PartnerShipForm from '@/components/partnerShip-form'
import { BecomePartnerSteps, BpHeroSection } from '@/components'
import { containerScreen, participantBg } from '.'

const partnershipsPage = (): React.JSX.Element => {
    return (
        <div className={`color-white  `}>

            <BpHeroSection
                backgroundImage={containerScreen.src}
                breadcrumbs={{
                    items: [
                        { name: "Home", url: "/" },
                        { name: "Partnerships", url: "/partnerships" },
                        { name: "Banks", url: "/bank-partnerships" },
                    ],
                }}
                mainHeading={[
                    { title: "Partnership Program - for Banks", color: "color-black underline" }
                ]}
                subHeading={[
                    { title: "", color: "color-black f-3 d-block" },
                    {
                        title: "Empower your customers with seamless banking solutions",
                        color: "color-black",
                    },
                ]}
                button={{
                    title: "Become a Partner",
                    theme: "blue",
                    url: "/sales/?source=expense_management",
                }}
            />
            <div className={`${styles.boxContainer}`}>
                <BankSolutions solutions={bankSolutions} heading={BankSolutionHeading} />
            </div>

            <PartnershipSection
                backgroundImage={participantBg.src}
                heading={[{ title: "Why Partner with Us?", color: "color-blue" }]}
                description="Partner with an all-in-one payments platform to deliver modern banking experiences across expense management, corporate cards, and vendor payments."
                buttons={[
                    { title: "Explore Bank Partnerships", theme: "blue", url: "/bank-partnerships" }
                ]}
                slideData={slideData}
            />

            <div className={`${styles.third_row}`}>
                <BecomePartnerSteps heading={headingData} steps={stepsData} />
            </div>

            <div className={`${styles.third_row}`}>
                <BottomCtaSection headingPart1="Unlock New Revenue Opportunities" headingPart2='by Partnering With EnKash' />
            </div>

            <FaqSection faqData={ThirdfaqData} />
            <PartnerShipForm
                heading={[
                    { title: "Ready to ", color: "color-grey-200" },
                    { title: "Earn More and Grow Faster ", color: "color-equity-blue" },
                    { title: "with EnKash?", color: "color-grey-200" },
                ]}
                features={[
                    { id: 1, text: "Industry-best earnings" },
                    { id: 2, text: "Fast activation for your clients" },
                    { id: 3, text: "Dedicated support for accelerated growth" },
                ]}
            />

        </div>

    )
}
export default partnershipsPage