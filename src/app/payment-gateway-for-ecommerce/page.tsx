import React from "react"
import { Metadata } from "next"
import Script from "next/script"
import styles from "./style.module.scss"

//data
import { integrations, policies, counterData, partnershipSlideData, managementCards } from "./data"
import faqData from "./faq-data"

//components
import {
    DynamicHeading,
    PartnerShipForm,
    PartnershipSection
} from "@/src/components"
import FaqSection from "@/src/components/faq-section"
import SuspenseLoading from "@/src/components/loading"

//images
import { heroBgBig } from "./img"

//utils
import generateMetaData from "@/src/utils/metaData"
import EcommerceHero from "@/src/components/sections/ecommerce-hero"
import EcommerceUseCaseSection from "@/src/components/sections/ecommerce-use-case-section"
import AffiliateFormClient from "@/src/components/form-wrapper/EcommerceAffiliateFormWrapper"
import ExistingStackSection from "@/src/components/existing-stack-section"
import Counter from "@/src/components/home-counter"
import OtherProducts from "@/src/components/sections/other-products"

export const metadata: Metadata = generateMetaData({
    title: "Best Payment Gateway for E-commerce in India | Fast & Reliable",
    description:
        "Power your online store with a secure payment gateway for e-commerce. Enable UPI, cards, net banking & wallets with high success rates and quick integration.",
    alternates: {
        canonical: "https://www.enkash.com/payment-gateway-for-ecommerce",
    },
})
const salesUrl = "#ecommerce-form"
const PaymentGatewayForEcommerce = (): React.JSX.Element => {
    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Payment Gateway for E-commerce | EnKash",
        description: "Empower your e-commerce business with EnKash's secure and fast payment gateway. Optimized for high conversion, mobile-first design, and seamless integration.",
        url: "https://www.enkash.com/payment-gateway-for-ecommerce",
    }

    return (
        <div className={`color-white`}>
            <Script
                id="web-page-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(webPageSchema),
                }}
            />
            <EcommerceHero
                breadcrumbs={[
                    { name: "Home", url: "/", },
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
                // buttons={[
                //     {
                //         title: "Start payments",
                //         theme: "blue",
                //         url: "#ecommerce-form"
                //     }
                // ]}
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
                                        title: "What reliable ",
                                        color: "color-black ",
                                        className: styles.displayblock
                                    },
                                    {
                                        title: "e-commerce payments look like in numbers",
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


                <div id="ecommerce-form">
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
