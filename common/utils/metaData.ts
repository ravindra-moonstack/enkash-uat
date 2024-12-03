import { Voucher } from "@/app/bolt/data/voucher-data";

interface MetadataInput {
  title: string;
  description: string;
  alternates: {
    canonical: string;
  };
  faqData?: Array<{
    question: string;
    answer: Array<{
      heading?: string;
      bullets?: string[];
    }>;
  }>;
}
export interface BreadcrumbItem {
  "@type": "ListItem";
  position: number;
  name: string;
  item: string;
}

export interface BreadcrumbSchema {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: BreadcrumbItem[];
}

export const generateBreadcrumbSchema = (
  canonicalUrl: string
): BreadcrumbSchema => {
  if (!canonicalUrl) {
    throw new Error("Canonical URL is required");
  }

  try {
    const url = new URL(canonicalUrl);

    const pathSegments = url.pathname
      .replace(/^\/|\/$/g, "")
      .split("/")
      .filter(Boolean);

    // Format segment to title case and replace hyphens with spaces
    const formatSegmentName = (segment: string): string => {
      return segment
        .split(/[-_]/) // Also handle underscores
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ")
        .trim();
    };

    const breadcrumbItems: BreadcrumbItem[] = [];

    // Always add Home as first item
    breadcrumbItems.push({
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${url.origin}/`,
    });

    // Add subsequent segments
    pathSegments.forEach((segment, index) => {
      breadcrumbItems.push({
        "@type": "ListItem",
        position: index + 2, // +2 because Home is position 1
        name: formatSegmentName(segment),
        item: `${url.origin}/${pathSegments.slice(0, index + 1).join("/")}/`,
      });
    });

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbItems,
    };
  } catch (error) {
    throw new Error(`Failed to generate breadcrumb schema }`);
  }
};

// Your existing generateFaqSchema function remains the same
export const generateFaqSchema = (faqData?: MetadataInput["faqData"]) => {
  if (!faqData || faqData.length === 0) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq, index) => ({
      "@type": "Question",
      name: faq.question,
      position: index + 1,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
          .map((ans) => {
            // Construct answer text with heading and bullets
            const parts = [];
            if (ans.heading) {
              parts.push(ans.heading);
            }
            if (ans.bullets?.length) {
              parts.push(ans.bullets.join(". "));
            }
            return parts.join(". ");
          })
          .filter(Boolean)
          .join(" "),
      },
    })),
  };
};

export const generateVoucherSchema = (voucher: Voucher): string => {
  const baseUrl = "https://www.enkash.com";

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
  };

  return `<script type="application/ld+json">${JSON.stringify(
    schema
  )}</script>`;
};

const generateMetaData = ({
  title,
  description,
  alternates,
  faqData,
}: MetadataInput) => {
  const canonicalUrl = alternates.canonical;
  const faqldJSON = generateFaqSchema(faqData);

  return {
    title,
    description,
    alternates,
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
        })}
      </script>
    `,
  };
};

export default generateMetaData;
