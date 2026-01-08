"use client"

import React, { useState, useRef, useEffect } from "react"
import axios from "axios"
import styles from "./page.module.scss"
import { Container, Row, Col, Form } from "react-bootstrap"
import Link from "next/link"
import FaSearch from "../../../../public/svgs/SearchIcon.svg"
import ChevronRight from "../../../../public/svgs/chevron-right.svg"
import { fetchByLetter } from "@/src/utils/fetchByLetter"
import Image from "next/image"
import GlossaryBgImage from "../../../../public/images/glossaryBgImage.webp"
import { useParams } from "next/navigation"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"

const API_BASE = process.env.GLOSSARY_BASE_URL

type GlossaryItem = {
  id: number
  title: string
  slug: string
  content?: string
}

const tabs = [
  "Longitudinal Data",
  "Longitudinal Data",
  "Longitudinal Data",
  "Longitudinal Data",
  "Longitudinal Data",
]

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

const Spinner = () => (
  <div className={styles.spinnerContainer}>
    <div className={styles.spinner}></div>
  </div>
)

const LetterPageClient = () => {
  const [terms, setTerms] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState<GlossaryItem[]>([])

  const cancelRef = useRef<any>(null)
  const suggestionsRef = useRef<HTMLDivElement>(null)

  const params = useParams()
  const letter = params.letter as string

  useEffect(() => {
    if (letter) {
      fetchByLetter(letter).then((data) => {
        setTerms(data)
        setLoading(false)
      })
    }
  }, [letter])

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

    if (cancelRef.current) {
      cancelRef.current.cancel("canceled")
    }

    cancelRef.current = axios.CancelToken.source()

    try {
      const res = await axios.get(
        `${API_BASE}?search=${encodeURIComponent(q)}`,
        { cancelToken: cancelRef.current.token }
      )

      setSuggestions(res.data?.data || [])
    } catch (err: any) {
      if (!axios.isCancel(err)) {
        console.error("Search error:", err?.message || err)
      }
      setSuggestions([])
    }
  }

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
              { name: letter, url: `/${letter}` },
            ]}
          />
        </div>

        <DynamicHeading
          content={[
            { text: "FinTech ", color: "color-black f-3" },
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
            className={styles.searchInput}
          />

          <Image src={FaSearch} alt="" className={styles.searchButton} />

          {suggestions.length > 0 && (
            <div ref={suggestionsRef} className={styles.suggestions}>
              {suggestions.map((item) => {
                const firstLetter = (item.title?.[0] || "").toLowerCase()

                return (
                  <div key={item.id} className={styles.suggestionItem}>
                    <Link href={`/glossary/${firstLetter}/${item.slug}`}>
                      {item.title}
                    </Link>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        <div className={styles.wrapper}>
          {tabs.map((label, index) => (
            <Link href="/" key={index} className={styles.tab}>
              {label}
            </Link>
          ))}
        </div>

        <div className={styles.alphabetBar}>
          <div className={styles.alphabetScroll}>
            {ALPHABET.map((ltr) => (
              <Link
                key={ltr}
                href={`/glossary/${ltr.toLowerCase()}`}
                className={`${styles.alphabetLink} ${
                  letter.toUpperCase() === ltr ? styles.active : ""
                }`}
              >
                {ltr}
              </Link>
            ))}
          </div>
        </div>

        <Row className={styles.termsGrid}>
          {loading ? (
            <Spinner />
          ) : terms.length > 0 ? (
            terms.map((item: any) => (
              <Col
                key={item.id}
                xs={12}
                sm={6}
                md={3}
                className={styles.termCol}
              >
                <Link
                  href={`/glossary/${letter}/${item.slug}`}
                  className={styles.termLink}
                >
                  <span className={styles.title}>{item.title}</span>
                  <Image
                    src={ChevronRight}
                    alt="ChevronRight"
                    className={styles.arrow}
                  />
                </Link>
              </Col>
            ))
          ) : (
            <Col xs={12}>
              <p className={styles.noResults}>No glossary items found.</p>
            </Col>
          )}
        </Row>

        <div className={styles.alphabetBar}>
          <div className={styles.alphabetScroll}>
            {ALPHABET.map((ltr) => (
              <Link
                key={ltr}
                href={`/glossary/${ltr.toLowerCase()}`}
                className={`${styles.alphabetLink} ${
                  letter.toUpperCase() === ltr ? styles.active : ""
                }`}
              >
                {ltr}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LetterPageClient
