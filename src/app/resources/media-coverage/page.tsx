import React from "react"
import { Metadata } from "next"
import MediaCoverageContent from "./MediaCoverageContent"

export const metadata: Metadata = {
    title: "EnKash Media Coverage | Latest News, Press Releases",
    description: "Explore EnKash's latest media coverage, press releases, industry announcements, partnerships, and business milestones shaping the future of payments and spend management.",
}

const MediaCoveragePage = () => {
    return <MediaCoverageContent />
}

export default MediaCoveragePage
