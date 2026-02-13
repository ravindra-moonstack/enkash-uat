"use client"

import React from "react"
import Link from "next/link"
import styles from "./AlphabetBar.module.scss"

const ALPHABET = "#ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")

interface AlphabetBarProps {
    currentLetter?: string
    availableLetters?: string[]
}

const AlphabetBar = ({ currentLetter, availableLetters }: AlphabetBarProps) => {
    return (
        <div className={styles.alphabetBar}>
            <div className={styles.alphabetScroll}>
                {ALPHABET.map((ltr) => {
                    const safeLtr = ltr || ""
                    const safeLetter = currentLetter || ""
                    const isActive = safeLetter.toUpperCase() === safeLtr

                    let href = `/glossary/${safeLtr.toLowerCase()}`
                    const isDisabled = false

                    if (safeLtr === "#") {
                        href = "/glossary/%23"
                    } else if (availableLetters && !availableLetters.includes(safeLtr)) {
                        // href = "#"
                        // isDisabled = true
                    }

                    return (
                        <Link
                            key={safeLtr}
                            href={isDisabled ? "#" : href}
                            className={`${styles.alphabetLink} ${isActive ? styles.active : ""} ${isDisabled ? styles.disabled : ""}`}
                        >
                            {safeLtr}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

export default AlphabetBar
