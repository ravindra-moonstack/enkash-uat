"use client"

import React, { useState, useEffect } from "react"
import styles from "./customer-stories.module.scss"
import { LogoSlider } from "@/src/components"
import StoryCard from "./StoryCard"
import { IoSearchOutline } from "react-icons/io5"
import CtaSection from "@/src/components/sections/cta-section"
import { staticCaseStudies } from "../data"

const CustomerStoriesPage = () => {
    const [stories, setStories] = useState<any[]>(staticCaseStudies)
    const [selectedCategory, setSelectedCategory] = useState("all")
    const [searchQuery, setSearchQuery] = useState("")

    const categories = [
        { id: "use_case", label: "Use Case" },
        { id: "case_study", label: "Case Study" }
    ]

    useEffect(() => {
        let filtered = staticCaseStudies

        if (selectedCategory !== "all") {
            // Mapping static categories to match potential data
            const searchCat = selectedCategory === "case_study" ? "Case Studies" : "Use Case"
            filtered = filtered.filter(s => s.category === searchCat)
        }

        if (searchQuery) {
            filtered = filtered.filter(s =>
                s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                s.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
            )
        }

        setStories(filtered)
    }, [selectedCategory, searchQuery])

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
    }

    return (
        <div className={styles.customer_stories_page}>
            <div className={styles.nav_wrapper}></div>

            <section className={styles.media_banner}>
                <div className="max-w-auto">
                    <div className={styles.banner_content}>
                        <h1>{`Turning Complexity into Clarity:\nResults That Speak for Themselves`}</h1>
                        <div className={styles.banner_cta}>
                            <a href="https://www.enkash.com/contact-us" className={styles.talk_to_us_btn}>Talk to Us</a>
                        </div>
                    </div>
                </div>
                <div className={styles.logo_slider_wrapper}>
                    <LogoSlider />
                </div>
            </section>

            <section className={styles.filter_section}>
                <div className="max-w-auto">
                    <form className={styles.filter_bar} onSubmit={handleSearch}>
                        <div className={styles.select_wrapper}>
                            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
                                <option value="all">All Stories</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.label}</option>
                                ))}
                            </select>
                        </div>

                        <div className={styles.search_wrapper}>
                            <IoSearchOutline className={styles.search_icon} />
                            <input
                                type="text"
                                placeholder="Search stories..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </form>
                </div>
            </section>

            <section className={styles.grid_section}>
                <div className="max-w-auto">
                    {stories.length === 0 ? (
                        <div className="text-center py-5">
                            <h3>No stories found matching your criteria.</h3>
                        </div>
                    ) : (
                        <div className={styles.story_grid}>
                            {stories.map((story) => (
                                <StoryCard key={story.id} data={story} />
                            ))}
                        </div>
                    )}
                </div>
            </section>
            <CtaSection
                title={"Find the Right Solution for Your Use Case"}
                buttonText={"Talk to Us"}
                background="linear-gradient(180deg, #2e2e2e 0%, #010205 100%)"
            />
        </div>
    )
}

export default CustomerStoriesPage
