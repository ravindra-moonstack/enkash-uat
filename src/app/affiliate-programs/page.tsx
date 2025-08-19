import Header from '@/components/header/header'
import React from 'react'
import styles from "./page.module.scss"
import TalkToSales from '@/components/mobile-talks-to-sales/mobile-talk-to-sales'
import CustomBreadcrumb from '@/components/breadcrumb/breadbrumb'
import DynamicHeading from '@/components/dynamicHeading/dynamic-heading'
import RectangleButton from '@/components/buttons/rectangle-button/rectangle-button'
import Footer from '@/components/footer/footer'
import HowDoesItWork from '@/components/how-does-it-work/how-does-it-work.'
import BankSolutions from '@/components/partnerships/BankSolutions'
import { BankSolutionHeading, bankSolutions, headingData, slideData, stepsData } from './data'
import PartnershipSection from '@/components/partnerShipSlider/PartnershipSection'
import BottomCtaSection from '@/components/bottomCtaSection/bottomCtaSection'
import FaqSection from '@/components/faqSection/faqSection'
import faqData from './faq-data'
import EnKashForm from '@/components/partnerShip-form'
import PartnerShipForm from '@/components/partnerShip-form'
import { BecomePartnerSteps, BpHeroSection } from '@/components'
import { containerScreen, participantBg } from '.'
import { blueArrow } from '@/components/all-in-one-policy'


const BankSolutionSubHeading = {
    content: [
        { title: "Whether you're a startup founder, fintech influencer, enterprise leader, or employer, our affiliate program is tailored to help you unlock brand value and create meaningful financial experiences for your audience.", color: "color-black f-2" },
    ],
    headingTag: "h5",
    className: "f-3 mb-4 mb-md-5",
}
const partnershipsPage = (): React.JSX.Element => {
    return (
        <div className={`color-white  `}>
            {/* <Header utmSource="expense_management" /> */}
            <BpHeroSection
                backgroundImage={containerScreen.src}
                mainHeading={[
                    { title: "Affiliate Program", color: "color-white underline" },
                ]}
                subHeading={[
                    {
                        title: "Grow with India’s Leading Spend & Payments Management Platform",
                        color: "color-white",
                    },
                ]}
                button={{
                    title: "Become a Partner",
                    theme: "blue",
                    url: "/sales/?source=expense_management",
                }}
            />
            <div className={`${styles.boxContainer}`}>
                <BankSolutions solutions={bankSolutions} heading={BankSolutionHeading} subheading={BankSolutionSubHeading}
                    button={{
                        connectText: "Become a Partner",
                        connectUrl: "/contact",
                        blueArrow: blueArrow.src,
                    }} />
            </div>

            <div className={`${styles.second_row}`}>
                <PartnershipSection
                    backgroundImage={participantBg.src}
                    heading={[{ title: "Why Partner with Us?", color: "color-white" }]}
                    description="Whether you're a startup founder, fintech influencer, enterprise leader, or employer, our affiliate program is tailored to help you unlock brand value and create meaningful financial experiences for your audience."
                    buttons={[
                        { title: "Explore Cards", theme: "blue", url: "/affiliate-programs" },
                        { title: "Explore Payment Gateway", theme: "blue", url: "/affiliate-programs" }
                    ]}
                    slideData={slideData}
                />
            </div>
            <div className={`${styles.third_row}`}>
                <BecomePartnerSteps heading={headingData} steps={stepsData} button={{
                    connectText: "Become a Partner",
                    connectUrl: "/contact",
                    blueArrow: blueArrow.src,
                }} />
            </div>
            <div className={`${styles.third_row}`}>
                <BottomCtaSection headingPart1="Unlock High-Earning Potential" headingPart2='With EnKash' />
            </div>
            <FaqSection faqData={faqData} />
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
            <Footer />
        </div>

    )
}
export default partnershipsPage