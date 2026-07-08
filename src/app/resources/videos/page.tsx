import React from "react"
import { Metadata } from "next"
import VideosContent from "./VideosContent"

import { getVideoCategories, getVideos } from "@/src/services/resource-service"

export const metadata: Metadata = {
    title: "EnKash Videos | Product Demos",
    description: "Watch EnKash videos featuring product demos, webinars, customer stories, expert insights, and the latest trends in payments, expense management, and business finance.",
}

const VideosPage = async () => {
    const categoriesData = await getVideoCategories()
    const videosData = await getVideos({ page: 1, limit: "6" })

    return <VideosContent initialVideos={videosData} initialCategories={categoriesData} />
}

export default VideosPage