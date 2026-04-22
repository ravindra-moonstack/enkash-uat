import { TCardTypes, TStackCardsProp } from "@/src/types/common"
import {
    carouselIcon1,
    carouselIcon2,
    carouselIcon3,
    carouselIcon4,
} from "../payment-gateway/img"
import { Stack1, Stack2, Stack3, Stack4, Stack5, Stack6, Stack7, Stack8, Stack9, Stack10, useCaseImage1, useCaseImage5, useCaseImage4, useCaseImage3, useCaseImage2, useCaseIcon1, paymentLink, qrCodes, instant, itemIcon1, itemIcon2, itemIcon3, itemIcon4, itemIcon5, Affordability } from "./img"

const slideData = [
    {
        id: 1,
        icon: itemIcon1.src,
        title: "Split Payment Architecture",
        description:
            "Automatically split payments across sellers, platform fees, and service providers with configurable commissions, hold periods, and payout schedules.",
    },
    {
        id: 2,
        icon: itemIcon2.src,
        title: "Enterprise Integration",
        description:
            "Native integrations with accounting software, CRM, inventory systems, and ERP platforms. Payments flow directly into your workflow.",
    },
    {
        id: 3,
        icon: itemIcon3.src,
        title: "Instant Settlement",
        description:
            "Access funds the same day, including weekends and bank holidays, without waiting for standard settlement cycles.",
    },
    {
        id: 4,
        icon: itemIcon4.src,
        title: "Recurring Billing Engine",
        description:
            "Automated subscription billing with intelligent retry, lifecycle management, and flexible payment updates, all handled automatically.",
    },
    {
        id: 5,
        icon: itemIcon5.src,
        title: "Custom Payment Solutions",
        description:
            "Tailored solutions for specialized compliance, custom flows, and industry-specific scenarios that standard gateways can't support.",
    },
]

const featureCards = [
    {
        title: "High-Performance Loading ",
        description: "Checkout optimized to load in under 300ms. Every millisecond matters, faster checkouts directly translate to higher conversion rates.",
        image: carouselIcon1,
    },
    {
        title: "Secure Card Storage ",
        description: "Tokenized card saving for one-click repeat purchases. Customers complete future transactions instantly while maintaining complete security.",
        image: carouselIcon2,
    },
    {
        title: "Intelligent Payment Routing ",
        description:
            "Smart algorithm suggests optimal payment methods based on historical success rates, customer preferences, and transaction patterns.",
        image: carouselIcon3,
    },
    {
        title: "Mobile-First Design",
        description: "Fully responsive checkout optimized for mobile devices. Touch-friendly interfaces and native performance across all screen sizes.",
        image: carouselIcon4,
    },
]
const policies: TStackCardsProp = [
    {
        icon: useCaseIcon1,
        title: "Lightning Checkout",
        descriptionHtml: (
            <>
                <p>Give every buyer a reason to complete and no reason to drop off</p>
                <p>100+ payment options, including UPI, cards, net banking across 70+ banks, wallets, and flexible installment options in a single fast-loading checkout. Returning users move through a simplified flow with fewer steps. Intelligent payment suggestions surface the most relevant option for each user.</p>
            </>
        ),
        highlightText: "Higher conversion at checkout. Every percentage point recovered directly improves revenue.",
        image: useCaseImage1,
        maxImageHeight: "420px",
    },
    {
        icon: useCaseIcon1,
        title: "Cash On Delivery Controls",
        descriptionHtml: (
            <>
                <p>You decide when cash on delivery is available</p>
                <p>Configure cash on delivery by order value, location, and customer profile. Add a convenience fee to encourage prepaid adoption without removing flexibility. Every order triggers a webhook instantly for operational visibility.</p>
            </>
        ),
        highlightText: "Lower return to origin rates. Higher prepaid share. More predictable margins.",
        image: useCaseImage2,
        maxImageHeight: "420px",
        reverse: true,
    },
    {
        icon: useCaseIcon1,
        title: "Instant Settlement and Smart Reconciliation",
        descriptionHtml: (
            <>
                <p>Know exactly what you earned across every channel by end of day</p>
                <p>Choose same-day or T+1 settlements. Every transaction is automatically reconciled across your website, marketplaces, and social channels. Direct ERP integrations with Tally, SAP, and Zoho ensure accurate and real-time accounting.</p>
            </>
        ),
        highlightText: "Faster access to working capital. Financial closure in hours instead of days.",
        image: useCaseImage3,
        maxImageHeight: "420px",
    },
    {
        icon: useCaseIcon1,
        title: "Affordability Suite",
        descriptionHtml: (
            <>
                <p>Turn high-ticket hesitation into completed orders</p>
                <p>Give buyers flexible ways to pay large amounts, instalment options and pay-later solutions at checkout, so cart size is never limited by what someone can pay in one shot. Configurable per product category, cart value, or payment mode. No revenue delay for you; a manageable experience for them.</p>
            </>
        ),
        highlightText: "Higher average order value. Fewer abandoned carts on high-ticket items.",
        image: useCaseImage4,
        maxImageHeight: "420px",
        reverse: true,
    },
    {
        icon: useCaseIcon1,
        title: "High-Concurrency Infrastructure",
        descriptionHtml: (
            <>
                <p>Your gateway should be most reliable exactly when traffic is highest</p>
                <p>EnKash is built for peak-load scenarios — 800+ transactions per second, CDN-optimised checkout, and auto-scaling during sale events. No degradation during festival drops, flash sales, or influencer-driven traffic spikes. Every payment captured, every session completed.</p>
            </>
        ),
        highlightText: "Zero gateway failures during your highest-revenue moments.",
        image: useCaseImage5,
        maxImageHeight: "420px",
    },
]

const counterData = [
    {
        end: 100,
        suffix: "+",
        label: "payment modes including UPI, cards, net banking, and wallets",
    },
    {
        end: 1,
        prefix: "T+",
        label: "Settlement cycle, revenue in your account the next business day",
    },
    {
        end: 4,
        label: "Major platform plugins — Shopify, WooCommerce, Magento, Wix",
    },
]
const integrations = [
    { name: "Woo", image: Stack1.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(200, 79, 255, 0.18) 98.66%)" },
    { name: "Magento", image: Stack2.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(255, 76, 98, 0.18) 98.66%)" },
    { name: "Wix", image: Stack3.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(253, 205, 118, 0.18) 98.66%)" },
    { name: "Tally", image: Stack4.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(147, 34, 45, 0.18) 98.66%)" },
    { name: "SAP", image: Stack5.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(63, 236, 255, 0.18) 98.66%)" },
    { name: "Shopify", image: Stack6.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(149, 191, 71, 0.18) 98.66%)" },
    { name: "Zoho", image: Stack7.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(255, 76, 98, 0.18) 98.66%)" },
    { name: "API", image: Stack8.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(253, 205, 118, 0.18) 98.66%)" },
    { name: "Android", image: Stack9.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(125, 179, 67, 0.18) 98.66%)" },
    { name: "SDK", image: Stack10.src, bg: "linear-gradient(148.03deg, rgba(255, 255, 255, 0.0594) 1.57%, rgba(255, 141, 10, 0.18) 98.66%)" },
];

const partnershipSlideData = [
    {
        id: 1,
        icon: itemIcon1.src,
        title: "The customers you lose at checkout never tell you why",
        description:
            "They don't complain. They just closed the tab. A slow checkout, a failed UPI, a missing payment option, and 60–70% of buyers vanish before you see a rupee.",
    },
    {
        id: 2,
        icon: itemIcon2.src,
        title: "COD is eating your margins one returned order at a time",
        description:
            "High RTO rates, reverse logistics costs, and zero payment certainty make uncontrolled COD a slow margin drain that compounds with scale. Every returned order costs you twice: once to ship, once to take back. Most gateways give you no tools to stop it.",
    },
    {
        id: 3,
        icon: itemIcon3.src,
        title: "Your finance team is spending two days a month just to know what you earned",
        description:
            "Five channels, five dashboards, five settlement reports. Reconciliation becomes a manual weekend exercise, and it still doesn't quite add up.",
    },
    {
        id: 4,
        icon: itemIcon4.src,
        title: "High-ticket buyers drop off when they can't split the payment",
        description:
            "A ₹40,000 electronics or fashion purchase isn't manageable in a single payment for most buyers. They won't ask for EMI either. The drop-off happens silently, at scale, across every high-ticket category you sell. That sale goes to whoever made it easier.",
    },
    {
        id: 5,
        icon: itemIcon5.src,
        title: "Your gateway picks the worst moment to let you down",
        description:
            "Peak traffic means thousands of simultaneous payments. A gateway not built for high concurrency fails precisely when your margins are highest and your customers are most ready to buy.",
    },
]
const managementCards: TCardTypes = [
    {
        titleHtml: "Payment Links",
        subDescription:
            "Collect for custom orders, B2B wholesale, or social commerce via WhatsApp/SMS",
        description: "Create & send links to get paid instantly",
        cardImage: paymentLink,
        linkUrl: "/payment-gateway",
    },
    {
        titleHtml: "Instant Settlement",
        subDescription:
            "Critical during festive sales when you need cash to reorder inventory fast",
        description: "Get funds in seconds",
        cardImage: instant,
        linkUrl: "/instant-settlement",
    },
    {
        titleHtml: "Affordability Suite",
        subDescription:
            "Increase AOV by letting buyers split high-ticket purchases at checkout",
        description: "Offer EMIs and BNPL options",
        cardImage: Affordability,
        linkUrl: "/affordability-suite",
    },
    {
        titleHtml: "QR Codes",
        subDescription:
            "For offline pop-up stores, exhibitions, and phygital retail moments",
        description: "Multiple QRs for payment collection",
        cardImage: qrCodes,
        linkUrl: "/qr-code",
    },
]

export { policies, counterData, partnershipSlideData, integrations, slideData, featureCards, managementCards }