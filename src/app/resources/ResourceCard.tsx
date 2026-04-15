"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { DynamicHeading } from "@/src/components"
import styles from "./page.module.scss"

const ResourceCard = ({ post }: { post: any }) => {
    const imageSrc = post.featured_image || post.category_featured_blog || "/resources/placeholder.png"

    return (
        <Link href={`/resources/blog/${post.slug}`} className={styles.resource_card}>
            <div className={styles.image_wrapper}>
                <Image
                    src={imageSrc}
                    alt={post.title}
                    width={300}
                    height={200}
                    unoptimized
                />
            </div>
            <div className={styles.card_content}>
                <DynamicHeading
                    content={[{ title: post.title, color: "color-main-grey" }]}
                    headingTag="h3"
                    className="f-5"
                />
            </div>
        </Link>
    )
}

export const ShimmerCard = () => (
    <div className={`${styles.resource_card} ${styles.shimmer}`}>
        <div className={styles.image_wrapper}></div>

        <div className={styles.card_content}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
        </div>
    </div>
)

export default ResourceCard
