"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import styles from "./monstersCard.module.scss"
import { Monster } from "@/src/types"
import VideoModal from "@/src/components/vedio-modal"

const CloseIcon = () => (
  <svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 4l10 10M14 4L4 14"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
    />
  </svg>
)

const VideoIcon = ({ className }: { className?: string }) => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 11 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.49143 9.67439e-07C1.23805 -0.000249723 0.988779 0.0640585 0.767143 0.186858C0.539852 0.302711 0.348373 0.478233 0.21323 0.694612C0.078088 0.910991 0.00437763 1.16007 0 1.41514V10.5669C0.00437763 10.8219 0.078088 11.071 0.21323 11.2874C0.348373 11.5038 0.539852 11.6793 0.767143 11.7951C0.992798 11.9205 1.24712 11.9851 1.50524 11.9827C1.76336 11.9803 2.01643 11.911 2.23971 11.7814L9.63686 7.206C9.86513 7.09096 10.057 6.91478 10.191 6.6971C10.325 6.47941 10.3959 6.22879 10.3958 5.97317C10.3957 5.71754 10.3246 5.46697 10.1905 5.24938C10.0563 5.03179 9.86436 4.85574 9.636 4.74086L2.23886 0.199715L2.22514 0.192001C2.0012 0.0658467 1.74846 -0.000291752 1.49143 9.67439e-07Z"
      fill="currentColor"
    />
  </svg>
)

function hexToRgba(hex: string, alpha: number) {
  const clean = hex.replace("#", "")
  const bigint = parseInt(clean, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const expandedBackgrounds = [
  "linear-gradient(180deg, #67AB45 0%, #69A944 100%)",
  "linear-gradient(180deg, #C2A98F 0%, #C4B09B 100%)",
  "linear-gradient(180deg, #C68B13 0%, #ECB634 100%)",
  "linear-gradient(180deg, #FF6806 0%, #EC5200 100%)",
]

const MonstersCardsSection = ({ monsters = [] }: { monsters: Monster[] }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [videoUrl, setVideoUrl] = useState("")

  const selectedMonster = monsters.find((m) => m.id === selectedId) || null

  const handlePlay = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const monster = monsters.find((m) => m.id === id)
    if (monster?.videoUrl) {
      setVideoUrl(monster.videoUrl)
      setVideoModalOpen(true)
    }
  }

  const handleSelect = (id: number) => {
    setSelectedId(id)
  }

  const handleClose = () => {
    setSelectedId(null)
  }

  const stageRef = useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    if (selectedId !== null && stageRef.current) {
      setTimeout(() => {
        if (stageRef.current) {
          const y =
            stageRef.current.getBoundingClientRect().top + window.scrollY - 100
          window.scrollTo({ top: y, behavior: "smooth" })
        }
      }, 50)
    }
  }, [selectedId])

  return (
    <div className={styles.monsters_wrapper}>
      <div style={{ display: "none" }} aria-hidden="true">
        {monsters.map((monster) => {
          const bgUrlMatch = monster.expandedBg.match(/url\(['"]?(.*?)['"]?\)/)
          const bgUrl = bgUrlMatch ? bgUrlMatch[1] : ""
          return bgUrl ? (
            <img key={`preload-bg-${monster.id}`} src={bgUrl} alt="" />
          ) : null
        })}
      </div>
      <div className={styles.stage} ref={stageRef}>
        <div
          className={`${styles.grid} ${
            selectedMonster ? styles.grid_hidden : ""
          }`}
        >
          {monsters.map((monster, index) => (
            <div
              key={monster.id}
              className={styles.monster_card}
              style={
                {
                  "--accent": monster.accent,
                  "--accent-soft": hexToRgba(monster.accent, 0.35),
                  "--btn-gradient": monster.btnGradient,
                  "--btn-color-1": monster.btnColor1,
                  "--btn-color-2": monster.btnColor2,
                } as React.CSSProperties
              }
              onClick={() => handleSelect(monster.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault()
                  handleSelect(monster.id)
                }
              }}
            >
              <div className={styles.monster_image_wrapper}>
                <Image
                  src={monster.image}
                  alt={monster.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
              <div className={styles.monster_card_content}>
                <p className={styles.eyebrow}>{monster.tagline}</p>
                <h3 className={styles.monster_name}>{monster.name}</h3>
                <button
                  type="button"
                  className={styles.listen_btn}
                  onClick={(e) => handlePlay(monster.id, e)}
                >
                  <span>Watch {monster.name}</span>
                  <VideoIcon />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`${styles.expanded_wrapper} ${
            selectedMonster ? styles.expanded_wrapper_visible : ""
          }`}
          aria-hidden={!selectedMonster}
        >
          {selectedMonster && (
            <div
              className={styles.expanded_card}
              style={
                {
                  "--accent": selectedMonster.accent,
                  "--accent-soft": hexToRgba(selectedMonster.accent, 0.35),
                  "--expanded-bg": selectedMonster.expandedBg,
                  "--expanded-mobile-gradient":
                    expandedBackgrounds[
                      monsters.findIndex((m) => m.id === selectedMonster.id)
                    ],
                } as React.CSSProperties
              }
            >
              <button
                type="button"
                className={styles.close_btn}
                onClick={handleClose}
                aria-label="Close"
              >
                <CloseIcon />
              </button>

              <div className={styles.expanded_image}>
                <Image
                  src={selectedMonster.image}
                  alt={selectedMonster.name}
                  width={220}
                  height={293}
                />
              </div>

              <h3 className={styles.expanded_name}>{selectedMonster.name}</h3>
              <p className={styles.expanded_desc}>
                {selectedMonster.description}
              </p>
              <div className={styles.expanded_divider} />
              <div className={styles.expanded_footer}>
                <div className={styles.expanded_quote_block}>
                  <p className={styles.expanded_quote}>
                    {selectedMonster.quote}
                  </p>
                  <p className={styles.expanded_subtext}>
                    {selectedMonster.subtext}
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.listen_btn}
                  onClick={(e) => handlePlay(selectedMonster.id, e)}
                >
                  <span> Watch {selectedMonster.name} </span>
                  <VideoIcon />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      <VideoModal
        open={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        videoUrl={videoUrl}
      />
    </div>
  )
}

export default MonstersCardsSection
