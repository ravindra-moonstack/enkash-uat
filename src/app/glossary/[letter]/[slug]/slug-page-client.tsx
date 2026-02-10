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
  word: string
  slug: string
  content: string
}

interface GlossaryClientProps {
  letter: string
  availableLetters: string[]
}

export default function GlossaryClient({
  letter = "",
  availableLetters = [],
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

  // Grouping suggestions by first letter
  const groupedSuggestions: Record<string, SearchResult[]> = {}
  suggestions.forEach(item => {
    if (!item || !item.word) return;
    const firstLetter = item.word.charAt(0).toUpperCase();
    const ltr = /^[A-Z]$/.test(firstLetter) ? firstLetter : "#";
    if (!groupedSuggestions[ltr]) groupedSuggestions[ltr] = []
    groupedSuggestions[ltr].push(item)
  })

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
            {Object.keys(groupedSuggestions).sort().map(letterKey => (
              <div key={letterKey} className={styles.suggestionGroup}>
                <div className={styles.suggestionLetter}>{letterKey}</div>
                {groupedSuggestions[letterKey].map((item, idx) => (
                  <div key={idx} className={styles.suggestionItem}>
                    <Link
                      href={`/glossary/${(letterKey || "").toLowerCase()}/${item.slug || ""}`}
                    >
                      <div className={styles.suggestionKeyword}>{item.word || ""}</div>
                      <div className={styles.suggestionDescription}>{item.content || ""}</div>
                    </Link>
                  </div>
                ))}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.topAlphabetBar}>
        <div className={styles.alphabetScroll}>
          {ALPHABET.map((ltr) => {
            const hasTerms = (availableLetters || []).includes(ltr)
            const safeLtr = ltr || ""
            const safeLetter = letter || ""
            return (
              <Link
                key={safeLtr}
                href={hasTerms ? `/glossary/${safeLtr.toLowerCase()}` : "#"}
                className={`${styles.alphabetLink} ${safeLetter.toUpperCase() === safeLtr ? styles.active : ""
                  } ${!hasTerms ? styles.disabled : ""}`}
              >
                {safeLtr}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}
