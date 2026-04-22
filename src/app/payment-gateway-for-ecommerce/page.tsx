import React from "react"
import { Metadata } from "next"
import styles from "./style.module.scss"

//data
import { integrations, slideData, policies, counterData, partnershipSlideData, managementCards } from "./data"
import faqData from "./faq-data"

//components
import {
    BpHeroSection,
    PaymentGatewaySection,
    DynamicHeading,
    PartnerShipForm,
    PartnershipSection
} from "@/src/components"
import FaqSection from "@/src/components/faq-section"
import SuspenseLoading from "@/src/components/loading"

//images
import { containerScreen } from "../payment-gateway-partners/img"
import { capabilityImage } from "../payment-gateway/img"

//utils
import generateMetaData from "@/src/utils/metaData"
import EcommerceHero from "@/src/components/sections/ecommerce-hero"
import EcommerceUseCaseSection from "@/src/components/sections/ecommerce-use-case-section"
import { heroBg, heroBgBig } from "./img"
import { getSalesUrl } from "@/src/utils/getSalesUrl"
import AffiliateFormClient from "@/src/components/form-wrapper/EcommerceAffiliateFormWrapper"
import ExistingStackSection from "@/src/components/existing-stack-section"
import Counter from "@/src/components/home-counter"
import OtherProducts from "@/src/components/sections/other-products"

export const metadata: Metadata = generateMetaData({
    title: "Payment Gateway for E-commerce | EnKash",
    description:
        "Empower your e-commerce business with EnKash's secure and fast payment gateway. Optimized for high conversion, mobile-first design, and seamless integration.",
    alternates: {
        canonical: `${process.env.URL}/payment-gateway-for-ecommerce`,
    },
})
const salesUrl = getSalesUrl("/payment-gateway-for-ecommerce")
const PaymentGatewayForEcommerce = (): React.JSX.Element => {
    return (
        <div className={`color-white`}>
            <EcommerceHero
                breadcrumbs={[
                    { name: "Home", url: "/", },
                    {
                        name: "Industries",
                        url: "/industries",
                    },
                    {
                        name: "Payment Gateway",
                        url: "/payment-gateway",
                    },
                    {
                        name: "E-commerce & Retail",
                        url: "/payment-gateway-for-ecommerce",
                    },
                ]}
                breadcrumbColor="allWhite"
                subtitle={{
                    text: "ECOMMERCE & RETAIL",
                    color: "color-white",
                    underline: true,
                }}
                title={[
                    {
                        text: "An e-commerce payment gateway that converts more browsers into buyers, and gets paid faster doing it.",
                        color: "color-white",
                    },
                ]}
                description={{
                    text: "India's e-commerce market is booming. But checkout drop-offs, payment failures, and slow settlements are silently costing you revenue every single day. EnKash Payment Gateway is built to fix all three.",
                    color: "color-white f-3",
                }}
                button={{
                    title: "Start accepting payments",
                    url: salesUrl,
                    theme: "blue",
                }}
                backgroundImage={heroBgBig.src}
                bgImageStyle={{ zIndex: 0, objectPosition: "top" }}
            />

            <SuspenseLoading>
                {/* <PaymentGatewaySection
                    // backgroundImage={capabilityImage.src}
                    theme="white"
                    heading={[
                        {
                            title: "Advanced Capabilities for Complex Requirements",
                        }
                    ]}
                    description="Beyond standard payment processing, EnKash handles sophisticated business scenarios for e-commerce enterprises."
                    slideData={slideData}
                    className={styles.partnerSectionOverlap}
                /> */}

                <PartnershipSection
                    theme="white"
                    headingInLeft={true}
                    slidesToShow={3}
                    heading={[
                        {
                            title: "Your payment setup is costing you ",
                            color: "color-grey-200 f-2"
                        },
                        {
                            title: "more than you realise",
                            color: "color-grey-200 f-6"
                        }
                    ]}
                    slideData={partnershipSlideData}
                    buttons={[
                        {
                            title: "Start payments",
                            theme: "blue",
                            url: "#partnership-form"
                        }
                    ]}
                />
                <EcommerceUseCaseSection
                    heading={[
                        {
                            title: "Five ways we turn",
                            color: "color-grey-200"
                        },
                        {
                            title: " payment problems into revenue",
                            color: "color-equity-blue"
                        }
                    ]}
                    items={policies}
                    className="py-16 lg:py-24"
                    buttonUrl={salesUrl}
                />
                <section className={`${styles.counterSection}`}>
                    <div className="max-w-auto">
                        <div className={`${styles.counterHeading} mb-4 mb-md-5`}>
                            <DynamicHeading
                                content={[
                                    {
                                        title: "What reliable e-commerce payments look like in numbers",
                                        color: "color-black",
                                    },
                                ]}
                                headingTag="h2"
                                className="text-center mb-2"
                            />
                        </div>

                        <div className={`${styles.counterSectionOuter}`}>
                            <div className="row">
                                {counterData.map((item, index) => (
                                    <div className="col-md-4" key={index.toString()}>
                                        <Counter
                                            {...item}
                                            className={`${styles.counterBox}`}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
                <OtherProducts
                    heading={[
                        {
                            title: "More ways EnKash ",
                            color: "color-black",
                        },
                        {
                            title: "helps your businesses get paid",
                            color: "color-equity-blue",
                        }
                    ]}
                    cards={managementCards}
                    className={styles.otherProducts}
                />
                <ExistingStackSection integrations={integrations} />


                <div id="partnership-form">
                    <PartnerShipForm
                        heading={[
                            { title: "Stop losing", color: "color-grey-200 d-block f-2" },
                            { title: "sales at checkout.", color: "color-grey-200 f-6" },
                        ]}
                        features={[
                            { id: 1, text: "150+ payment modes" },
                            { id: 2, text: "Same-day settlements" },
                            { id: 3, text: "Zero reconciliation headache" },
                        ]}
                        formComponent={<AffiliateFormClient />}
                    />
                </div>

                <FaqSection faqData={faqData} />
            </SuspenseLoading>
        </div>
    )
}

export default PaymentGatewayForEcommerce
