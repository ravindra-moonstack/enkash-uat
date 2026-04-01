import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
    title: "Calculate Your Income Tax for FY 2026-27.",
    description: "Calculate income tax for FY 2026-27 instantly with EnKash Income Tax Calculator. Compare old vs new regime, check slabs, rebate u/s 87A & surcharge.",
    alternates: {
        canonical: "https://www.enkash.com/income-tax-calculator",
    },
}

const calculatorSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "EnKash Income Tax Calculator FY 2026-27",
    "url": "https://www.enkash.com/income-tax-calculator",
    "applicationCategory": "FinanceApplication",
    "operatingSystem": "All",
    "description": "Calculate your income tax for FY 2026-27 (AY 2027-28) according to latest Union Budget 2026. Compare old vs new regime instantly with EnKash Tax Calculator.",
    "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "INR"
    }, "creator": {
        "@type": "Organization",
        "name": "EnKash",
        "url": "https://www.enkash.com",
        "areaServed": {
            "@type": "Country",
            "name": "India"
        }
    },
    "featureList": [
        "Old vs New Tax Regime Comparison",
        "FY 2026-27 Updated Slab Rates",
        "Section 87A Rebate Calculation",
        "Surcharge and 4% Cess Calculation",
        "Standard Deduction Support",
        "Instant Tax Breakdown"
    ]
}

export default function IncomeTaxCalculatorLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Script
                id="calculator-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
            />
            {children}
        </>
    )
}
