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

const TOTAL_FRAMES = 149

const SEQUENCE_VH = 500

const MonstersHeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    let cancelled = false
    const images: HTMLImageElement[] = []

    // Load first frame immediately for initial render
    const firstImg = new Image()
    firstImg.onload = () => {
      if (!cancelled) setFirstFrameLoaded(true)
    }
    firstImg.src = `/images/monsters-of-checkout/desktop/WebPage_scroll_animation_00000.png`
    images[0] = firstImg

    // Delay loading the rest of the sequence to unblock critical page assets
    const timer = setTimeout(() => {
      for (let i = 1; i <= TOTAL_FRAMES; i++) {
        if (cancelled) break;
        const img = new Image()
        const frameNumber = i.toString().padStart(3, "0")
        img.src = `/images/monsters-of-checkout/desktop/WebPage_scroll_animation_00${frameNumber}.png`
        images[i] = img
      }
    }, 1500)

    imagesRef.current = images

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
    [0, TOTAL_FRAMES - 1]
  )

  const smoothFrameIndex = useSpring(rawFrameIndex, {
    damping: 30,
    stiffness: 90,
    mass: 0.5,
    restDelta: 0.0005,
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
    const firstFrame = imagesRef.current[0]

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

    const clamped = Math.max(0, Math.min(TOTAL_FRAMES - 1, progress))
    const lowerIndex = Math.floor(clamped)
    const upperIndex = Math.min(TOTAL_FRAMES - 1, lowerIndex + 1)
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

              <Link href="/sales" className={styles.secondary_cta}>
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
