"use client"

// app/glossary/glossary-home-client.tsx

import React, { useState, useRef, useEffect } from "react"
import { Form } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import FaSearch from "../../../public/svgs/SearchIcon.svg"
import styles from "./page.module.scss"

type SearchResult = {
  keyword: string
  slug: string
  sheet: string
}

export default function GlossaryHomeClient() {
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState<SearchResult[]>([])
  const suggestionsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setSuggestions([])
      }
    }

    if (suggestions.length > 0) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [suggestions.length])

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
    </>
  )
}
