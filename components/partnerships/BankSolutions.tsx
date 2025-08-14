"use client"
import type React from "react"
import { useState } from "react"
import styles from "./BankSolutions.module.scss"
import { FaChevronDown } from "react-icons/fa"

interface Solution {
    title: string
    content?: string
}

interface BankSolutionsProps {
    solutions: Solution[]
}

const BankSolutions: React.FC<BankSolutionsProps> = ({ solutions }) => {


    return (
        <div className={styles.bankSolutions}>
            <div className={styles.bankContainer}>
                <h2 className={styles.heading}>
                    Unified Solution for Banks Powered by <br />
                    <span>Advanced Technology &amp; Tools</span>
                </h2>

                <div className={styles.solutionsList}>
                    {solutions.map((item, index) => (
                        <div className={styles.solutionItem} key={index}>
                            <div className={styles.solutionHeader}

                            >
                                <div className={styles.titleContainer}>
                                    <div className={styles.line}></div>
                                    <span className={styles.title}>{item.title}</span>
                                </div>
                                <FaChevronDown className={`${styles.arrow} `} />

                            </div>

                            <div className={styles.solutionContent}>
                                <p>{item.content}</p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BankSolutions
