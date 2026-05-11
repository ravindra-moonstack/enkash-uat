"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./customer-stories.module.scss"

interface StoryCardProps {
    data: {
        id: number
        title: string
        slug: string
        category: string
        image: string
        excerpt?: string
    }
}

const StoryCard: React.FC<StoryCardProps> = ({ data }) => {
    const { title, slug, image } = data

    return (
        <Link href={`/resources/customer-stories/${slug}`} className={styles.story_card}>
            <div className={styles.thumbnail_wrapper}>
                <Image
                    src={image}
                    alt={title}
                    width={400}
                    height={240}
                />
            </div>
            <div className={styles.card_content}>
                <h3>{title}</h3>
            </div>
        </Link>
    )
}

export default StoryCard
