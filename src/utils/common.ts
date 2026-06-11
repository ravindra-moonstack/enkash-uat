export const getImageSrc = (post: any) => {
  if (post.featured_image_url) {
    return `/uploads/${post.featured_image_url}`
  }

  if (post.image) {
    return post.image
  }

  return "/resources/placeholder.png"
}

export const getImageUrl = (url?: string): string => {
  if (!url) return "/resources/placeholder.png"

  const trimmed = url.trim()

  // Handle HTML image tags
  if (
    trimmed.includes("<img") ||
    trimmed.includes("&lt;img") ||
    trimmed.includes("<IMG") ||
    trimmed.includes("&lt;IMG")
  ) {
    const decoded = decodeHTML(trimmed)
    const match =
      decoded.match(/src="([^"]+)"/i) || decoded.match(/src='([^']+)'/i)

    if (match) {
      return getImageUrl(match[1])
    }
  }

  // Convert WordPress upload URLs to local upload paths
  const wpUploadsMatch = trimmed.match(/\/wp-content\/uploads\/(.+)$/i)
  if (wpUploadsMatch) {
    return `/uploads/${wpUploadsMatch[1]}`
  }

  // Normalize existing upload paths
  if (trimmed.startsWith("../uploads/")) {
    return trimmed.replace("../uploads/", "/uploads/")
  }

  if (trimmed.startsWith("uploads/")) {
    return `/uploads/${trimmed.substring("uploads/".length)}`
  }

  if (trimmed.startsWith("/uploads/")) {
    return trimmed
  }

  // Keep other absolute URLs unchanged
  if (trimmed.startsWith("http://") || trimmed.startsWith("https://")) {
    return trimmed
  }

  // Keep other root-relative paths unchanged
  if (trimmed.startsWith("/")) {
    return trimmed
  }

  // Treat any remaining value as an uploads file name/path
  return `/uploads/${trimmed}`
}

export const getBlogLink = (slug?: string) => {
  if (!slug) return "#"
  const cleanSlug = slug.startsWith("/") ? slug.slice(1) : slug
  return `/resources/blog/${cleanSlug}`
}
export const decodeHTML = (str: string) => {
  if (!str) return ""
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
}

export const formatDate = (dateString: string) => {
  if (!dateString) return ""
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })
}
export function addPTags(html: string) {
  return html
    .split(/\n+/)
    .map((line) => {
      const trimmed = line.trim()

      if (!trimmed) return ""

      if (/^<[^>]+>/.test(trimmed)) {
        return trimmed
      }
      return `<p>${trimmed}</p>`
    })
    .join("")
}
