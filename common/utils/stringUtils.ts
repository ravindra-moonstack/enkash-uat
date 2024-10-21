// utils/stringUtils.ts

/**
 * Converts a name to a URL-friendly string by removing spaces and converting to lowercase.
 */
export const nameToUrl = (name: string): string => {
  return name.trim().toLowerCase().replace(/\s+/g, "-");
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
