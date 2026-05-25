import { HoneyComb, Vianet } from "./img"

export const tabs = [
    { name: "Case Studies", slug: "case-studies" },
    { name: "Videos", slug: "videos" },
    { name: "Blogs", slug: "blogs" },
]

export const staticCaseStudies = [
    {
        id: 1,
        title: "How EnKash helped Vianet optimize their vendor payments",
        slug: "vianet-achieves-40-improvement-in-business-processes-up-to-50-cost-savings-using-enkash-olympus",
        category: "Case Studies",
        image: Vianet.src,
        excerpt: "Discover how Vianet achieved 40% efficiency in their financial operations with EnKash's automated payment solutions."
    },
    {
        id: 2,
        title: "100% Accuracy & Higher Efficiency: Honeycomb’s EnKash Story",
        slug: "honeycomb-creative-onboards-enkash-as-a-trusted-partner-for-streamlining-department-wise-payment-processes",
        category: "Case Studies",
        image: HoneyComb.src,
        excerpt: "Learn how Honeycomb Creative improved payment visibility, streamlined approvals, and achieved 30% process efficiency using EnKash virtual cards and automation tools."
    }
]
