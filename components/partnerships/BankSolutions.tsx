"use client"
import type React from "react"
import styles from "./BankSolutions.module.scss"
import { FaCaretDown } from "react-icons/fa"
import DynamicHeading from "../dynamicHeading/dynamic-heading"
import Link from "next/link"
import Image from "next/image"

interface Solution {
  title: string
  content?: string
  button?: {
    text: string
    url: string
  }
}

interface BankSolutionsProps {
  heading: {
    content: { title: string; color: string }[]
    headingTag?: keyof React.JSX.IntrinsicElements
    className?: string
  }
  solutions: Solution[]
  subheading?: {
    content: { title: string; color: string }[]
    headingTag?: keyof React.JSX.IntrinsicElements
    className?: string
  }

  button?: {
    connectText: string
    connectUrl: string
    blueArrow: string
  }
}

const BankSolutions: React.FC<BankSolutionsProps> = ({
  heading,
  solutions,
  subheading,
  button,
}) => {
  return (
    <div className={"max-w-auto"}>
      <div className={styles.bankSolutions}>
        <div className={styles.bankContainer}>
          <DynamicHeading
            content={heading.content}
            headingTag={"h2"}
            className={heading.className || "f-5 mb-4 mb-md-5"}
          />

          {/* Optional subheading */}
          {subheading && (
            <DynamicHeading
              content={subheading.content}
              headingTag={"p"}
              className={subheading.className || "f-3 mb-4 mb-md-5"}
            />
          )}

          <div className={styles.solutionsList}>
            {solutions.map((item, index) => (
              <div className={styles.solutionItem} key={index}>
                <div className={styles.solutionHeader}>
                  <div className={styles.titleContainer}>
                    <span className={styles.title}>{item.title}</span>
                  </div>
                  <div className={styles.arrow}>
                    <FaCaretDown />
                  </div>
                </div>

                <div className={styles.solutionContent}>
                  <p>{item.content}</p>
                  {item.button && (
                    <div className={styles.customButtons}>
                      <Link href={item.button.url}>
                        {item.button.text}
                        <svg
                          width="8"
                          height="10"
                          viewBox="0 0 8 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.75 1.25L5.75 5.25L1.75 9.25"
                            stroke="#1C5AF4"
                            strokeWidth="2"
                          />
                        </svg>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          {button && (
            <div className={styles.buttonContainer}>
              <div className="mt-3 d-none d-md-block">
                <div className={`connectWithUs ${styles.connectWithUs}`}>
                  <Link href={button.connectUrl}>
                    <DynamicHeading
                      content={[
                        {
                          title: button.connectText,
                          color: "color-equity-blue",
                        },
                      ]}
                      headingTag="p"
                      className="mb-0 f-5"
                    />
                    <Image
                      src={button.blueArrow}
                      alt="blue Arrow"
                      width={15}
                      height={15}
                      className="ms-2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BankSolutions
