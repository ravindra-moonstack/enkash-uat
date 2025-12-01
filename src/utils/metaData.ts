import { TVoucher } from "@/src/app/vouchers/data/voucher-data"
import { TFAQProps } from "../types/faq"

// ==================== Types ====================

interface MetadataInput {
  title: string
  description: string
  alternates: {
    canonical: string
  }
  faqData?: Array<TFAQProps>
  ogImage?: string
  video?: {
    url: string // YouTube URL
    title: string
    description: string
    uploadDate?: string // YYYY-MM-DD
    duration?: string // ISO 8601 e.g. "PT2M35S"
    thumbnailUrl?: string
  }
}

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

// ==================== Breadcrumb ====================

export const generateBreadcrumbSchema = (
  canonicalUrl: string
): BreadcrumbSchema => {
  if (!canonicalUrl) throw new Error("Canonical URL is required")

  try {
    const url = new URL(canonicalUrl)
    const pathSegments = url.pathname
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

    const breadcrumbItems = [
      {
        "@type": "ListItem" as const,
        position: 1,
        name: "Home",
        item: `${url.origin}/`,
      },
      ...pathSegments.map((segment, index) => ({
        "@type": "ListItem" as const,
        position: index + 2,
        name: formatSegmentName(segment),
        item: `${url.origin}/${pathSegments.slice(0, index + 1).join("/")}/`,
      })),
    ] satisfies BreadcrumbItem[]

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    }
  } catch (error) {
    console.error("Breadcrumb generation failed:", error)
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [],
    }
  }
}

// ==================== FAQ ====================

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
          faq.answer
            ?.map((ans) => {
              const parts: string[] = []
              if (ans.heading) parts.push(ans.heading)
              if (ans.bullets?.length) parts.push(ans.bullets.join(". "))
              return parts.filter(Boolean).join(". ")
            })
            .filter(Boolean)
            .join(" ") ?? "",
      },
    })),
  }
}

// ==================== YouTube VideoObject ====================

const getYouTubeId = (url: string): string | null => {
  const regExp =
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]{11}).*/
  const match = url.match(regExp)
  return match && match[2].length === 11 ? match[2] : null
}

export const generateVideoSchema = (
  video: NonNullable<MetadataInput["video"]>
) => {
  const videoId = getYouTubeId(video.url)
  if (!videoId)
    throw new Error("Invalid YouTube URL provided for VideoObject schema")

  const embedUrl = `https://www.youtube.com/embed/${videoId}`
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`
  const thumbnail =
    video.thumbnailUrl ||
    `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: video.title,
    description: video.description,
    thumbnailUrl: [thumbnail],
    uploadDate: video.uploadDate || new Date().toISOString().split("T")[0],
    duration: video.duration,
    embedUrl,
    contentUrl: watchUrl,
    publisher: {
      "@type": "Organization",
      name: "EnKash",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.URL || "https://www.enkash.com"}/logo.png`,
        width: "600",
        height: "60",
      },
    },
  }
}

// ==================== Voucher (unchanged) ====================

export const generateVoucherSchema = (voucher: TVoucher): string => {
  const baseUrl = process.env.URL || "https://www.enkash.com"
  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${voucher.name} - ${voucher.discount}% Value`,
    description: voucher.description.substring(0, 5000).trim(),
    brand: {
      "@type": "Brand",
      name: voucher.brandName,
      description: voucher.aboutCompany,
    },
    category: voucher.category,
    image: `${baseUrl}/images/vouchers/${voucher.urlName}.png`,
    offers: {
      "@type": "Offer",
      url: `${baseUrl}/voucher/${voucher.urlName}/`,
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "INR",
        minPrice: "100",
        price: "500",
      },
    },
  }

  return `<script type="application/ld+json">${JSON.stringify(schema)}</script>`
}

// ==================== Main Metadata Generator ====================

export const generateMetaData = ({
  title,
  description,
  alternates,
  faqData,
  ogImage,
  video,
}: MetadataInput) => {
  const canonicalUrl = alternates.canonical
  const faqSchema = generateFaqSchema(faqData)
  const videoSchema = video ? generateVideoSchema(video) : null
  const baseImage =
    ogImage || `${process.env.NEXT_PUBLIC_URL || process.env.URL}/og-image.png`

  // Collect all structured data
  const structuredData = [
    // WebPage + Breadcrumb + FAQ
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": canonicalUrl,
      url: canonicalUrl,
      name: title,
      description,
      breadcrumb: generateBreadcrumbSchema(canonicalUrl),
      ...(faqSchema && { mainEntityOfPage: faqSchema }),
    },
    // VideoObject if video exists
    videoSchema,
  ].filter(Boolean)

  // Generate multiple <script> tags safely
  const structuredDataScript = structuredData
    .map(
      (schema) =>
        `<script type="application/ld+json">${JSON.stringify(schema, null, 2)}</script>`
    )
    .join("\n")

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
    // Multiple LD+JSON scripts as raw HTML string
    structuredDataScript,
  }
}

export default generateMetaData
