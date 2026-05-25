import React from "react"
import VideosContent from "./VideosContent"

import { getVideoCategories, getVideos } from "@/src/services/resource-service"

const VideosPage = async () => {
    const categoriesData = await getVideoCategories()
    const videosData = await getVideos({ page: 1, limit: "6" })

    return <VideosContent initialVideos={videosData} initialCategories={categoriesData} />
}

export default VideosPage