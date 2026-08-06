"use client"

import React, { useRef, useState } from "react"
import Image from "next/image"
import styles from "./monstersCard.module.scss"
import { Monster } from "@/src/types"

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
  "linear-gradient(180deg, #BEA489 0%, #FBEEE3 100%)",
  "linear-gradient(180deg, #C68B13 0%, #ECB634 100%)",
  "linear-gradient(180deg, #FF6806 0%, #EC5200 100%)",
]

const MonstersCardsSection = ({ monsters = [] }: { monsters: Monster[] }) => {
  const [selectedId, setSelectedId] = useState<number | null>(null)
  const audioRefs = useRef<Record<number, HTMLAudioElement | null>>({})

  const selectedMonster = monsters.find((m) => m.id === selectedId) || null

  const stopAllExcept = (id: number | null) => {
    Object.entries(audioRefs.current).forEach(([key, el]) => {
      if (el && Number(key) !== id) {
        el.pause()
        el.currentTime = 0
      }
    })
  }

  const handlePlay = (id: number, e: React.MouseEvent) => {
    e.stopPropagation()
    stopAllExcept(id)
    const el = audioRefs.current[id]
    if (!el) return
    if (el.paused) {
      el.play().catch(() => {})
    } else {
      el.pause()
    }
  }

  const handleSelect = (id: number) => {
    setSelectedId(id)
  }

  const handleClose = () => {
    stopAllExcept(null)
    setSelectedId(null)
  }

  return (
    <div className={styles.monsters_wrapper}>
      <div className={styles.stage}>
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
                <Image src={monster.image} alt={monster.name} fill />
              </div>
              <div className={styles.monster_card_content}>
                <p className={styles.eyebrow}>{monster.tagline}</p>
                <h3 className={styles.monster_name}>{monster.name}</h3>
                <button
                  type="button"
                  className={styles.listen_btn}
                  onClick={(e) => handlePlay(monster.id, e)}
                >
                  <span>Listen Lazlo </span>
                  <Image
                    src={"/svgs/musicIcon.svg"}
                    width={18}
                    height={18}
                    alt="music Icon"
                  />
                </button>
              </div>
              <audio
                ref={(el) => {
                  audioRefs.current[monster.id] = el
                }}
                src={monster.audio}
                preload="none"
              />
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
                  <span> Listen Lazlo </span>
                  <Image
                    src={"/svgs/musicIcon.svg"}
                    width={18}
                    height={18}
                    alt="music Icon"
                  />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MonstersCardsSection
