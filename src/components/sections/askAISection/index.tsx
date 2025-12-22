"use client"

import React from "react"
import styles from "./style.module.scss"
import DynamicHeading from "../../dynamic-heading"
import gpt from "./img/chatGpt.svg"
import claude from "./img/claude.svg"
import perplixity from "./img/perplexity.svg"
import Image from "next/image"
import Link from "next/link"

type AiOption = {
  id: string
  label: string
  image: string
  href: string
}

const aiOptions: AiOption[] = [
  {
    id: "chatgpt",
    label: "Ask Chat GPT",
    image: gpt,
    href: "https://chatgpt.com/?prompt=tell%20me%20why%20enkash%20is%20a%20great%20choice%20for%20me",
  },
  {
    id: "claude",
    label: "Ask Claude",
    image: claude,
    href: "https://claude.ai/new?q=tell%20me%20why%20EnKash%20is%20a%20great%20choice%20for%20me",
  },
  {
    id: "perplexity",
    label: "Ask Perplexity",
    image: perplixity,
    href: "https://www.perplexity.ai/search/new?q=tell+me+why+EnKash+is+a+great+choice+for+me",
  },
]

const AskAiSection: React.FC = () => {
  return (
    <section className={`container mt-5 ${styles.askAiSection}`}>
      <div className={`p-4 p-md-5 max-w-auto ${styles.askAiBox}`}>
        <DynamicHeading
          content={[
            {
              title: "Still not sure that EnKash is right",
              color: "color-black",
            },
            {
              title: " for you?",
              color: "color-equity-blue",
            },
          ]}
          headingTag="h3"
          className="f-6 pb-3"
        />

        <DynamicHeading
          content={[
            {
              title:
                "Let ChatGPT, Claude, or Perplexity do the thinking for you. Click a          button and see what your favorite AI says about EnKash.",
              color: "color-black",
            },
          ]}
          headingTag="p"
          className="mb-0 pb-4"
        />

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          {aiOptions.map((ai) => (
            <>
              <div>
                {" "}
                <Link
                  key={ai.id}
                  href={ai.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn ${styles.askAiBtn} text-black gap-3`}
                >
                  <Image src={ai.image} alt={ai.id} width={40} height={40} />
                  {ai.label}
                </Link>
                <hr className={`${styles.askAiBtnHr}`} />
              </div>
            </>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AskAiSection
