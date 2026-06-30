"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./videos.module.scss"
import { IoPlaySharp } from "react-icons/io5"
import { getImageUrl } from "@/src/utils/common"
import CommonButton from "@/src/components/buttons"

interface VideoCardProps {
  data: any
  onPlay?: (url: string) => void
}

const VideoCard: React.FC<VideoCardProps> = ({ data, onPlay }) => {
  const {
    title,
    featured_image_url,
    featured_image_alt,
    video_url,
    category_name,
    external_embed_frame,
  } = data
  const videoSource = external_embed_frame || video_url

  return (
    <div className={styles.video_card}>
      <div
        className={styles.thumbnail_wrapper}
        onClick={() => onPlay?.(videoSource)}
      >
        <Image
          src={
            getImageUrl(featured_image_url) ||
            "/uploads/2026/01/placeholder.png"
          }
          alt={featured_image_alt || title}
          width={400}
          height={240}
        />
        <div className={styles.thumbnail_overlay}>
          <div className={styles.play_btn}>
            <IoPlaySharp />
          </div>
        </div>
      </div>
      <div className={styles.card_content}>
        <div className={styles.card_content_top}>
          <a
            className={styles.tag}
            href={`/resources/video-category/${category_name}`}
          >
            {category_name}
          </a>
          <h3>{title}</h3>
        </div>
        <CommonButton
          title="Watch Now"
          theme="small-blue"
          url={() => onPlay?.(videoSource)}
        />
      </div>
    </div>
  )
}

export default VideoCard
