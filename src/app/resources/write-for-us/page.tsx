import React from "react"
import { Metadata } from "next"
import Link from "next/link"
import styles from "./page.module.scss"
import DynamicHeading from "@/src/components/dynamic-heading"
import generateMetaData from "@/src/utils/metaData"

export const metadata: Metadata = generateMetaData({
  title: "Write for Us – Fintech & Finance Contributors | EnKash Blogs",
  description:
    "Contribute guest posts, thought leadership articles, and expert fintech and finance insights to EnKash. Read our writing guidelines and topics.",
  alternates: {
    canonical: `${process.env.URL || "https://www.enkash.com"}/resources/write-for-us`,
  },
})

export default function WriteForUsPage() {
  return (
    <div className={styles.writeForUsPage}>
      {/* Breadcrumbs */}
      <div className={styles.breadcrumbs}>
        <Link href="/resources/blogs">Resources</Link>
        <span>|</span>
        <span>Write for Us</span>
      </div>

      {/* Centered Blue Gradient Banner */}
      <header className={styles.banner}>
        <div className={styles.bannerContent}>
          <DynamicHeading
            headingTag="h1"
            content={[
              { title: "Write for Us – Fintech & Finance Guest Posts" },
            ]}
            className={styles.title}
          />
          <p className={styles.subtitle}>
            Looking to contribute to a fintech guest posting platform? We
            welcome high-quality, original articles from fintech professionals,
            finance writers, accountants, and payments experts.
          </p>
        </div>
      </header>

      {/* Main Content Column */}
      <article className={styles.contentWrapper}>
        {/* Intro */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[
              { title: "Write for Us – Fintech & Finance Contributors" },
            ]}
            className="heading-h4"
          />
          <p>
            EnKash is a fintech-focused platform covering payments, cards,
            accounting, loyalty programs, airport lounges, and business finance.
            Our audience includes founders, CFOs, finance teams, and fintech
            decision-makers.
          </p>
          <p>
            We accept guest posts, thought leadership articles, and expert
            insights that provide real value.
          </p>
        </section>

        {/* Topics We Accept */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[{ title: "Topics We Accept" }]}
            className="heading-h4"
          />
          <p>We actively accept content in the following categories:</p>

          <DynamicHeading
            headingTag="h3"
            content={[{ title: "Fintech & Payments" }]}
            className="heading-h5"
          />
          <ul>
            <li>Digital payments, UPI, payment gateways</li>
            <li>Corporate cards, prepaid cards, virtual cards</li>
            <li>Expense management & spend control</li>
            <li>Embedded finance, neobanking, APIs</li>
          </ul>

          <DynamicHeading
            headingTag="h3"
            content={[{ title: "Finance & Accounting" }]}
            className="heading-h5"
          />
          <ul>
            <li>Accrual vs cash accounting, reconciliation</li>
            <li>Working capital & cash flow management</li>
            <li>GST, invoicing, compliance, audits</li>
            <li>Accounting automation & finance tools</li>
          </ul>

          <DynamicHeading
            headingTag="h3"
            content={[{ title: "Cards, Rewards & Loyalty" }]}
            className="heading-h5"
          />
          <ul>
            <li>Credit, debit & corporate card benefits</li>
            <li>Reward points, cashback, miles optimization</li>
            <li>Loyalty programs & partnerships</li>
            <li>Airport lounge access programs & comparisons</li>
          </ul>

          <p>
            Content must be educational, practical, and relevant to fintech or
            business finance.
          </p>
        </section>

        {/* Guest Post Guidelines */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[{ title: "Guest Post Guidelines" }]}
            className="heading-h4"
          />
          <p>To maintain editorial quality:</p>
          <ul>
            <li>100% original & plagiarism-free content</li>
            <li>Minimum 1,000 words.</li>
            <li>Well-structured with H2/H3 headings</li>
            <li>Data-backed insights or real use cases</li>
            <li>Clear, professional, neutral tone</li>
            <li>No spun, AI-generated, or duplicated content</li>
          </ul>
        </section>

        {/* SEO & Content Requirements */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[{ title: "SEO & Content Requirements" }]}
            className="heading-h4"
          />
          <p>To improve discoverability:</p>
          <ul>
            <li>Use keywords naturally (no stuffing)</li>
            <li>Include short paragraphs & bullet points</li>
            <li>Add credible external references (if needed)</li>
            <li>Share a suggested SEO title & meta description</li>
            <li>Relevant Image</li>
          </ul>
        </section>

        {/* Link Policy */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[{ title: "Link Policy" }]}
            className="heading-h4"
          />
          <ul>
            <li>
              1 contextual do-follow link allowed (editorial review applies)
            </li>
            <li>No spammy, irrelevant, or low-quality links</li>
            <li>No links to gambling, adult, or illegal services</li>
          </ul>
          <p>Overly promotional content will be rejected.</p>
          <p>
            We reserve the right to apply nofollow/sponsored attributes where
            necessary.
          </p>
        </section>

        {/* What We Don't Accept */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[{ title: "What We Don’t Accept" }]}
            className="heading-h4"
          />
          <ul>
            <li>Thin or generic content</li>
            <li>Press releases or product-only promotions</li>
            <li>Excessive backlink-focused submissions</li>
            <li>Irrelevant or off-topic articles</li>
          </ul>
        </section>

        {/* Editorial Rights */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[{ title: "Editorial Rights" }]}
            className="heading-h4"
          />
          <p>By submitting, you agree that:</p>
          <ul>
            <li>We may edit content for clarity, SEO, or formatting</li>
            <li>We may add internal links or CTAs</li>
            <li>Final publishing rights rest with EnKash</li>
          </ul>
        </section>

        {/* Why Write for Us? */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[{ title: "Why Write for Us?" }]}
            className="heading-h4"
          />
          <ul>
            <li>Reach a high-intent fintech audience</li>
            <li>Build authority in finance & payments</li>
            <li>Earn a high-quality backlink from a fintech domain</li>
            <li>Showcase expertise to founders & CFOs</li>
          </ul>
          <p>
            Looking to a reliable fintech platform to contribute to? Submit your
            proposal today and get published.
          </p>
        </section>

        {/* Want to Contribute a Guest Post? */}
        <section>
          <DynamicHeading
            headingTag="h2"
            content={[{ title: "Want to Contribute a Guest Post?" }]}
            className="heading-h4"
          />
          <p>
            If you’re a fintech professional, finance expert, or payments writer
            and would like to contribute a high-quality guest post to EnKash,
            we’d love to hear from you.
          </p>
          <p>
            <strong>How to Submit:</strong>
          </p>
          <p>
            Email your complete article or content proposal to{" "}
            <a href="mailto:marketing@enkash.com">marketing@enkash.com</a>
          </p>
          <p>Please include:</p>
          <ul>
            <li>Content document (as per our guidelines above)</li>
            <li>Suggested SEO title & meta description</li>
          </ul>
          <p>
            Our team will review your submission and get back to you if it’s a
            good fit. Approved articles will be published after editorial review
            and optimization.
          </p>
        </section>
      </article>
    </div>
  )
}
