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

export const generateBreadcrumbSchema = (canonicalUrl: string) => {
  // Remove trailing slash if exists and split the path
  const url = new URL(canonicalUrl);
  const pathSegments = url.pathname.replace(/^\/|\/$/g, "").split("/");

  // Format segment to title case and replace hyphens with spaces
  const formatSegmentName = (segment: string) => {
    return segment
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  // Generate breadcrumb items
  const breadcrumbItems = pathSegments.reduce<
    Array<{
      "@type": string;
      position: number;
      name: string;
      item: string;
    }>
  >((items, segment, index) => {
    // Always add Home as first item if this is the start of the list
    if (index === 0) {
      items.push({
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${url.origin}/`,
      });
    }

    // Add current segment
    items.push({
      "@type": "ListItem",
      position: items.length + 1,
      name: formatSegmentName(segment),
      item: `${url.origin}/${pathSegments.slice(0, index + 1).join("/")}/`,
    });

    return items;
  }, []);

  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems,
  };
};

// Your existing generateFaqSchema function remains the same
export const generateFaqSchema = (faqData?: MetadataInput["faqData"]) => {
  if (!faqData) {
    return [];
  }

  return faqData.map((faq, index) => ({
    "@type": "Question",
    name: faq.question,
    position: index + 1,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
        .map((ans) => {
          if (ans.bullets?.length) {
            return `${ans.heading || ""} ${ans.bullets.join(". ")}`;
          }
          return ans.heading || "";
        })
        .join(" "),
    },
  }));
};

export const generateVoucherSchema = (voucher: Voucher): string => {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Offer",
    name: voucher.name,
    description: voucher.description,
    category: voucher.category,
    discount: `${voucher.discount}%`,
    image: `https://www.enkash.com/images/vouchers/${voucher.backgroundImg}`,
    seller: {
      "@type": "Organization",
      name: voucher.brandName || "",
    },
    url: `https://www.enkash.com/voucher/${voucher.urlName}`,
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
