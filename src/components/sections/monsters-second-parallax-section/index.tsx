"use client"

import React, { useEffect, useRef, useState } from "react"
import {
  useScroll,
  useTransform,
  useSpring,
  useMotionValueEvent,
} from "framer-motion"
import DynamicHeading from "@/src/components/dynamic-heading"
import styles from "./monsters-second-parallax.module.scss"

// Total frame count on disk: Enkash PG Character animation web_00000.png ... 00480.png
const TOTAL_FRAMES = 481
const START_FRAME_INDEX = 91
const LAST_FRAME_INDEX = 480

const SEQUENCE_VH = 150

const LOAD_CONCURRENCY = 12
const LOAD_DELAY_MS = 200

const frameUrl = (index: number) =>
  `/images/monsters-of-checkout/second-frames/Enkash PG Character animation web_${index
    .toString()
    .padStart(5, "0")}.png`

const MonstersSecondParallaxSection = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imagesRef = useRef<HTMLImageElement[]>([])
  const maxLoadedFrameRef = useRef(START_FRAME_INDEX)
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false)

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
          img.decode().then(done).catch(done)
        } else {
          img.onload = done
          img.onerror = done
        }
      })
    }

    loadFrame(START_FRAME_INDEX).then(() => {
      if (!cancelled) {
        maxLoadedFrameRef.current = START_FRAME_INDEX
        setFirstFrameLoaded(true)
      }
    })

    const timer = setTimeout(() => {
      let nextIndex = START_FRAME_INDEX + 1

      const worker = async () => {
        while (!cancelled) {
          const index = nextIndex++
          if (index > LAST_FRAME_INDEX) return
          await loadFrame(index)
          if (cancelled) return

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

  const smoothFrameIndex = useSpring(rawFrameIndex, {
    damping: 40,
    stiffness: 320,
    mass: 0.1,
    restDelta: 0.001,
  })

  const frameIndexSource = smoothFrameIndex

  const isImageReady = (img?: HTMLImageElement) =>
    !!img && img.complete && img.naturalWidth > 0

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

  return (
    <section className={styles.second_parallax_section}>
      <div
        className={`${styles.section_content} d-flex flex-column align-items-center`}
      >
        <DynamicHeading
          content={[
            {
              title: "The EnKash Payment Gateway",
              color: "color-grey-200",
            },
          ]}
          headingTag="h2"
        />
        <p className={styles.subtitle}>
          Built for merchants that can’t afford payment failures.
        </p>
      </div>

      <div
        className={styles.sequence_container_outer}
        style={{ height: `${SEQUENCE_VH}vh` }}
        ref={containerRef}
      >
        <div className={styles.sequence_sticky_wrapper}>
          <div className={styles.sequence_container}>
            <canvas
              ref={canvasRef}
              className={styles.sequence_canvas}
              aria-label="Monsters of the checkout scroll sequence 2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MonstersSecondParallaxSection
