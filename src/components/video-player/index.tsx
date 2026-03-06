"use client"
import React, { useEffect, useRef } from "react"
import Image from "next/image"
import DynamicHeading from "@/components/dynamic-heading"
import styles from "./page.module.scss"
import CommonButton from "../buttons"
import { success } from "@/src/app/payment-gateway/img"

interface VideoPlayerProps {
    videoSrc: string
    ctaLabel?: string
    ctaHref?: string
    features?: string[]
    featureIcon?: React.ReactNode
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
    videoSrc,
    ctaLabel = "Request a Demo",
    ctaHref = "#",
    features = ["Zero setup fees", "Complete pricing transparency"],
    featureIcon,
}) => {
    const sectionRef = useRef<HTMLElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)

    const isYoutube =
        videoSrc.includes("youtube.com") || videoSrc.includes("youtu.be")

    const getEmbedUrl = (url: string) => {
        if (url.includes("youtu.be/")) {
            const id = url.split("youtu.be/")[1].split("?")[0]
            return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1`
        }
        if (url.includes("watch?v=")) {
            const id = new URL(url).searchParams.get("v")
            return `https://www.youtube.com/embed/${id}?autoplay=1&mute=1&loop=1&playlist=${id}&controls=1`
        }
        if (url.includes("/embed/")) {
            return url.includes("?")
                ? `${url}&autoplay=1&mute=1`
                : `${url}?autoplay=1&mute=1`
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
                    <DynamicHeading
                        content={[
                            {
                                title: "Experience Payment Gateway that ",
                                color: "color-main-black",
                            },
                            {
                                title: "truly matters",
                                color: "color-equity-blue",
                            },
                        ]}
                        headingTag="h3"
                        className="f-6"
                    />

                    <ul className={styles.featureList}>
                        {features.map((feature, i) => (
                            <li key={i} className={styles.featureItem}>
                                <div
                                    className="d-flex justify-content-center align-items-center bg-light rounded-circle"
                                    style={{ width: "32px", height: "32px" }}
                                >
                                    <Image src={success} alt="icon" />
                                </div>
                                <span className={styles.featureText}>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <CommonButton
                            title={ctaLabel}
                            url={ctaHref}
                            arrow
                            theme="outline-blue"
                            arrowType="fa"
                        />
                    </div>
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