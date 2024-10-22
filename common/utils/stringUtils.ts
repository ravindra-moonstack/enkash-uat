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
    .replace(/^-+|-+$/g, ""); // Remove hyphens from the start and end
};

export const toCamelCase = (str: string): string => {
  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/[^a-zA-Z0-9]/g, "");
};

export const titleCae = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
