import React from "react"
import LetterPageClient from "./letter-page-client"
import BlogSection from "@/src/components/sections/blog-section"

export default function LetterPage() {
  return (
    <>
      <LetterPageClient />
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
