"use client"

import React, { useEffect, useState } from "react"
import { useBlog, BlogPost } from "@/src/hooks/useBlog"
import Slider from "react-slick"
import styles from "./featured_top.module.scss"
import Image from "next/image"
import Link from "next/link"

export default function RecentBlogs() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const { fetchRecentBlogs, loading } = useBlog()

  useEffect(() => {
    fetchRecentBlogs().then((data) => setPosts(data))
  }, [fetchRecentBlogs])

  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
    classNames: styles.recent_track,
  }

  if (!posts.length) return null

  return (
    <div className={styles.recent_blogs_section}>
      <h3 className={styles.heading}>Recent Blogs</h3>

      <Slider {...settings}>
        {posts.map((post: any, index: number) => (
          <div className={styles.recent_blog_item} key={post.id || index}>
            <div className={styles.recent_blog_image}>
              <Link href={`/resources/blog/${post.slug}`}>
                <Image
                  src={"/uploads/" + post.featured_image_url}
                  alt={post.image_alt || post.title}
                  width={400}
                  height={220}
                  className={styles.img}
                />
              </Link>
            </div>

            <div className={styles.recent_blog_content}>
              <span className={styles.category}>
                {post.category_names?.split(",")[0]}
              </span>

              <h3 className={styles.title}>
                <Link href={`/resources/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              <span className={styles.date}>
                {new Date(post.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
