import React from "react"
import LetterPageClient from "./letter-page-client"
import BlogSection from "@/src/components/sections/blog-section"
import { fetchTermsByLetter } from "@/src/utils/glossaryData"
import { notFound } from "next/navigation"

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

export default async function LetterPage({ params }: PageProps) {
  const { letter } = await params
  const terms = await fetchTermsByLetter(letter) 

  if (!terms || terms.length === 0) {
    notFound()
  }

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
