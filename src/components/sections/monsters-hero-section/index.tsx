"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion"
import CommonButton from "../../buttons"
import styles from "./monsters-hero.module.scss"
import VideoModal from "@/src/components/vedio-modal"
import RightArrowFill from "../../../../public/images/rightArrowFill.svg"

// Total frame count on disk: WebPage_scroll_animation_00000.png ... 00149.png
const TOTAL_FRAMES = 150
const START_FRAME_INDEX = 12
const LAST_FRAME_INDEX = 100

const SEQUENCE_VH = 200

const LOAD_CONCURRENCY = 12

const LOAD_DELAY_MS = 200

const frameUrl = (index: number) =>
  `/images/monsters-of-checkout/desktop/WebPage_scroll_animation_${index
    .toString()
    .padStart(5, "0")}.png`

const MonstersHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const drawFrameRef = useRef<((progress: number) => void) | null>(null)
  const frameIndexSourceRef = useRef<any>(null)
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  useEffect(() => {
    let cancelled = false
    const images: HTMLImageElement[] = []
    imagesRef.current = images

    const loadFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new window.Image()
        img.src = frameUrl(index)
        images[index] = img

        const done = () => resolve()

        if (typeof img.decode === "function") {
          img
            .decode()
            .then(() => {
              done()
              if (drawFrameRef.current && frameIndexSourceRef.current) {
                requestAnimationFrame(() => {
                  if (drawFrameRef.current && frameIndexSourceRef.current) {
                    drawFrameRef.current(frameIndexSourceRef.current.get())
                  }
                })
              }
            })
            .catch(done)
        } else {
          img.onload = () => {
            done()
            if (drawFrameRef.current && frameIndexSourceRef.current) {
              requestAnimationFrame(() => {
                if (drawFrameRef.current && frameIndexSourceRef.current) {
                  drawFrameRef.current(frameIndexSourceRef.current.get())
                }
              })
            }
          }
          img.onerror = done
        }
      })
    }

    // Frame 0 loads on its own, immediately, so the canvas has something to
    // paint before the rest of the sequence arrives.
    loadFrame(START_FRAME_INDEX).then(() => {
      if (!cancelled) {
        setFirstFrameLoaded(true)
      }
    })

    // Load the rest after a short delay (so it doesn't compete with
    // critical page assets), then in-order with limited concurrency so
    // early frames in the sequence are guaranteed to be ready before later
    // ones.
    const timer = setTimeout(() => {
      let nextIndex = START_FRAME_INDEX + 1

      const worker = async () => {
        while (!cancelled) {
          const index = nextIndex++
          if (index > LAST_FRAME_INDEX) return
          await loadFrame(index)
          if (cancelled) return
        }
      }

      const workers = Array.from({ length: LOAD_CONCURRENCY }, () => worker())
      Promise.all(workers)
    }, LOAD_DELAY_MS)

    return () => {
      cancelled = true
      clearTimeout(timer)
    }
  }, [])

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const rawFrameIndex = useTransform(
    scrollYProgress,
    [0, 1],
    [START_FRAME_INDEX, LAST_FRAME_INDEX]
  )

  // Tightened from the original (damping: 30, stiffness: 90, mass: 0.5).
  // That spring was tuned for a slow 500vh track and visibly trails fast
  // scrolling on a short track. This still smooths steppy wheel/trackpad
  // input but converges close to instantly, so it doesn't read as lag.
  const smoothFrameIndex = useSpring(rawFrameIndex, {
    damping: 40,
    stiffness: 320,
    mass: 0.1,
    restDelta: 0.001,
  })

  const frameIndexSource = smoothFrameIndex

  useEffect(() => {
    frameIndexSourceRef.current = frameIndexSource
  }, [frameIndexSource])

  const isImageReady = (img?: HTMLImageElement) =>
    !!img && img.complete && img.naturalWidth > 0

  // Initial setup for canvas
  useEffect(() => {
    if (!firstFrameLoaded || !canvasRef.current) return
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    const firstFrame = imagesRef.current[START_FRAME_INDEX]

    if (firstFrame && context && isImageReady(firstFrame)) {
      canvas.width = firstFrame.naturalWidth || 1920
      canvas.height = firstFrame.naturalHeight || 1080
      context.drawImage(firstFrame, 0, 0, canvas.width, canvas.height)
    } else if (context) {
      canvas.width = 1920
      canvas.height = 1080
    }
  }, [firstFrameLoaded])

  const drawFrame = (progress: number) => {
    if (!canvasRef.current) return
    const canvas = canvasRef.current
    const context = canvas.getContext("2d")
    if (!context) return

    const clamped = Math.max(
      START_FRAME_INDEX,
      Math.min(LAST_FRAME_INDEX, progress)
    )

    let lowerIndex = Math.floor(clamped)

    // Find closest loaded frame if the targeted one is not ready
    while (
      lowerIndex > START_FRAME_INDEX &&
      !isImageReady(imagesRef.current[lowerIndex])
    ) {
      lowerIndex--
    }

    const upperIndex = Math.min(LAST_FRAME_INDEX, lowerIndex + 1)
    const blend = lowerIndex === Math.floor(clamped) ? clamped - lowerIndex : 0

    const lowerFrame = imagesRef.current[lowerIndex]
    const upperFrame = imagesRef.current[upperIndex]

    if (isImageReady(lowerFrame)) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.globalAlpha = 1
      context.drawImage(lowerFrame, 0, 0, canvas.width, canvas.height)
    }

    if (blend > 0.001 && isImageReady(upperFrame)) {
      context.globalAlpha = blend
      context.drawImage(upperFrame, 0, 0, canvas.width, canvas.height)
      context.globalAlpha = 1
    }
  }

  useEffect(() => {
    drawFrameRef.current = drawFrame
  }, [drawFrame])

  useMotionValueEvent(frameIndexSource, "change", (latest) => {
    drawFrame(latest)
  })

  return (
    <section
      className={styles.hero_section}
      style={{ height: `${SEQUENCE_VH}vh` }}
      ref={containerRef}
    >
      <div className={styles.hero_content_wrapper}>
        <div className={styles.hero_text_scroll_layer}>
          <div className={styles.hero_text_layer}>
            <h1 className={styles.title}>Monsters of the Checkout</h1>
            <p className={styles.subtitle}>
              Four monsters haunt every transaction. One gateway ends them.
            </p>

            <div className={styles.cta_group}>
              <CommonButton
                title="Watch the Story"
                theme="blue"
                icon={
                  <Image
                    src={RightArrowFill}
                    alt="Play"
                    width={16}
                    height={16}
                    className="me-1 me-md-2"
                  />
                }
                iconPosition="start"
                className={styles.primary_cta}
                url={() => setIsVideoModalOpen(true)}
              />

              <Link
                href="#monsters-form"
                className={styles.secondary_cta}
                onClick={(e) => {
                  const target = document.getElementById("monsters-form")
                  if (target) {
                    e.preventDefault()
                    target.scrollIntoView({ behavior: "smooth" })
                    window.history.pushState(null, "", "#monsters-form")
                  }
                }}
              >
                Book your Demo
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.sequence_container}>
          <canvas
            ref={canvasRef}
            className={styles.sequence_canvas}
            aria-label="Monsters of the checkout scroll sequence"
          />
        </div>
      </div>
      <VideoModal
        open={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://youtu.be/FSY1_gFMDOM"
      />
    </section>
  )
}

export default MonstersHeroSection
