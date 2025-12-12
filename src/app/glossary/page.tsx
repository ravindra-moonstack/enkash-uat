"use client"

import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import { Container, Row, Col, Form } from "react-bootstrap"

const API_BASE = "https://uat.blogs.enkash.com/wp-json/custom/v1/glossary"

export default function GlossaryPage() {
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState<any[]>([])

  async function handleSearch(q: string) {
    setSearch(q)

    if (!q) return setSuggestions([])

    const res = await axios.get(`${API_BASE}?search=${q}`)
    setSuggestions(res.data?.data || [])
  }

  return (
    <Container className="pb-5 paddingTopClass">
      <nav className="mb-3">Home &gt; Glossary</nav>
      <h1 className="mb-4 fw-bold">Glossary</h1>

      {/* Search */}
      <Form.Control
        type="text"
        placeholder="Search glossary terms..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="mb-2"
      />

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="border rounded p-3 bg-light mb-4">
          {suggestions.map((item) => {
            const firstLetter = item.title?.[0]?.toLowerCase() || ""
            return (
              <div key={item.id} className="py-1">
                <Link href={`/glossary/${firstLetter}/${item.slug}`}>
                  {item.title}
                </Link>
              </div>
            )
          })}
        </div>
      )}

      {/* Alphabet Filter */}
      <Row className="g-2 mt-4">
        {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((ltr) => (
          <Col key={ltr} xs="1" className="text-center">
            <Link href={`/glossary/${ltr.toLowerCase()}`}>{ltr}</Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
