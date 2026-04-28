"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { DynamicHeading } from "@/src/components"
import styles from "./page.module.scss"
import { getImageSrc } from "@/src/utils/common"

const ResourceCard = ({ post, onClick }: { post: any; onClick?: (post: any) => void }) => {
    const imageSrc = getImageSrc(post)

    const CardContent = (
        <>
            <div className={styles.image_wrapper}>
                <Image
                    src={imageSrc}
                    alt={post.featured_image_alt || post.title}
                    width={300}
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
        </>
    )
    console.log("onClick", onClick);

    if (onClick) {
        return (
            <div className={styles.resource_card} onClick={() => onClick(post)} style={{ cursor: 'pointer' }}>
                {CardContent}
            </div>
        )
    }

    return (
        <Link href={`/resources/blog/${post.slug}`} className={styles.resource_card}>
            {CardContent}
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
