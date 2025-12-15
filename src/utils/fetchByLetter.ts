// server utility - returns array of terms for a letter
export async function fetchByLetter(letter: string) {
  const url = `https://uat.blogs.enkash.com/wp-json/custom/v1/glossary?letter=${encodeURIComponent(letter.toUpperCase())}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error("Failed to fetch glossary by letter");
  const json = await res.json();
  // API returns { status, count, data: [...] }
  return json?.data || [];
}
