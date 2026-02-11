import React from "react"
import LetterPageClient from "./letter-page-client"
import BlogSection from "@/src/components/sections/blog-section"
import { notFound } from "next/navigation"
import { getApiBaseUrl } from "@/src/utils/api-helpers"

interface PageProps {
  params: Promise<{ letter: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { letter } = await params
  const upperLetter = letter.toUpperCase()

  return {
    title: `FinTech Glossary - ${upperLetter} Terms | Financial Technology Dictionary`,
    description: `Browse all financial technology terms starting with ${upperLetter}. Comprehensive definitions and explanations.`,
  }
}

async function getTerms(letter: string) {
  try {
    const baseUrl = getApiBaseUrl()
    const res = await fetch(`${baseUrl}/api/glossary/letter/${letter}`, { cache: 'no-store' })
    if (!res.ok) return []
    return res.json()
  } catch (error) {
    console.error("Error fetching terms:", error)
    return []
  }
}

export default async function LetterPage({ params }: PageProps) {
  const { letter } = await params
  const terms = await getTerms(letter)



  return (
    <>
      <LetterPageClient letter={letter} initialTerms={terms} />
      <BlogSection
        className="bg-white"
        heading={[
          {
            title: "Related  ",
            color: "color-black ",
          },
          {
            title: " Resources",
            color: "color-black f-4",
          },
        ]}
        cards={[12642, 13675, 12195]}
      />
    </>
  )
}
