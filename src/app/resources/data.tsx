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
        slug: "vianet-success-story",
        category: "Case Studies",
        image: Vianet.src,
        excerpt: "Discover how Vianet achieved 40% efficiency in their financial operations with EnKash's automated payment solutions."
    },
    {
        id: 2,
        title: "Modernizing corporate spending for TechCorp globally",
        slug: "techcorp-global-spending",
        category: "Case Studies",
        image: HoneyComb,
        excerpt: "TechCorp transformed their employee reimbursement process using EnKash smart cards, reducing processing time by 60%."
    }
]
