"use client"
import React from "react"
import styles from "./singleBlog.module.scss"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const SocialShare = ({ slug, title }: { slug: string; title: string }) => {
  const url = `https://www.enkash.com/resources/blog/${slug}`

  const shareLinks = [
    {
      icon: <FaFacebookF />,
      link: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      label: "Facebook",
    },
    {
      icon: <FaXTwitter />,
      link: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
      label: "X",
    },
    {
      icon: <FaLinkedinIn />,
      link: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
      label: "LinkedIn",
    },
    {
      icon: <FaInstagram />,
      link: `https://www.instagram.com/?url=${encodeURIComponent(url)}`,
      label: "Instagram",
    },
  ]

  return (
    <div className={styles.social_share_section}>
      <p className={styles.share_title}>DON'T FORGET TO SHARE THIS POST</p>
      <div className={styles.share_container}>
        {shareLinks.map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.share_icon}
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialShare
