// server utility - returns the full API response (json.data)
export async function fetchAllGlossary() {
  const url = "https://uat.blogs.enkash.com/wp-json/custom/v1/glossary-all";
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch glossary-all");
  const json = await res.json();
  // Expected shape: { status, count, data: [...] }
  return json?.data || [];
}
 