"use client"
import { useEffect } from "react"
import { TFAQProps } from "@/src/types/faq"
import ReactDOMServer from "react-dom/server"

interface FAQSchemaProps {
  faqData: TFAQProps[]
}

// Convert JSX/HTML → plain text

const FAQSchema = ({ faqData }: FAQSchemaProps) => {
  useEffect(() => {
    if (!faqData || faqData.length === 0) return

    const extractText = (node: any) => {
      if (typeof window === "undefined") return ""

      // If already a string → return directly
      if (typeof node === "string") return node

      // Convert React element to HTML string
      const html = ReactDOMServer.renderToStaticMarkup(node)

      const div = document.createElement("div")
      div.innerHTML = html
      return div.textContent || div.innerText || ""
    }

    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((faq) => {
        let answerHtml = ""

        if (faq.answerHTML) {
          answerHtml = extractText(faq.answerHTML)
        }

        if (faq.answer) {
          answerHtml = faq.answer.map((a: any) => a.heading).join(" ")
        }

        return {
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: answerHtml.trim(),
          },
        }
      }),
    }

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.innerHTML = JSON.stringify(schema)
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [faqData])

  return null
}

export default FAQSchema
