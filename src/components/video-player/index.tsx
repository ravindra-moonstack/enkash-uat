"use client"
import React, { useEffect, useRef, useState } from "react"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "./page.module.scss"
import CommonButton from "../buttons"
import Image from "next/image"

type HeadingSegment = {
    title?: string
    text?: string
    color?: string
}

interface VideoPlayerProps {
    videoSrc: string
    ctaLabel?: string
    ctaHref?: string
    features?: string[]
    featureIcon?: React.ReactNode
    heading?: HeadingSegment[]
    subHeadings?: HeadingSegment[][]
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    videoSrc,
    ctaLabel,
    ctaHref,
    heading = [
        { title: "Experience ", color: "color-main-black" },
        { title: "truly matters", color: "color-equity-blue" },
    ],
    subHeadings = [
        [{ title: "Petty cash from 50 locations.", color: "color-black" }],
        [{ title: "50 different spreadsheets.", color: "color-black" }],
        [{ title: "Sound familiar?", color: "color-black" }],
    ],
}) => {
    const [isPlaying, setIsPlaying] = useState(false)
    const sectionRef = useRef<HTMLElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    const getYouTubeId = (url: string) => {
        let videoId = ""
        if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
        } else if (url.includes("watch?v=")) {
            videoId = new URL(url).searchParams.get("v") || ""
        } else if (url.includes("/embed/")) {
            videoId = url.split("embed/")[1]?.split("?")[0] || ""
        }
        return videoId
    }

    const isYoutube =
        videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be")

    const getEmbedUrl = (url: string) => {
        let videoId = ""
        if (url.includes("youtu.be/")) {
            videoId = url.split("youtu.be/")[1]?.split("?")[0] || ""
        } else if (url.includes("watch?v=")) {
            videoId = new URL(url).searchParams.get("v") || ""
        } else if (url.includes("/embed/")) {
            videoId = url.split("embed/")[1]?.split("?")[0] || ""
        } else {
            return url
        }

        if (!videoId) return url

        return `https://www.youtube.com/embed/${videoId}?rel=0`
    }

    // Auto-play native video on intersection
    useEffect(() => {
        if (isYoutube || !videoRef.current) return

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current?.play()
                } else {
                    videoRef.current?.pause()
                }
            },
            { threshold: 0.5 }
        )

        observer.observe(sectionRef.current!)
        return () => observer.disconnect()
    }, [isYoutube])

    return (
        <section ref={sectionRef} className={styles.section}>
            <div className={`${styles.card} max-w-auto`}>
                <div className={styles.leftCol}>

                    <div className="d-flex flex-column gap-3">
                        <div className="mb-2">
                            <DynamicHeading
                                content={[
                                    {
                                        title: "Watch video ",
                                        color: "color-equity-blue underline",
                                    },
                                ]}
                                headingTag="p"
                                className="mb-0"
                            />
                        </div>
                        {subHeadings.map((sub, index) => (
                            <DynamicHeading
                                key={index}
                                content={sub}
                                headingTag="p"
                                className="f-5 m-0"
                            />
                        ))}
                        <DynamicHeading
                            content={heading}
                            headingTag="h4"
                            className="f-5"
                        />
                    </div>

                    {ctaLabel && <div className="mt-4">
                        <CommonButton
                            title={ctaLabel}
                            url={ctaHref}
                            arrow
                            theme="outline-blue"
                            arrowType="fa"
                        />
                    </div>}
                </div>

                <div className={styles.rightCol}>
                    <div className={styles.videoWrapper}>
                        {isYoutube ? (
                            isPlaying ? (
                                <iframe
                                    src={`${getEmbedUrl(videoSrc)}&autoplay=1`}
                                    title="Payment Gateway Video"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowFullScreen
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className={styles.iframe}
                                />
                            ) : (
                                <div className={styles.videoPreview} onClick={() => setIsPlaying(true)}>
                                    <Image
                                        src={`https://img.youtube.com/vi/${getYouTubeId(videoSrc)}/maxresdefault.jpg`}
                                        alt="Video preview"
                                        fill
                                        style={{ objectFit: "cover" }}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                    <div className={styles.playButton}>
                                        <svg viewBox="0 0 68 48" width="68" height="48">
                                            <path className={styles.playButtonBg} d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,0,34,0,34,0S12.21,0,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0,13.05,0,24,0,24s0,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19C12.21,48,34,48,34,48 s21.79,0,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C68,34.95,68,24,68,24S68,13.05,66.52,7.74z" fill="#f00"></path>
                                            <path d="M 45 24 L 27 14 L 27 34" fill="#fff"></path>
                                        </svg>
                                    </div>
                                </div>
                            )
                        ) : (
                            <video
                                ref={videoRef}
                                src={videoSrc}
                                className={styles.video}
                                muted
                                loop
                                playsInline
                            />
                        )}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default VideoPlayer  