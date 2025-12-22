"use client"

import React from "react"
import styles from "./style.module.scss"

type AiOption = {
  id: string
  label: string
  variant: "success" | "warning" | "dark"
  href: string
}

const aiOptions: AiOption[] = [
  {
    id: "chatgpt",
    label: "Ask Chat GPT",
    variant: "success",
    href: "#chatgpt",
  },
  { id: "claude", label: "Ask Claude", variant: "warning", href: "#claude" },
  {
    id: "perplexity",
    label: "Ask Perplexity",
    variant: "dark",
    href: "#perplexity",
  },
]

const AskAiSection: React.FC = () => {
  return (
    <section className={`container my-5 ${styles.askAiSection}`}>
      <div className={`p-4 p-md-5 ${styles.askAiBox}`}>
        <h2 className={`mb-2 text-center ${styles.askAiTitle}`}>
          Still not sure that EnKash is right for{" "}
          <span className={styles.highlightText}>you?</span>
        </h2>

        <p className={`mb-4 text-center ${styles.askAiSubtitle}`}>
          Let ChatGPT, Claude, or Perplexity do the thinking for you. Click a
          button and see what your favorite AI says about EnKash.
        </p>

        <div className="d-flex flex-column flex-md-row justify-content-center gap-3">
          {aiOptions.map((ai) => (
            <a
              key={ai.id}
              href={ai.href}
              className={`btn btn-${ai.variant} ${styles.askAiBtn}`}
            >
              {ai.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AskAiSection
