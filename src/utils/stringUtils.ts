// utils/stringUtils.ts

/**
 * Converts a name to a URL-friendly string by removing spaces and converting to lowercase.
 */
export const nameToUrl = (name: string): string => {
  return name
    .trim() // Remove leading/trailing spaces
    .toLowerCase() // Convert to lowercase
    .normalize("NFD") // Normalize accented characters to their ASCII equivalent
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics (marks from letters)
    .replace(/&/g, "and") // Replace & with 'and'
    .replace(/['’]/g, "") // Remove apostrophes (both ' and ’)
    .replace(/[^a-z0-9\-]+/g, "-") // Replace non-alphanumeric characters with hyphens
    .replace(/-{2,}/g, "-") // Replace multiple consecutive hyphens with a single one
    .replace(/^-+|-+$/g, "") // Remove hyphens from the start and end
}

export const titleCae = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase())
}

export const linkifyText = (text: string): string => {
  const urlRegex =
    /(?:https?:\/\/)?(?:www\.)?[a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/\S*)?/g

  return text.replace(urlRegex, (url) => {
    // Check if the URL has a protocol, if not, prepend it with http://
    if (!url.match(/^https?:\/\//i)) {
      url = "http://" + url
    }
    return `<a href="${url}" target="_blank">${url}</a>`
  })
}
