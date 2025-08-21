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
import { coBrandImage, containerScreen, GalaxyTabImage, participantBg, Purchasecard } from '.'
import { blueArrow } from '@/components/all-in-one-policy'
import ProductsSection from '@/components/ourProductsSection'


const partnershipsPage = (): React.JSX.Element => {
    return (
        <div className={`color-white  `}>
            <Header utmSource="expense_management" />
            <BpHeroSection
                breadcrumbs={{
                    items: [
                        { name: "Home", url: "/" },
                        { name: "Partnerships", url: "/partnerships" },
                        { name: "Bharat Connect ", url: "/bharat-connect-partnership" },
                    ],
                    linkColor: "white"
                }}
                backgroundImage={containerScreen.src}
                mainHeading={[
                    { title: "Partnerships - Bharat Connect ", color: "color-white underline" },
                ]}
                subHeading={[
                    {
                        title: "Bharat Connect: ",
                        color: "color-white ",
                    },
                    {
                        title: "Powering Faster, Smarter Business Payments",
                        color: "color-white f-5",
                    }
                ]}
                button={{
                    title: "Become a Partner",
                    theme: "blue",
                    url: "#partnership-form",
                }}
            />
            <div className={`${styles.boxContainer}`}>
                <BankSolutions solutions={bankSolutions} heading={BankSolutionHeading}
                    button={{
                        connectText: "Become a Partner",
                        connectUrl: "#partnership-form",
                        blueArrow: blueArrow.src,
                    }} />
            </div>

            <div className={`${styles.second_row}`}>
                <PartnershipSection
                    backgroundImage={participantBg.src}
                    heading={[{ title: "Why Partner with Us?", color: "color-white" }]}
                    description="If you're in product & tech, business & partnerships, or finance, Bharat Connect will make your work smarter, faster, and hassle-free."
                    buttons={[
                        { title: "Explore ", theme: "blue", url: "#partnership-form" },

                    ]}
                    slideData={slideData}
                />
            </div>
            <div className={`${styles.third_row} ${styles.steps_container}`}>
                <BecomePartnerSteps heading={headingData} steps={stepsData} button={{
                    connectText: "Become a Partner",
                    connectUrl: "#partnership-form",
                    blueArrow: blueArrow.src,
                }} />
            </div>
            <div className={`${styles.cta_section}`}>
                <BottomCtaSection headingPart1="Streamline Business Processes by" headingPart2='Partnering with Bharat Connect  
' buttonHref='#partnership-form' />
            </div>
            <FaqSection faqData={faqData} />
            <div id="partnership-form">
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
            <Footer />
        </div>

    )
}
export default partnershipsPage