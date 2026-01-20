// app/glossary/[letter]/[slug]/slug-page-client.tsx
"use client"

import React, { useRef, useState } from "react"
import { Form } from "react-bootstrap"
import Image from "next/image"
import Link from "next/link"
import FaSearch from "../../../../../public/svgs/SearchIcon.svg"
import styles from "./page.module.scss"

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

type SearchResult = {
  keyword: string
  slug: string
  sheet: string
}

interface GlossaryClientProps {
  letter: string
  availableLetters: string[]
}

export default function GlossaryClient({
  letter,
  availableLetters,
}: GlossaryClientProps) {
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState<SearchResult[]>([])
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const handleSearch = async (q: string) => {
    setSearch(q)

    if (!q) {
      setSuggestions([])
      return
    }

    try {
      const response = await fetch(
        `/api/glossary/search?q=${encodeURIComponent(q)}`
      )
      const data = await response.json()
      setSuggestions(data.results || [])
    } catch (err) {
      console.error("Search error:", err)
      setSuggestions([])
    }
  }

  return (
    <>
      <div className={styles.searchWrapper}>
        <Form.Control
          type="text"
          placeholder="Search for a word...."
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          className={styles.searchInput}
        />
        <Image src={FaSearch} alt="" className={styles.searchButton} />
        {suggestions.length > 0 && (
          <div ref={suggestionsRef} className={styles.suggestions}>
            {suggestions.map((item, idx) => (
              <div key={idx} className={styles.suggestionItem}>
                <Link
                  href={`/glossary/${item.sheet.toLowerCase()}/${item.slug}`}
                >
                  {item.keyword}
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.topAlphabetBar}>
        <div className={styles.alphabetScroll}>
          {ALPHABET.map((ltr) => {
            const hasTerms = availableLetters.includes(ltr)
            return (
              <Link
                key={ltr}
                href={hasTerms ? `/glossary/${ltr.toLowerCase()}` : "#"}
                className={`${styles.alphabetLink} ${letter.toUpperCase() === ltr ? styles.active : ""
                  } ${!hasTerms ? styles.disabled : ""}`}
              >
                {ltr}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
