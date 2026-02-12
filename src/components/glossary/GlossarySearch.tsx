"use client"

import React, { useState, useRef, useEffect } from "react"
import { Form } from "react-bootstrap"
import Link from "next/link"
import Image from "next/image"
import FaSearch from "@/public/svgs/SearchIcon.svg"
import styles from "./GlossarySearch.module.scss"

type SearchResult = {
    word: string
    slug: string
    content: string
}

const GlossarySearch = () => {
    const [search, setSearch] = useState("")
    const [suggestions, setSuggestions] = useState<SearchResult[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [showSuggestions, setShowSuggestions] = useState(false)
    const suggestionsRef = useRef<HTMLDivElement>(null)

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

    useEffect(() => {
        const fetchSuggestions = async (q: string) => {
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

        const timeoutId = setTimeout(() => {
            if (search.trim()) {
                fetchSuggestions(search)
            } else {
                setSuggestions([])
                setIsLoading(false)
                setShowSuggestions(false)
            }
        }, 100)

        return () => clearTimeout(timeoutId)
    }, [search])

    const handleSearch = (q: string) => {
        setSearch(q)
    }

    // Grouping suggestions by first letter
    const groupedSuggestions: Record<string, SearchResult[]> = {}
    suggestions.forEach(item => {
        if (!item || !item.word) return;
        const firstLetter = item.word.charAt(0).toUpperCase();
        const letter = /^[A-Z]$/.test(firstLetter) ? firstLetter : "#";
        if (!groupedSuggestions[letter]) groupedSuggestions[letter] = []
        groupedSuggestions[letter].push(item)
    })

    return (
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
    )
}

export default GlossarySearch
