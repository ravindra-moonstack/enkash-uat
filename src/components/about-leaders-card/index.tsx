"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"

import styles from "./styles.module.scss"
import DynamicHeading from "../dynamic-heading"
import { linkDinIcon } from "./img"
import { Leader, leaders } from "./data"

const LeadersSection: React.FC = () => {
  //

  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null)
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768)
    checkScreen()
    window.addEventListener("resize", checkScreen)
    return () => window.removeEventListener("resize", checkScreen)
  }, [])

  const handleOpen = (leader: Leader) => setSelectedLeader(leader)
  const handleClose = () => setSelectedLeader(null)

  return (
    <div className={`${styles.aboutLeaderSectionInner}`}>
      <div className={`${styles.leaderHeading}`}>
        <DynamicHeading
          content={[
            { title: "Meet our ", color: "color-black" },
            { title: "Leaders", color: "color-equity-blue" },
          ]}
          headingTag="h2"
          className="f-6 text-center mb-4 mb-md-5"
        />
      </div>

      <div className={`${styles.leaderCardSection}`}>
        <div className="row ">
          {leaders.map((leader, index) => (
            <div className="col-md-4 px-md-4 mb-4 mb-md-0" key={index}>
              <div
                onMouseEnter={() => !isMobile && handleOpen(leader)}
                onMouseLeave={() => !isMobile && handleClose()}
                onClick={() => isMobile && handleOpen(leader)}
                className={`${styles.cards}`}
              >
                <div className={`${styles.cardImage}`}>
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    width={400}
                    height={500}
                    className="object-cover"
                  />
                </div>
                <div className={`${styles.cardHeadding}`}>
                  <DynamicHeading
                    content={[{ title: leader.name, color: "color-black" }]}
                    headingTag="h4"
                    className="f-7"
                  />
                </div>
                <div className={`${styles.roles} subHeading`}>
                  <p>{leader.role}</p>
                </div>

               
                {selectedLeader?.name === leader.name && (
                  <div
                    className={`${styles.leaderPopupOuter}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      className={`${styles.leaderPopupinner} animate-slideUp`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {isMobile && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            handleClose()
                          }}
                          className={styles.closeBtn}
                          aria-label="Close"
                        >
                          ×
                        </button>
                      )}

                      <div className={`${styles.popupContentBox}`}>
                        <div className="max-w-auto">
                          <div className="row ">
                            <div className="col-md-4">
                              <div className={`${styles.popupLeftSide}`}>
                                <div className={`${styles.cardImage}`}>
                                  <Image
                                    src={leader.image}
                                    alt={leader.name}
                                    width={300}
                                    height={300}
                                    className="object-cover"
                                  />
                                </div>
                                <div className={`${styles.cardHeadding}`}>
                                  <DynamicHeading
                                    content={[
                                      {
                                        title: leader.name,
                                        color: "color-black",
                                      },
                                    ]}
                                    headingTag="h5"
                                    className="f-5"
                                  />
                                </div>
                                <div className={`${styles.roles}`}>
                                  <p style={{ color: "#fff" }}>{leader.role}</p>
                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className={`${styles.popupRightContent}`}>
                                <div className={`${styles.content} text-start`}>
                                  {leader.bio.map((item, i) => (
                                    <p key={i}>{item.line}</p>
                                  ))}
                                </div>
                                {leader.link && (
                                  <div className="mt-4 text-start">
                                    <a
                                      href={leader.link}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`${styles.linkDinIcon}`}
                                    >
                                      <Image
                                        src={linkDinIcon}
                                        alt="LinkedIn"
                                        width={40}
                                        height={40}
                                      />
                                    </a>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default LeadersSection
