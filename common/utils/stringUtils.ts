// utils/stringUtils.ts

/**
 * Converts a name to a URL-friendly string by removing spaces and converting to lowercase.
 */
export const nameToUrl = (name: string): string => {
    return name.trim().toLowerCase().replace(/\s+/g, '-');
};