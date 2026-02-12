import React from "react"
import styles from "./page.module.scss"
import GlossarySearch from "@/src/components/glossary/GlossarySearch"
import AlphabetBar from "@/src/components/glossary/AlphabetBar"

interface GlossaryClientProps {
  letter: string
  availableLetters: string[]
}

export default function GlossaryClient({
  letter = "",
  availableLetters = [],
}: GlossaryClientProps) {

  return (
    <>
      <GlossarySearch />

      <div className={styles.topAlphabetBar}>
        <AlphabetBar currentLetter={letter} availableLetters={availableLetters} />
      </div>
    </>
  )
}
