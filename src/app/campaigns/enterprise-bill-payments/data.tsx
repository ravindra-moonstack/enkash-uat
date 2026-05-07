import { SwitchIcon1, SwitchIcon2, SwitchIcon3 } from "./img"

const allProductSections = [
    {
        items: [
            {
                title: "100%",
                description:
                    "Bill visibility across locations",
                image: SwitchIcon1,
            },
            {
                title: "Zero ",
                description:
                    "Missed business bill payments",
                image: SwitchIcon2,
            },
            {
                title: "48 hours",
                description:
                    "Seamless migration",
                image: SwitchIcon3,
            },
        ],
    },
]

const mealCardComparisonData = {
    heading: {
        content: [
            {
                title: "Everything That Other Enterprise Utility Bill Payments Provide. ",
                color: "color-grey-200",
            },
            {
                title: "Plus Much More",
                color: "color-equity-blue",
            },
        ],
        headingTag: "h2",
        className: "text-center",
    },
    ourColumnLabel: "EnKash",
    competitorColumnLabel: "Others",
    rows: [
        { feature: "Multi-location bill management", ourValue: "Yes", competitorValue: "Yes" },
        { feature: "Bulk bill payment in one go", ourValue: "Yes", competitorValue: "Yes" },
        { feature: "Auto-fetch of bill amounts & due dates", ourValue: "Yes", competitorValue: "Yes" },
        { feature: "Reconciliation reports", ourValue: "Yes", competitorValue: "Yes" },
        { feature: "Prepaid bill payments", ourValue: "Yes", competitorValue: "No" },
        { feature: "20,000+ billers via Bharat Connect", ourValue: "Yes", competitorValue: "No" },
        { feature: "Maker-checker approval workflows", ourValue: "Yes", competitorValue: "No" },
        { feature: "GST-compliant payment records", ourValue: "Yes", competitorValue: "No" },
        { feature: "Biller data import (no manual re-entry)", ourValue: "Yes", competitorValue: "No" },
        { feature: "Go-live within 48 hours", ourValue: "Yes", competitorValue: "No" },
    ],
    ctaButton: {
        label: "Make the switch",
        href: "#form-section",
    },
}

const counterData = [
    {
        end: 100,
        suffix: "%",
        label: "Bill visibility across locations",
    },
    {
        end: "Zero",
        label: "Missed business bill payments",
    },
    {
        end: 48,
        suffix: " Hours",
        label: "Seamless migration",
    },
]

export { allProductSections, mealCardComparisonData, counterData }