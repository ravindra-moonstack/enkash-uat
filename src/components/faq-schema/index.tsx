import React from "react"
import { TFAQProps } from "@/src/types/faq"

interface FAQSchemaProps {
  faqData: TFAQProps[]
}

const extractText = (node: any): string => {
  if (!node) return ""
  if (typeof node === "string") return node
  if (typeof node === "number") return String(node)

  // Fallback for React elements without rendering them fully
  if (node.props && node.props.children) {
    if (Array.isArray(node.props.children)) {
      return node.props.children.map(extractText).join(" ")
    }
    return extractText(node.props.children)
  }

  return ""
}

const FAQSchema = ({ faqData }: FAQSchemaProps) => {
  if (!faqData || faqData.length === 0) return null

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => {
      let answerHtml = ""

      if (faq.answer) {
        answerHtml = faq.answer.map((a: any) => a.heading || "").join(" ")
      } else if (faq.answerHTML) {
        // Try to extract text without full render if possible
        answerHtml = extractText(faq.answerHTML)
      }

      return {
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answerHtml.trim() || "Details available on page",
        },
      }
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default FAQSchema
