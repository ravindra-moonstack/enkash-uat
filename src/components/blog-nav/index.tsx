"use client";
import React from "react";
import Link from "next/link";
import styles from "./style.module.scss";
import { BlogNavProps } from "@/src/types/BlogNav.types";
import { FiSearch } from "react-icons/fi";

const BlogNav: React.FC<BlogNavProps> = ({
    data,
    activeCategory,
    onCategoryChange,
    onSearch,
    initialSearchQuery = "",
    showCategories = true,
    showSearch = true,
    showDivider = true,
}) => {
    const { breadcrumbs, categories } = data;
    const [searchQuery, setSearchQuery] = React.useState(initialSearchQuery);

    React.useEffect(() => {
        setSearchQuery(initialSearchQuery);
    }, [initialSearchQuery]);

    const handleSearchEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSearch?.(searchQuery);
        }
    };

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
                    {categories?.map((cat) => {
                        const isActive = activeCategory === cat.slug;

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
                                onClick={() => onCategoryChange?.(cat.slug)}
                            />
                        );
                    })}

                    {showSearch && (
                        <div className={styles.search_box}>
                            <FiSearch className={styles.search_icon} onClick={() => onSearch?.(searchQuery)} />
                            <input
                                type="text"
                                placeholder="Search topic"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onKeyDown={handleSearchEnter}
                                onBlur={() => onSearch?.(searchQuery)}
                            />
                        </div>
                    )}
                </div>
            )}
            {showDivider && showCategories && <hr className={styles.bottom_divider} />}
        </div>
    );
};

export default BlogNav;