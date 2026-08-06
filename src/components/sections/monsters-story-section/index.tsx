"use client"
import React, { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import styles from "./monsters-story.module.scss"

const Word = ({
  children,
  progress,
  range,
}: {
  children: string
  progress: any
  range: [number, number]
}) => {
  const opacity = useTransform(progress, range, [0.2, 1])
  return (
    <motion.span style={{ opacity }} className={styles.word}>
      {children}
    </motion.span>
  )
}

const MonstersStorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 65%", "end 50%"],
  })

  const paragraph1 = "Every merchant is being watched."
  const paragraph2 =
    "Behind the smooth UI and the buzzword keynotes, four monsters have quietly moved into checkout — draining revenue nobody can see."
  const paragraph3 =
    "For years the industry tried to make payments pretty. Sleeker dashboards. Louder launches. The monsters loved it — pretty never scared them."
  const paragraph4 =
    "Then something built differently showed up. It didn't chase disruption — it fixed what was broken. It didn't hide behind a dashboard — it showed up when it mattered."

  const paragraph5 = "Because **payments aren't a feature.**"
  const paragraph6 = "They're your **revenue.**"

  const renderWords = (
    text: string,
    startIndex: number,
    totalWords: number
  ) => {
    const words = text.split(" ")
    return words.map((word, i) => {
      const globalIndex = startIndex + i
      const start = globalIndex / totalWords
      const end = start + 1 / totalWords

      let isBold = false
      let cleanWord = word
      if (word.includes("**")) {
        isBold = true
        cleanWord = word.replace(/\*\*/g, "")
      }
      // If we want bolding to span multiple words, a simple replace is fine if we marked each word,
      // but since the string has "**payments aren't a feature.**", splitting by space means:
      // "**payments" (has **), "aren't", "a", "feature.**" (has **).
      // A better way is to pass a boolean if the word is inside bold tags.

      return (
        <React.Fragment key={i}>
          <Word progress={scrollYProgress} range={[start, end]}>
            {cleanWord}
          </Word>{" "}
        </React.Fragment>
      )
    })
  }

  // To properly handle bolding across multiple words, let's pre-process the text:
  const processText = (text: string) => {
    const parts = text.split(/(\*\*.*?\*\*)/g)
    let wordsArray: { word: string; isBold: boolean }[] = []

    parts.forEach((part) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        const cleanPart = part.slice(2, -2)
        const partWords = cleanPart.split(" ")
        partWords.forEach((w) => wordsArray.push({ word: w, isBold: true }))
      } else {
        const partWords = part.split(" ").filter((w) => w !== "")
        partWords.forEach((w) => wordsArray.push({ word: w, isBold: false }))
      }
    })
    return wordsArray
  }

  const renderProcessedWords = (
    text: string,
    startIndex: number,
    totalWords: number
  ) => {
    const wordsArray = processText(text)
    return wordsArray.map((item, i) => {
      const globalIndex = startIndex + i
      const start = globalIndex / totalWords
      const end = start + 1 / totalWords
      return (
        <React.Fragment key={i}>
          <Word progress={scrollYProgress} range={[start, end]}>
            {item.isBold ? <strong>{item.word}</strong> : item.word}
          </Word>{" "}
        </React.Fragment>
      )
    })
  }

  const allText = `${paragraph2} ${paragraph3} ${paragraph4} ${paragraph5} ${paragraph6}`
  const totalWords = processText(allText).length

  const p2Count = processText(paragraph2).length
  const p3Count = processText(paragraph3).length
  const p4Count = processText(paragraph4).length
  const p5Count = processText(paragraph5).length

  return (
    <div className={styles.story_section} ref={containerRef}>
      <div className="max-w-auto">
        <div className={styles.header}>
          <span>The Monsters</span>
          <h2>The Story</h2>
        </div>

        <div className={styles.content}>
          <p className={styles.subtitle}>{paragraph1}</p>
          <div className={styles.main_text}>
            <p>{renderProcessedWords(paragraph2, 0, totalWords)}</p>
            <p>{renderProcessedWords(paragraph3, p2Count, totalWords)}</p>
            <p>
              {renderProcessedWords(paragraph4, p2Count + p3Count, totalWords)}
            </p>
            <br />
            <p>
              {renderProcessedWords(
                paragraph5,
                p2Count + p3Count + p4Count,
                totalWords
              )}
            </p>
            <p>
              {renderProcessedWords(
                paragraph6,
                p2Count + p3Count + p4Count + p5Count,
                totalWords
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MonstersStorySection
