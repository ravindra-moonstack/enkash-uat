// generateVideoSchema.ts
export const generateYouTubeVideoSchema = ({
  videoUrl,
  title,
  description,
  uploadDate, // optional: YYYY-MM-DD
  thumbnailUrl,
  duration, // optional: ISO 8601 format, e.g., "PT2M15S"
}: {
  videoUrl: string // full YouTube URL like https://www.youtube.com/watch?v=abc123 or https://youtu.be/abc123
  title: string
  description: string
  uploadDate?: string
  thumbnailUrl?: string
  duration?: string
}) => {
  // Extract video ID from various YouTube URL formats
  const getYouTubeId = (url: string): string | null => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : null
  }

  const videoId = getYouTubeId(videoUrl)
  if (!videoId) throw new Error("Invalid YouTube URL")

  const embedUrl = `https://www.youtube.com/embed/${videoId}`
  const watchUrl = `https://www.youtube.com/watch?v=${videoId}`
  const defaultThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`

  return {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: title,
    description: description,
    thumbnailUrl: [thumbnailUrl || defaultThumbnail],
    uploadDate: uploadDate || new Date().toISOString().split("T")[0],
    duration: duration || undefined,
    embedUrl,
    contentUrl: watchUrl,
    publisher: {
      "@type": "Organization",
      name: "EnKash",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.URL}/logo.png`, // your company logo
        width: "600",
        height: "60",
      },
    },
    interactionStatistic: {
      "@type": "InteractionCounter",
      interactionType: { "@type": "WatchAction" },
      userInteractionCount: 0, // YouTube doesn't expose this publicly
    },
  }
}
