import { fetchAllGlossary } from "./fetchAllGlossary";

// server utility - find one term by slug
export async function fetchDetail(slug: string) {
  const all = await fetchAllGlossary();
  return (all || []).find((t: any) => t.slug === slug) || null;
}
