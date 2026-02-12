// app/glossary/[letter]/[slug]/page.tsx

import { stripHtml } from "@/src/utils/format"
import { getApiBaseUrl } from "@/src/utils/api-helpers"
import React from "react"
import { Container } from "react-bootstrap"
import { notFound } from "next/navigation"
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from 'react-icons/fa6'
import Image from "next/image"
import Link from "next/link"
import GlossaryBgImage from "../../../../../public/images/glossaryBgImage.webp"
import CustomBreadcrumb from "@/src/components/breadcrumb"
import DynamicHeading from "@/src/components/dynamic-heading"
import BlogSection from "@/src/components/sections/blog-section"
import styles from "./page.module.scss"
import GlossaryClient from "./slug-page-client"
import AlphabetBar from "@/src/components/glossary/AlphabetBar"


interface PageProps {
  params: Promise<{ letter: string; slug: string }>
}

async function getTerm(slug: string) {
  try {
    const baseUrl = getApiBaseUrl()
    const res = await fetch(`${baseUrl}/api/glossary/term/${slug}`, { next: { revalidate: 3600 } })
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
    const res = await fetch(`${baseUrl}/api/glossary/letters`, { next: { revalidate: 3600 } })
    if (!res.ok) return []
    return res.json()
  } catch (error) {
    console.error("Error fetching letters:", error)
    return []
  }
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const term = await getTerm(slug)

  if (!term) {
    return {
      title: "Term Not Found",
      description: "The requested glossary term was not found.",
    }
  }

  return {
    title: term.meta_title || `${term.word} | FinTech Glossary`,
    description: term.meta_description || stripHtml(term.content).substring(0, 160),
  }
}

export default async function GlossaryDetail({ params }: PageProps) {
  const { letter, slug } = await params
  const term = await getTerm(slug)
  const availableLetters = await getLetters()

  if (!term) {
    notFound()
  }

  const blogLinks: string[] = []

  // const tempLinks = ["top-10-banks-in-india", "how-to-update-pan-card", "https://uat.blogs.enkash.com/blog/how-to-apply-for-a-pan-card-online"]
  // blogLinks.push(...tempLinks)

  if (term.showRelatedBlogs && term.blogWord) {
    blogLinks.push(term.blogWord);
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
                { name: term.word, url: `/glossary/${letter}/${slug}` },
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
                    text: term.word,
                    color: "color-dark-grey",
                  },
                ]}
                headingTag="h2"
                className={styles.termTitle}
              />

              <div className={styles.iconContainer}>
                <a href="https://www.linkedin.com/company/enkashbusiness" className={styles.icon}>
                  <FaLinkedinIn />
                </a>

                <a href="https://www.facebook.com/EnKashBusiness" className={styles.icon}>
                  <FaFacebookF />
                </a>

                <a href="https://twitter.com/EnkashBusiness" className={styles.icon}>
                  <FaXTwitter />
                </a>
              </div>
            </div>

            <section className={styles.contentSection}>
              <DynamicHeading
                content={[
                  {
                    text: `Definition`,
                    color: "color-alternate-grey f-7",
                  },
                ]}
                headingTag="h4"
                className={styles.slugSectionHeading}
              />

              <div
                className={styles.sectionContent + " " + "ql-editor"}
                dangerouslySetInnerHTML={{ __html: term.content }}
              />
            </section>
          </div>

          <div className={styles.bottomAlphabetBar}>
            <AlphabetBar currentLetter={letter} availableLetters={availableLetters} />
          </div>
        </Container>
      </section>

      {/* Related Blogs Section */}
      {(blogLinks.length > 0) && (
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
