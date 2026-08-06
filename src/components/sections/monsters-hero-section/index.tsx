"use client"

import React, { useEffect, useRef, useState } from "react"
import Link from "next/link"
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
  Variants,
} from "framer-motion"
import CommonButton from "../../buttons"
import styles from "./monsters-hero.module.scss"

// Total frame count on disk: WebPage_scroll_animation_00000.png ... 00149.png
const TOTAL_FRAMES = 150
const START_FRAME_INDEX = 12
const LAST_FRAME_INDEX = 100

const SEQUENCE_VH = 350

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
  // Highest frame index that is loaded *and* decoded, contiguously from 0.
  // Used to clamp playback so we never try to draw a frame that isn't ready.
  const maxLoadedFrameRef = useRef(START_FRAME_INDEX)
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    let cancelled = false
    const images: HTMLImageElement[] = []
    imagesRef.current = images

    const loadFrame = (index: number): Promise<void> => {
      return new Promise((resolve) => {
        const img = new Image()
        img.src = frameUrl(index)
        images[index] = img

        const done = () => resolve()

        // decode() confirms the frame is actually paintable, not just
        // downloaded — avoids a flash/stutter on the first draw of a
        // freshly-arrived frame.
        if (typeof img.decode === "function") {
          img.decode().then(done).catch(done)
        } else {
          img.onload = done
          img.onerror = done
        }
      })
    }

    // Frame 0 loads on its own, immediately, so the canvas has something to
    // paint before the rest of the sequence arrives.
    loadFrame(START_FRAME_INDEX).then(() => {
      if (!cancelled) {
        maxLoadedFrameRef.current = START_FRAME_INDEX
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
          // Only advance the "max loaded" watermark contiguously — if frame
          // 7 loads before frame 5 (workers can finish out of order), we
          // still only allow playback up to whatever's loaded without gaps.
          while (
            maxLoadedFrameRef.current + 1 <= LAST_FRAME_INDEX &&
            images[maxLoadedFrameRef.current + 1]
          ) {
            maxLoadedFrameRef.current += 1
          }
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

  const frameIndexSource = prefersReducedMotion
    ? rawFrameIndex
    : smoothFrameIndex

  const textOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const textY = useTransform(scrollYProgress, [0, 0.15], [0, -24])
  const canvasScale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, prefersReducedMotion ? 1 : 1.05]),
    { damping: 30, stiffness: 90 }
  )

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

    // Clamp to whatever has actually finished loading so scrubbing ahead of
    // the network never skips to an unready frame — it holds on the last
    // good one and catches up smoothly once more frames land.
    const clamped = Math.max(
      START_FRAME_INDEX,
      Math.min(maxLoadedFrameRef.current, progress)
    )
    const lowerIndex = Math.floor(clamped)
    const upperIndex = Math.min(maxLoadedFrameRef.current, lowerIndex + 1)
    const blend = clamped - lowerIndex

    const lowerFrame = imagesRef.current[lowerIndex]
    const upperFrame = imagesRef.current[upperIndex]

    context.clearRect(0, 0, canvas.width, canvas.height)

    if (isImageReady(lowerFrame)) {
      context.globalAlpha = 1
      context.drawImage(lowerFrame, 0, 0, canvas.width, canvas.height)
    }

    if (blend > 0.001 && isImageReady(upperFrame)) {
      context.globalAlpha = blend
      context.drawImage(upperFrame, 0, 0, canvas.width, canvas.height)
      context.globalAlpha = 1
    }
  }

  useMotionValueEvent(frameIndexSource, "change", (latest) => {
    drawFrame(latest)
  })
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  }

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section
      className={styles.hero_section}
      style={{ height: `${SEQUENCE_VH}vh` }}
      ref={containerRef}
    >
      <div className={styles.hero_content_wrapper}>
        <motion.div
          className={styles.hero_text_scroll_layer}
          style={
            prefersReducedMotion
              ? undefined
              : { opacity: textOpacity, y: textY }
          }
        >
          <motion.div
            className={styles.hero_text_layer}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={itemVariants} className={styles.title}>
              Monsters of the Checkout
            </motion.h1>
            <motion.p variants={itemVariants} className={styles.subtitle}>
              Four monsters haunt every transaction. One gateway ends them.
            </motion.p>

            <motion.div variants={itemVariants} className={styles.cta_group}>
              <CommonButton
                title="Watch the Story"
                theme="blue"
                icon={<span style={{ marginRight: "8px" }}>▶</span>}
                iconPosition="start"
                className={styles.primary_cta}
              />

              <Link href="#monsters-form" className={styles.secondary_cta}>
                Book your Demo
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className={styles.sequence_container}>
          <motion.canvas
            ref={canvasRef}
            className={styles.sequence_canvas}
            aria-label="Monsters of the checkout scroll sequence"
            style={prefersReducedMotion ? undefined : { scale: canvasScale }}
          />
        </div>
      </div>
    </section>
  )
}

export default MonstersHeroSection
