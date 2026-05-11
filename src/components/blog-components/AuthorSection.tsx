import React from "react"
import Image from "next/image"
import styles from "./singleBlog.module.scss"

const AuthorSection = ({ authorData }: { authorData: any }) => {
    if (!authorData || !authorData.first_name) return null;

    return (
        <section className={styles.author_section_wrapper}>
            <div className="max-w-auto">
                <div className={styles.author_card}>
                    <div className={styles.author_image_box}>
                        <Image
                            src={authorData.profile_image_url ? `${authorData.profile_image_url}` : "/uploads/2026/02/default-avatar.webp"}
                            alt={authorData.first_name}
                            width={200}
                            height={200}
                            className={styles.author_img}
                        />
                    </div>
                    <div className={styles.author_info}>
                        <h4 className={styles.author_name}>
                            {authorData.first_name} <span>{authorData.last_name}</span>
                        </h4>
                        <div className={styles.vertical_divider} />
                        <p className={styles.author_bio}>
                            {authorData.user_description || "Decades of expertise and experience, providing actionable intelligence and real-time monitoring."}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AuthorSection
