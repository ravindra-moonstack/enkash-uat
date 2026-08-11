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
import VideoModal from "@/src/components/vedio-modal"

const featuresList = [
  {
    title: "Reliable under pressure",
    description: "Infrastructure built for real payment moments.",
  },
  {
    title: "Developer-grade technology",
    description: "Clean APIs, realistic testing and useful error codes.",
  },
  {
    title: "Human support when it matters",
    description: "Real people who understand your payment context.",
  },
  {
    title: "Built for serious growth",
    description: "Industry-native payment journeys that scale",
  },
]

// Total frame count on disk: Enkash PG Character animation web_00000.png ... 00480.png
const TOTAL_FRAMES = 481
const START_FRAME_INDEX = 91
const LAST_FRAME_INDEX = 480

const SEQUENCE_VH = 250

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
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const drawFrameRef = useRef<((progress: number) => void) | null>(null)
  const frameIndexSourceRef = useRef<any>(null)
  const [firstFrameLoaded, setFirstFrameLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

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

    loadFrame(START_FRAME_INDEX).then(() => {
      if (!cancelled) {
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
    offset: isMobile ? ["start 80%", "end end"] : ["start start", "end end"],
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

  useEffect(() => {
    frameIndexSourceRef.current = frameIndexSource
  }, [frameIndexSource])

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
      Math.min(LAST_FRAME_INDEX, progress)
    )

    let lowerIndex = Math.floor(clamped)

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
    <section className={styles.second_parallax_section}>
      <div
        className={`${styles.section_content} d-flex flex-column align-items-center max-w-auto`}
      >
        <div className={styles.section_content_box}>
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

          <button
            className={styles.watch_cta}
            onClick={() => setIsVideoModalOpen(true)}
          >
            Watch EnKash in Action
          </button>
        </div>

        <div className="row justify-content-center mb-5 w-100 mt-5">
          {featuresList.map((feature, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-3 mb-3 mb-md-0">
              <div className={styles.feature_item}>
                <div className={styles.feature_line}></div>
                <div className={styles.feature_content}>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
      <VideoModal
        open={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://youtu.be/kSMOmjrhpoY"
      />
    </section>
  )
}

export default MonstersSecondParallaxSection
