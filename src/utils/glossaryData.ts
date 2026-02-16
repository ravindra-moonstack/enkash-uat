import { getGlossaryJson } from "@/src/lib/glossaryUtils";

export async function fetchAllLetters(): Promise<string[]> {
  const terms = await getGlossaryJson();
  const letters = new Set<string>(terms.map((term: any) => term.word.charAt(0).toLowerCase()));
  return Array.from(letters).sort();
}

export async function generateTermParams(): Promise<{letter: string, slug: string}[]> {
  const terms = await getGlossaryJson();
  return terms.map((term: any) => ({
    letter: term.word.charAt(0).toLowerCase(),
    slug: term.slug
  }));
}
