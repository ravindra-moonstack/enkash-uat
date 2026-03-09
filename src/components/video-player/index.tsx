"use client"
import React, { useEffect, useRef } from "react"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "./page.module.scss"
import CommonButton from "../buttons"

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
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    videoSrc,
    ctaLabel,
    ctaHref,
    heading = [
        { title: "Experience ", color: "color-main-black" },
        { title: "truly matters", color: "color-equity-blue" },
    ],
}) => {
    const sectionRef = useRef<HTMLElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    const isYoutube =
        videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be")

    const getEmbedUrl = (url: string) => {
        if (url.includes("youtu.be/")) {
            const id = url.split("youtu.be/")[1].split("?")[0]
            return `https://www.youtube.com/embed/${id}?rel=0`
        }
        if (url.includes("watch?v=")) {
            const id = new URL(url).searchParams.get("v")
            return `https://www.youtube.com/embed/${id}?rel=0`
        }
        if (url.includes("/embed/")) {
            return url.includes("?")
                ? `${url}&rel=0`
                : `${url}?rel=0`
        }
        return url
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
                        <DynamicHeading
                            content={[{ title: "Petty cash from 50 locations.", color: "color-black" }]}
                            headingTag="p"
                            className="f-5 m-0"
                        />
                        <DynamicHeading
                            content={[{ title: "50 different spreadsheets.", color: "color-black" }]}
                            headingTag="p"
                            className="f-5 m-0"
                        />
                        <DynamicHeading
                            content={[{ title: "Sound familiar?", color: "color-black" }]}
                            headingTag="p"
                            className="f-5 m-0"
                        />
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
                            <iframe
                                src={getEmbedUrl(videoSrc)}
                                title="Payment Gateway Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className={styles.iframe}
                            />
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