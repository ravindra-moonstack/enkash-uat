import { Metadata } from "next"
import styles from "./page.module.scss"

//data 
import faqData from "./faq-data"
import {
    benefitGridData,
    introductionCards,
    headingData,
    stepsData,
    policies,
    walletCards,
    statisticsData,
} from "./data"

//components 
import FaqSection from "@/components/faq-section"
import HeroSection from "@/src/components/sections/hero-section"
import BlogSection from "@/src/components/sections/blog-section"

//utils
import generateMetaData from "@/src/utils/metaData"
import { getSalesUrl } from "@/src/utils/getSalesUrl"

//images
import { BenefitBg, careerSectionBanner, ctaSideImg, HeroImage, HeroImageBg, iPhone17, walletBg } from "./img"
import { careerCardIcon } from "@/src/app/about-us/img"

//components
import { EmployeeBenefitSteps, BenefitGridSection, CtaBanner, DynamicHeading, CareersCard, TaxBenefitDetailsCard, BenefitWalletsSection, StatisticsSection } from "@/src/components"
import UseCaseSection from "@/src/components/sections/use-case-section"
import Image from "next/image"

export const metadata: Metadata = generateMetaData({
    title: "Tax Benefit Multi-Wallet Card India | Tax Saving Card for Employees",
    description:
        "Maximize employee tax savings with EnKash Multi-Wallet Card. Offer meal, fuel, gift, telecom & LTA benefits on one card. RBI-compliant & trusted.",
    alternates: {
        canonical: `${process.env.URL}/employee-benefit-multi-wallet`,
    },
})

const salesUrl = getSalesUrl("/employee-benefit-multi-wallet")


const EmployeeBenefitMultiWallet = (): React.JSX.Element => {
    return (
        <div className={`color-white`}>
            <HeroSection
                breadcrumbColor="allBlack"
                breadcrumbs={[
                    { name: "Home", url: "/" },
                    {
                        name: "Corporate Cards",
                        url: "products/corporate-cards",
                    },
                    {
                        name: "Employee Benefit Multi-wallet Card",
                        url: "/employee-benefit-multi-wallet",
                    },
                ]}
                subtitle={{
                    text: "Employee Benefit Multi-wallet Card",
                    color: "color-equity-blue text-uppercase",
                    underline: true,
                }}
                title={[
                    {
                        text: "One wallet that puts ",
                        color: "color-black",
                    },
                    {
                        text: "more money ",
                        color: "color-equity-blue",
                    },
                    {
                        text: "in your employees' pockets",
                        color: "color-black",
                    },
                ]}
                description={{
                    text: "India’s most powerful employee tax benefit card for flexi-benefits. Built to deliver financial freedom and effortless compliance. Made in India. Made for India.",
                }}
                button={{ title: "Talk to us", url: salesUrl, theme: "blue" }}
                button2={{ title: "See Tax Savings", url: "#benefit-section", theme: "white", arrow: true }}
                rightImage={HeroImage}
                backgroundImage={HeroImageBg.src}
                RightImageProps={{
                    alt: "Employee Benefit Multi-wallet Card",
                    style: { objectPosition: "right" },
                }}
            />
            <div className={styles.introduction_section}>
                <div className="d-flex justify-content-center flex-column gap-32 align-items-center max-w-auto">
                    <>
                        <DynamicHeading
                            content={[
                                {
                                    title: "India's #1 Employee Benefit Card Platform",
                                    color: "color-white",
                                },
                            ]}
                            headingTag="h2"
                            className="f-3 text-center heading-h3"
                        />
                        <div className={styles.cardDivider} />
                    </>

                    <div className={`d-flex ${styles.section}`}>
                        {introductionCards.map((card, idx) => (
                            <div key={idx} className={`${styles.card}`}>
                                <div className={`d-flex ${styles.outerCard}`}>
                                    <DynamicHeading
                                        content={[{ title: card.value, color: `color-white ${styles.cardTitle}` }]}
                                        headingTag="h3"
                                        className="f-7"
                                    />
                                </div>
                                <div className={`py-2  ${styles.innerCard}`}>
                                    <DynamicHeading
                                        content={[{ title: card.label, color: "color-white subheading" }]}
                                        headingTag="p"
                                        className="mb-0 text-center "
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <BenefitGridSection
                id="benefit-section"
                heading={[
                    { title: "How much can your employees actually save?", color: "color-white text-left" },
                ]}
                description="India's new tax framework brings the biggest meal allowance exemption hike in decades. Maximize every rupee with EnKash."
                slideData={benefitGridData}
                backgroundImage={BenefitBg.src}
            />
            <section className={`${styles.careerSection}`}>
                <div className={styles.careerBg}>
                    <Image src={careerSectionBanner} alt="Career background" fill />
                </div>
                <div className="max-w-auto">
                    <div className="row">
                        <div className="col-md-6">
                            <div className={`${styles.careerInnerBox}`}>
                                <TaxBenefitDetailsCard
                                    icon={careerCardIcon}
                                    title1="Combined Maximum Annual Tax-Free Benefits for Employees"
                                    title2="₹2.9L+"
                                    title3="per employee, per year"
                                    title4={[
                                        { title: "Important:", color: "color-grey-200 f-6" },
                                        { title: " Food, gift & telecom wallet benefits are available under the old tax regime, with meal benefits applicable in the new regime as well.  New ITR Reforms 2025 retain these perquisite exemptions. A 30% bracket employee saves ₹31,680+ in tax on the meal wallet alone.", color: "color-grey-200" },
                                        { title: "See FAQ →", color: "color-grey-200 f-6", link: "#faq-section", className: "no-underline" }
                                    ]}
                                    showButton={false}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <BenefitWalletsSection
                Heading={[
                    { title: "Everything your ", color: "color-black" },
                    { title: "employees need", color: "color-equity-blue" },
                    { title: ", nothing they don't", color: "color-black" },
                ]}
                subtitle="Multiple Wallets. Single Card."
                description="Each wallet is purpose-built, tax-optimised, and compliant with Indian income tax law. No confusion, no fumbling — just seamless benefits."
                cards={walletCards}
                centerImage={iPhone17}
                backgroundImage={walletBg.src}
            />

            <div className={`${styles.features_section} ${styles.steps_container}`}>
                <EmployeeBenefitSteps
                    heading={headingData}
                    description={{
                        content: [{ title: "No complex integration. No IT dependency. EnKash handles the full lifecycle — from card issuance to compliance reporting.", color: "color-black" }]
                    }}
                    steps={stepsData}
                />
            </div>

            <UseCaseSection
                heading={[
                    { title: "India's Category Leader.", color: "color-equity-blue" },
                    { title: " Not by Accident.", color: "color-black" },
                ]}
                subHeading={[
                    { title: "Designed for India’s tax rules, payment rails, and business realities from day one. Powered by RuPay, it delivers wide acceptance with zero dependency on global networks.", color: "color-black" },
                ]}
                items={policies}
                buttonUrl={salesUrl}
                textColClass="col-md-7"
                imageColClass="col-md-5"
                className={styles.useCaseSection}
            />

            <StatisticsSection
                title="Every Rupee, Fully Above Board"
                description="Enkash is designed around Indian regulatory frameworks. Our compliance isn't a checkbox—it's the foundation."
                stats={statisticsData}
            />

            <CtaBanner
                leftImage={ctaSideImg}
                rightImage={ctaSideImg}
                titleLight="Built in India."
                titleBold="Optimised for India."
                buttonText="Get Started Today"
                buttonUrl={salesUrl}
            />
            <FaqSection faqData={faqData} />
            {/* <BlogSection
                heading={[
                    {
                        title: "Related  ",
                        color: "color-black ",
                    },
                    {
                        title: " Resources",
                        color: "color-black f-4",
                    },
                ]}
                cards={[9158, 9870, 8984]}
            /> */}

            {/* <OtherProducts
                heading={[
                    { title: "Check out ", color: "color-black" },
                    { title: "other EnKash products", color: "color-equity-blue" },
                ]}
                cards={managementCards}
            /> */}
        </div>
    )
}

export default EmployeeBenefitMultiWallet
