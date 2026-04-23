"use client";

import React from "react";
import Link from "next/link"; // swap for <a> if not using Next.js
import styles from "./style.module.scss";
import { BlogNavProps } from "@/types/BlogNav.types";

const BlogNav: React.FC<BlogNavProps> = ({
    data,
    activeCategory,
    onCategoryChange,
    showCategories = true,
    showDivider = true,
}) => {
    const { breadcrumbs, categories } = data;

    return (
        <div className={styles.blog_nav_wrapper}>
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
                {breadcrumbs.map((crumb, index) => {
                    const isLast = index === breadcrumbs.length - 1;
                    return (
                        <React.Fragment key={crumb.label}>
                            {isLast ? (
                                <span className={`${styles.crumb} ${styles.crumb_active}`} aria-current="page">
                                    {crumb.label}
                                </span>
                            ) : crumb.href ? (
                                <Link href={crumb.href} className={styles.crumb}>
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className={styles.crumb}>{crumb.label}</span>
                            )}
                            {!isLast && <span className={styles.separator}>|</span>}
                        </React.Fragment>
                    );
                })}
            </nav>

            {showDivider && <hr className={styles.divider} />}

            {showCategories && (
                <div className={styles.category_bar}  >
                    {categories.map((cat) => {
                        const isActive = activeCategory === cat.slug;

                        if (onCategoryChange) {
                            return (
                                <Link
                                    key={cat.id}
                                    className={[
                                        styles.category_pill,
                                        isActive ? styles.active : "",
                                    ]
                                        .filter(Boolean)
                                        .join(" ")}
                                    onClick={() => onCategoryChange(cat.slug)}
                                    href={`/resources/blog/category/${cat.slug}`}
                                >
                                    {cat.label}
                                </Link>
                            );
                        }

                        return (
                            <Link
                                key={cat.id}
                                href={`/resources/blog/category/${cat.slug}`}
                                className={[
                                    styles.category_pill,
                                    isActive ? styles.active : "",
                                ]
                                    .filter(Boolean)
                                    .join(" ")}
                                dangerouslySetInnerHTML={{ __html: cat.label }}
                            >
                                {/* {cat.label.replace(/<[^>]+>/g, "").slice(0, 120)} */}
                            </Link>
                        );
                    })}
                </div>
            )}

            {showDivider && showCategories && <hr className={styles.bottom_divider} />}
        </div>
    );
};

export default BlogNav;