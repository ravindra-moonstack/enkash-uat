import {
  generateBreadcrumbSchema,
  generateFaqSchema,
} from "@/common/utils/metaData";

type StructuredDataProps = {
  url?: string;
  faqData?: any;
};

const StructuredData: React.FC<StructuredDataProps> = ({ url, faqData }) => {
  const breadcrumbSchema = generateBreadcrumbSchema(url || "");
  const faqSchema = generateFaqSchema(faqData);

  return (
    <>
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      )}
      {faqData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />
      )}
    </>
  );
};

export default StructuredData;
