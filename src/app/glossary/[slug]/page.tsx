// app/glossary/[slug]/page.tsx

import { stripHtml } from "@/src/utils/format"
import { getApiBaseUrl } from "@/src/utils/api-helpers"
import React from "react"
import { Container } from "react-bootstrap"
import { notFound } from "next/navigation"
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6"
import Image from "next/image"
import GlossaryBgImage from "../../../../public/images/glossaryBgImage.webp"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import BlogSection from "@/src/components/sections/blog-section"
import styles from "./page.module.scss"
import AlphabetBar from "@/src/components/glossary/AlphabetBar"
import GlossarySearch from "@/src/components/glossary/GlossarySearch"
import LetterPageClient from "../../../components/glossary/LetterPageClient"

interface PageProps {
  params: Promise<{ slug: string }>
}

async function getTerm(slug: string) {
  // Ignore common static files to prevent DB errors
  const reservedSlugs = [
    "favicon.ico",
    "robots.txt",
    "sitemap.xml",
    "api",
    "_next",
  ]
  if (reservedSlugs.some((s) => slug.startsWith(s)) || slug.includes(".")) {
    return null
  }

  try {
    const baseUrl = getApiBaseUrl()
    const res = await fetch(`${baseUrl}/api/glossary/term/${slug}`, {
      cache: "no-store",
    })
    if (res.status === 404) return null
    if (!res.ok) return null
    return res.json()
  } catch (error) {
    console.error("Error fetching term:", error)
    return null
  }
}

async function getLetters() {
  try {
    const baseUrl = getApiBaseUrl()
    const res = await fetch(`${baseUrl}/api/glossary/letters`, {
      cache: "no-store",
    })
    if (!res.ok) return []
    return res.json()
  } catch (error) {
    console.error("Error fetching letters:", error)
    return []
  }
}

async function getTerms(letter: string) {
  try {
    const baseUrl = getApiBaseUrl()
    const res = await fetch(
      `${baseUrl}/api/glossary/letter/${encodeURIComponent(letter)}`,
      { cache: "no-store" }
    )
    if (!res.ok) return []
    return res.json()
  } catch (error) {
    console.error("Error fetching terms:", error)
    return []
  }
}

function isLetter(slug: string): boolean {
  const decoded = decodeURIComponent(slug)
  // Check if it's a single letter or special character placeholders
  return (
    (decoded.length === 1 && /^[a-zA-Z]$/.test(decoded)) ||
    decoded === "#" ||
    decoded === "%23" ||
    decoded === "letter-with-numbers"
  )
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params

  if (isLetter(slug)) {
    let letter = decodeURIComponent(slug).toUpperCase()
    if (letter === "LETTER-WITH-NUMBERS") letter = "#"

    return {
      title: `FinTech Glossary - ${letter} Terms | Financial Technology Dictionary`,
      description: `Browse all financial technology terms starting with ${letter}. Comprehensive definitions and explanations.`,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/glossary/${slug}`,
      },
    }
  } else {
    const term = await getTerm(slug)
    if (!term) {
      return {
        title: "Term Not Found",
        description: "The requested glossary term was not found.",
      }
    }

    return {
      title: term.meta_title || `${term.word} | FinTech Glossary`,
      description:
        term.meta_description || stripHtml(term.content).substring(0, 160),
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_URL}/glossary/${slug}`,
      },
      openGraph: {
        title: term.meta_title || `${term.word} | FinTech Glossary`,
        description:
          term.meta_description || stripHtml(term.content).substring(0, 160),
        url: `${process.env.NEXT_PUBLIC_URL}/glossary/${slug}`,
        type: "website",
        images: term.feature_image ? [term.feature_image] : [],
        imageAlt: term.feature_image_alt || "",
      },
      twitter: {
        card: "summary_large_image",
        title: term.meta_title || `${term.word} | FinTech Glossary`,
        description:
          term.meta_description || stripHtml(term.content).substring(0, 160),
        images: term.feature_image ? [term.feature_image] : [],
      },
    }
  }
}

export default async function GlossarySlugPage({ params }: PageProps) {
  const { slug } = await params

  if (isLetter(slug)) {
    // Render Letter Page
    let letter = decodeURIComponent(slug)
    if (letter === "letter-with-numbers") letter = "#"

    const terms = await getTerms(letter)
    return <LetterPageClient letter={letter} initialTerms={terms} />
  } else {
    // Render Term Page
    const term = await getTerm(slug)

    if (!term) {
      notFound()
    }

    const availableLetters = await getLetters()
    // Identify letter from term word
    let letter = term.word ? term.word.charAt(0).toUpperCase() : "#"
    if (/\d/.test(letter)) {
      letter = "#"
    }

    const url = `${process.env.NEXT_PUBLIC_URL}/glossary/${slug}`
    const encodedUrl = encodeURIComponent(url)
    const encodedTitle = encodeURIComponent(term.word)

    const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    const facebookShare = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    const twitterShare = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`

    const blogLinks: string[] = []

    if (term.showRelatedBlogs && term.blogWord) {
      blogLinks.push(term.blogWord)
    }

    const aiPrompt = `Please summarize this FinTech glossary term for me: ${url}`
    const chatGptLink = `https://chatgpt.com/?q=${encodeURIComponent(aiPrompt)}`
    const claudeLink = `https://claude.ai/new?q=${encodeURIComponent(aiPrompt)}`
    const perplexityLink = `https://www.perplexity.ai/?q=${encodeURIComponent(aiPrompt)}`

    return (
      <>
        <section className={styles.detailPageSection}>
          <Image alt="" src={GlossaryBgImage} className={styles.bgImage} />
          <Container className={`pb-0 ${styles.paddingTop}`}>
            <div className="d-flex mb-3">
              <CustomBreadcrumb
                linkColor="allBlack"
                items={[
                  { name: "Home", url: "/" },
                  { name: "Glossary", url: "/glossary" },
                  {
                    name: letter.toUpperCase(),
                    url: `/glossary/${letter === "#" ? "letter-with-numbers" : letter.toLowerCase()}`,
                  },
                  { name: term.word, url: `/glossary/${slug}` },
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
            <GlossarySearch />
            <div className={styles.topAlphabetBar}>
              <AlphabetBar
                currentLetter={letter}
                availableLetters={availableLetters}
              />
            </div>
            <div className={styles.sectionWrapper}>
              <aside className={styles.sidebar}>
                <div className={styles.aiBox}>
                  <h3 className={styles.aiBoxTitle}>
                    Summarize with <span>AI</span>
                  </h3>

                  <a
                    href={chatGptLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.aiOption}
                  >
                    <span className={styles.aiIcon}>
                      <Image
                        src="/svgs/chat-gpt-icon.svg"
                        alt="Ask ChatGPT"
                        width={24}
                        height={24}
                      />
                    </span>
                    {"Ask "} <strong> Chat GPT</strong>
                  </a>
                  <div className={styles.aiDivider}></div>

                  <a
                    href={claudeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.aiOption}
                  >
                    <span className={styles.aiIcon}>
                      <Image
                        src="/svgs/claude-icon.svg"
                        alt="Ask Claude"
                        width={24}
                        height={24}
                      />
                    </span>
                    {"Ask "} <strong> Claude</strong>
                  </a>
                  <div className={styles.aiDivider}></div>

                  <a
                    href={perplexityLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.aiOption}
                  >
                    <span className={styles.aiIcon}>
                      <Image
                        src="/svgs/perplexity-icon.svg"
                        alt="Ask Perplexity"
                        width={24}
                        height={24}
                      />
                    </span>
                    {"Ask "} <strong> Perplexity</strong>
                  </a>
                  <div className={styles.aiDivider}></div>
                </div>
              </aside>

              <div className={styles.mainContent}>
                <div className={styles.titleSection}>
                  <DynamicHeading
                    content={[
                      {
                        text: term.word,
                        color: "color-dark-grey f-4",
                      },
                    ]}
                    headingTag="h2"
                    className={styles.termTitle}
                  />

                  <div className={styles.iconContainer}>
                    <a
                      href={linkedinShare}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={styles.icon}
                    >
                      <FaLinkedinIn />
                    </a>

                    <a
                      href={facebookShare}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={styles.icon}
                    >
                      <FaFacebookF />
                    </a>

                    <a
                      href={twitterShare}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={styles.icon}
                    >
                      <FaXTwitter />
                    </a>
                  </div>
                </div>

                <div
                  className={styles.sectionContent + " " + "ql-editor"}
                  dangerouslySetInnerHTML={{ __html: term.content }}
                />
              </div>
            </div>

            <div className={styles.bottomAlphabetBar}>
              <AlphabetBar
                currentLetter={letter}
                availableLetters={availableLetters}
              />
            </div>
          </Container>
        </section>

        {/* Related Blogs Section */}
        {blogLinks.length > 0 && (
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
            links={blogLinks}
          />
        )}
      </>
    )
  }
}
