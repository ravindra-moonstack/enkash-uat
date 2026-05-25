import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";
import { ReceivablesSectionProps } from "@/types/Receivablessection";
import { getBlogLink, getImageUrl, decodeHTML, formatDate } from "@/src/utils/common";

const ReceivablesSection: React.FC<ReceivablesSectionProps> = ({
    data,
    imagePosition = "right",
}) => {

    const {
        posts = [],
        category,
        categoryLabel,
        icon,
        exploreAllLink,
        exploreAllLabel = "Explore all",
    } = data;

    const featuredArticle = posts.length > 0 ? posts[0] : null;
    const articles = posts.length > 1 ? posts.slice(1, 5) : [];


    const sectionSlug = featuredArticle?.category_slugs?.split(",")[0] || category?.toLowerCase().replace(/\s+/g, '-');
    const finalExploreLink = exploreAllLink || `/resources/blog/category/${sectionSlug}`;

    return (
        <div
            className={`${styles.category_section} ${imagePosition === "left" ? styles.left_featured : styles.right_featured
                }`}
        >
            <div className={styles.header}>
                <Image
                    src={icon?.src || "/uploads/2025/01/Group-1171275739.svg"}
                    alt={icon?.alt || "icon"}
                    width={40}
                    height={40}
                />
                <h2>{decodeHTML(categoryLabel || category)}</h2>
            </div>

            <div className={styles.wrapper}>
                {imagePosition === "left" && featuredArticle && (
                    <div className={styles.right}>
                        <div className={styles.card}>
                            <Link href={getBlogLink(featuredArticle.slug)}>
                                <Image
                                    src={getImageUrl(featuredArticle.featured_image_url)}
                                    alt={featuredArticle.image_alt || featuredArticle.title}
                                    width={400}
                                    height={220}
                                />
                            </Link>
                            <h3>
                                <Link href={getBlogLink(featuredArticle.slug)}>
                                    {featuredArticle.title}
                                </Link>
                            </h3>
                            <span className={styles.date}>{formatDate(featuredArticle.created_at)}</span>
                        </div>
                    </div>
                )}

                <div className={styles.left}>
                    <div className={styles.grid}>
                        {articles.map((article, index) => (
                            <div key={article.id || index} className={styles.item}>
                                <h3>
                                    <Link href={getBlogLink(article.slug)}>{article.title}</Link>
                                </h3>
                                <span className={styles.date}>{formatDate(article.created_at)}</span>
                            </div>
                        ))}
                    </div>

                    <Link href={finalExploreLink} className={styles.explore_btn}>
                        {exploreAllLabel}
                    </Link>
                </div>

                {imagePosition === "right" && featuredArticle && (
                    <div className={styles.right}>
                        <div className={styles.card}>
                            <Link href={getBlogLink(featuredArticle.slug)}>
                                <Image
                                    src={getImageUrl(featuredArticle.featured_image_url)}
                                    alt={featuredArticle.image_alt || featuredArticle.title}
                                    width={400}
                                    height={220}
                                />
                            </Link>
                            <h3>
                                <Link href={getBlogLink(featuredArticle.slug)}>
                                    {featuredArticle.title}
                                </Link>
                            </h3>
                            <span className={styles.date}>{formatDate(featuredArticle.created_at)}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ReceivablesSection;