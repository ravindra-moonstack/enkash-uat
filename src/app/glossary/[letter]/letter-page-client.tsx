"use client"


import React, { useState, useRef, useEffect } from "react"
import styles from "./page.module.scss"
import { Container, Form } from "react-bootstrap"
import Link from "next/link"
import FaSearch from "../../../../public/svgs/SearchIcon.svg"
import ChevronRight from "../../../../public/svgs/chevron-right.svg"
import Image from "next/image"
import GlossaryBgImage from "../../../../public/images/glossaryBgImage.webp"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"
import { stripHtml } from "@/src/utils/format"

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")


interface Props {
  letter: string
  initialTerms: any[]
}

type SearchResult = {
  word: string
  slug: string
  content: string
}

const LetterPageClient = ({ letter, initialTerms }: Props) => {
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const BigLetter = (letter || "").toUpperCase()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false)
      }
    }

    if (showSuggestions) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [showSuggestions])

  const handleSearch = async (q: string) => {
    setSearch(q)

    if (!q) {
      setSuggestions([])
      setIsLoading(false)
      setShowSuggestions(false)
      return
    }

    setIsLoading(true)
    setShowSuggestions(true)
    try {
      const response = await fetch(
        `/api/glossary/search?q=${encodeURIComponent(q)}`
      )
      const data = await response.json()
      setSuggestions(data.results || [])
    } catch (err) {
      console.error("Search error:", err)
      setSuggestions([])
    } finally {
      setIsLoading(false)
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
    <section className={styles.letterPageSection}>
      <Image alt="" src={GlossaryBgImage} className={styles.bgImage} />
      <Container className={`pb-0 ${styles.paddingTop}`}>
        <div className="d-flex mb-3">
          <CustomBreadcrumb
            linkColor="allBlack"
            items={[
              { name: "Home", url: "/" },
              { name: "Glossary", url: "/glossary" },
              { name: `${BigLetter}`, url: `/glossary/${letter}` },
            ]}
          />
        </div>
        <DynamicHeading
          content={[
            {
              text: "FinTech ",
              color: "color-black f-3",
            },
            { text: "Glossary", color: "color-equity-blue" },
          ]}
          headingTag="h1"
          className={styles.pageTitle}
        />
        <div className={styles.searchWrapper}>
          <Form.Control
            type="text"
            placeholder="Search for a word...."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => search && setShowSuggestions(true)}
            className={styles.searchInput}
          />
          <Image src={FaSearch} alt="" className={styles.searchButton} />
          {search.length > 0 && showSuggestions && (
            <div ref={suggestionsRef} className={styles.suggestions}>
              {isLoading ? (
                <div style={{ padding: '12px', textAlign: 'center', color: '#64748b' }}>Searching...</div>
              ) : suggestions.length > 0 ? (
                Object.keys(groupedSuggestions).sort().map(letterKey => (
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
                ))
              ) : (
                <div style={{ padding: '12px', textAlign: 'center', color: '#64748b' }}>No Results</div>
              )}
            </div>
          )}
        </div>

        <div className={styles.alphabetBar}>
          <div className={styles.alphabetScroll}>
            {ALPHABET.map((ltr) => {
              const safeLtr = ltr || ""
              const safeLetter = letter || ""
              return (
                <Link
                  key={safeLtr}
                  href={`/glossary/${safeLtr.toLowerCase()}`}
                  className={`${styles.alphabetLink} ${safeLetter.toUpperCase() === safeLtr ? styles.active : ""
                    }`}
                >
                  {safeLtr}
                </Link>
              )
            })}
          </div>
        </div>

        <div className={styles.termsGrid}>
          {initialTerms.length > 0 ? (
            initialTerms.map((item) => (
              <div key={item.slug} className={styles.termCol}>
                <Link
                  href={`/glossary/${letter}/${item.slug}`}
                  className={styles.termLink}
                >
                  <span className={styles.title}>{item.word}</span>
                  <Image
                    src={ChevronRight}
                    alt="ChevronRight"
                    className={styles.arrow}
                  />
                </Link>
              </div>
            ))
          ) : (
            <div className={styles.noResultsCol}>
              <p className={styles.noResults}>No Data for This Letter</p>
            </div>
          )}
        </div>

        <div className={styles.alphabetBar}>
          <div className={styles.alphabetScroll}>
            {ALPHABET.map((ltr) => {
              const safeLtr = ltr || ""
              const safeLetter = letter || ""
              return (
                <Link
                  key={safeLtr}
                  href={`/glossary/${safeLtr.toLowerCase()}`}
                  className={`${styles.alphabetLink} ${safeLetter.toUpperCase() === safeLtr ? styles.active : ""
                    }`}
                >
                  {safeLtr}
                </Link>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LetterPageClient
