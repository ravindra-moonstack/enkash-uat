import { TVoucher } from "@/src/app/vouchers/data/voucher-data"
import { TFAQProps } from "../types/faq"

// ------------------ INPUT ------------------
interface MetadataInput {
  title: string
  description: string
  alternates: {
    canonical: string
  }
  faqData?: Array<TFAQProps>
  ogImage?: string

  // ✅ NEW
  videoUrl?: string
}

// ------------------ Breadcrumb Types ------------------
export interface BreadcrumbItem {
  "@type": "ListItem"
  position: number
  name: string
  item: string
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org"
  "@type": "BreadcrumbList"
  itemListElement: BreadcrumbItem[]
}

// ------------------ Breadcrumb Generator ------------------
export const generateBreadcrumbSchema = (
  canonicalUrl: string
): BreadcrumbSchema => {
  if (!canonicalUrl) {
    throw new Error("Canonical URL is required")
  }

  try {
    const url = new URL(canonicalUrl)

    const pathSegments: string[] = url.pathname
      .replace(/^\/|\/$/g, "")
      .split("/")
      .filter(Boolean)

    const formatSegmentName = (segment: string): string =>
      segment
        .split(/[-_]/)
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
        .trim()

    const breadcrumbItems: BreadcrumbItem[] = [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${url.origin}/`,
      },
      ...pathSegments.map(
        (segment, index): BreadcrumbItem => ({
          "@type": "ListItem",
          position: index + 2,
          name: formatSegmentName(segment),
          item: `${url.origin}/${pathSegments.slice(0, index + 1).join("/")}/`,
        })
      ),
    ]

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    }
  } catch (error) {
    throw new Error(JSON.stringify(error))
  }
}

// ------------------ FAQ Schema ------------------
export const generateFaqSchema = (faqData?: MetadataInput["faqData"]) => {
  if (!faqData || faqData.length === 0) return null

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq, index) => ({
      "@type": "Question",
      name: faq.question,
      position: index + 1,
      acceptedAnswer: {
        "@type": "Answer",
        text:
          (faq?.answer &&
            faq?.answer
              ?.map((ans) => {
                const parts = []
                if (ans.heading) parts.push(ans.heading)
                if (ans.bullets?.length) parts.push(ans.bullets.join(". "))
                return parts.join(". ")
              })
              .filter(Boolean)
              .join(" ")) ??
          "",
      },
    })),
  }
}

// ------------------ Voucher Schema ------------------
export const generateVoucherSchema = (voucher: TVoucher): string => {
  const baseUrl = process.env.URL
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${voucher.name} - ${voucher.discount}% Value`,
    description: `${voucher.description}`.substring(0, 5000).trim(),
    brand: {
      "@type": "Brand",
      name: voucher.brandName,
      description: voucher.aboutCompany,
    },
    category: voucher.category,
    image: `${baseUrl}/images/vouchers/${voucher.urlName}.png`,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${baseUrl}/voucher/${voucher.urlName}/`,
      itemCondition: "https://schema.org/NewCondition",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: "100",
        price: "500",
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "redemptionInstructions",
        value: voucher.howToRedeemDesc,
      },
    ],
  }

  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}

// ------------------ Meta + OG + Structured Data ------------------
export const generateMetaData = ({
  title,
  description,
  alternates,
  faqData,
  ogImage,
  videoUrl,
}: MetadataInput) => {
  const canonicalUrl = alternates.canonical
  const faqldJSON = generateFaqSchema(faqData)
  const baseImage = ogImage || `${process.env.NEXT_PUBLIC_URL}/og-image.png`

  // ---------- VIDEO SCHEMA ----------
  let videoSchema = null

  if (videoUrl) {
    // YouTube detection
    const isYouTube =
      videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be")

    videoSchema = {
      "@type": "VideoObject",
      name: title,
      description: description,
      uploadDate: new Date().toISOString(),
      thumbnailUrl: [baseImage],
      contentUrl: videoUrl,
      embedUrl: isYouTube ? videoUrl : undefined,
    }
  }

  // ---------- FINAL RETURN ----------
  return {
    title,
    description,
    alternates,
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      type: "website",
      images: [baseImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [baseImage],
    },

    // ---------- STRUCTURED DATA SCRIPT ----------
    structuredDataScript: `
      <script type="application/ld+json">
        ${JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "@id": canonicalUrl,
          url: canonicalUrl,
          name: title,
          description,
          breadcrumb: generateBreadcrumbSchema(canonicalUrl),
          mainEntity: faqldJSON,
          video: videoSchema || undefined, // ✅ attach video
        })}
      </script>
    `,
  }
}

export default generateMetaData
