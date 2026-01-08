"use client"

import React, { useState, useRef } from "react"
import axios from "axios"
import Link from "next/link"
import { Container, Row, Col, Form } from "react-bootstrap"

const API_BASE = process.env.GLOSSARY_BASE_URL

type GlossaryItem = {
  id: number
  title: string
  slug: string
  content?: string
}

export default function GlossaryPage() {
  const [search, setSearch] = useState("")
  const [suggestions, setSuggestions] = useState<GlossaryItem[]>([])
  const cancelRef = useRef<any>(null)

  async function handleSearch(q: string) {
    setSearch(q)

    if (!q) {
      setSuggestions([])
      return
    }

    // cancel previous request if still active
    if (cancelRef.current) {
      cancelRef.current.cancel("canceled")
    }
    cancelRef.current = axios.CancelToken.source()

    try {
      const res = await axios.get(
        `${API_BASE}?search=${encodeURIComponent(q)}`,
        {
          cancelToken: cancelRef.current.token,
        }
      )
      // API returns { status, count, data: [...] }
      setSuggestions(res.data?.data || [])
    } catch (err: any) {
      if (!axios.isCancel(err)) {
        console.error("Search error:", err?.message || err)
      }
      setSuggestions([])
    }
  }

  return (
    <Container className="pb-5 paddingTopClass">
      <nav className="mb-3">Home &gt; Glossary</nav>
      <h1 className="mb-4 fw-bold">Glossary</h1>

      <Form.Control
        type="text"
        placeholder="Search glossary terms..."
        value={search}
        onChange={(e) => handleSearch(e.target.value)}
        className="mb-2"
      />

      {suggestions.length > 0 && (
        <div className="border rounded p-3 bg-light mb-4">
          {suggestions.map((item) => {
            const firstLetter = (item.title?.[0] || "").toLowerCase()
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

      {/* A-Z alphabet */}
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
