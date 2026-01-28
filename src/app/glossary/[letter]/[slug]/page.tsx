// app/glossary/[letter]/[slug]/page.tsx

import { fetchTermBySlug, fetchAllLetters } from "@/src/utils/glossaryData"
import React from "react"
import { Container } from "react-bootstrap"
import { notFound } from "next/navigation"
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import Image from "next/image"
import Link from "next/link"
import GlossaryBgImage from "../../../../../public/images/glossaryBgImage.webp"
import { CustomBreadcrumb, DynamicHeading } from "@/src/components"
import BlogSection from "@/src/components/sections/blog-section"
import styles from "./page.module.scss"
import GlossaryClient from "./slug-page-client"

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

interface PageProps {
  params: Promise<{ letter: string; slug: string }>
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const term = await fetchTermBySlug(slug)

  if (!term) {
    return {
      title: "Term Not Found",
      description: "The requested glossary term was not found.",
    }
  }

  return {
    title: term.metaTitle || `${term.keyword} | FinTech Glossary`,
    description: term.metaDescription || term.definition.substring(0, 160),
  }
}

export default async function GlossaryDetail({ params }: PageProps) {
  const { letter, slug } = await params
  const term = await fetchTermBySlug(slug)
  const availableLetters = await fetchAllLetters()

  if (!term) {
    notFound()
  }


  // Collect all sections to display
  const sections = []

  if (term.sectionHeading1 && term.sectionDescription1) {
    sections.push({
      heading: term.sectionHeading1,
      content: term.sectionDescription1,
    })
  }
  if (term.sectionHeading2 && term.sectionDescription2) {
    sections.push({
      heading: term.sectionHeading2,
      content: term.sectionDescription2,
    })
  }
  if (term.sectionHeading3 && term.sectionDescription3) {
    sections.push({
      heading: term.sectionHeading3,
      content: term.sectionDescription3,
    })
  }
  if (term.sectionHeading4 && term.sectionDescription4) {
    sections.push({
      heading: term.sectionHeading4,
      content: term.sectionDescription4,
    })
  }

  const blogLinks: string[] = []
  const blogCards: number[] = []

  if (term.relatedBlogs && Array.isArray(term.relatedBlogs) && term.relatedBlogs.length > 0) {
    if (typeof term.relatedBlogs[0] === 'string') {
      blogLinks.push(...(term.relatedBlogs as string[]));
    } else if (typeof term.relatedBlogs[0] === 'number') {
      blogCards.push(...(term.relatedBlogs as number[]));
    }
  }
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
                { name: letter.toUpperCase(), url: `/glossary/${letter}` },
                { name: term.keyword, url: `/glossary/${letter}/${slug}` },
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

          <GlossaryClient letter={letter} availableLetters={availableLetters} />

          <div className={styles.sectionWrapper}>
            <div className={styles.titleSection}>
              <DynamicHeading
                content={[
                  {
                    text: term.keyword,
                    color: "color-dark-grey",
                  },
                ]}
                headingTag="h2"
                className={styles.termTitle}
              />

              <div className={styles.iconContainer}>
                <a href="#" className={styles.icon}>
                  <FaLinkedinIn />
                </a>

                <a href="#" className={styles.icon}>
                  <FaFacebookF />
                </a>

                <a href="#" className={styles.icon}>
                  <FaXTwitter />
                </a>
              </div>
            </div>

            {/* All Other Sections */}
            {sections.map((section, index) => (
              <section key={index} className={styles.contentSection}>
                <DynamicHeading
                  content={[
                    {
                      text: `${section.heading}`,
                      color: "color-alternate-grey f-7",
                    },
                  ]}
                  headingTag="h4"
                  className={styles.slugSectionHeading}
                />

                <div
                  className={styles.sectionContent}
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </section>
            ))}
          </div>

          {/* Bottom Alphabet Navigation - Matching Reference Image */}
          <div className={styles.bottomAlphabetBar}>
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
        </Container>
      </section>

      {/* Related Blogs Section */}
      {(blogLinks.length > 0 || blogCards.length > 0) && (
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
          {...(blogLinks.length > 0 ? { links: blogLinks } : {})}
          {...(blogCards.length > 0 ? { cards: blogCards } : {})}
        />
      )}
    </>
  )
}
