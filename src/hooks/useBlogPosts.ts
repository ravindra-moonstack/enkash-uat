import { useState, useEffect } from 'react'

interface BlogPost {
  ID: number
  title: string
  link: string
  featured_image: string
}

async function fetchBlogs(postIds: number[]): Promise<BlogPost[]> {
  const res = await fetch(
    "https://www.enkash.com/resources/wp-json/custom-api/v2/send-post",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ post_ids: postIds }),
    }
  ) 
  if (!res) {
    throw new Error("No response received from the API for cards.");
  }
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`)
  }

  const data = await res.json() 
  return data.posts || []
}

interface UseBlogPostsProps {
  cards?: number[]
  links?: string[]
}

export const useBlogPosts = ({ cards, links }: UseBlogPostsProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getPosts = async () => {
      setLoading(true)
      setError(null)
      try {
        if (links && links.length > 0) {
          const blogSlugs = links.join(',')
           const API_KEY = process.env.NEXT_PUBLIC_ENKASH_API_KEY || "YOUR_X_API_KEY_HERE"  
           
           const res = await fetch(
             `https://www.enkash.com/resources/wp-json/enkash/v1/blogs?posts=${blogSlugs}`,
             {
               method: "GET",
               headers: {
                 "Content-Type": "application/json",
                 "x-api-key": API_KEY,
               },
             }
           ) 
           if (!res) {
            throw new Error("No response received from the API for links.");
           }
           if (!res.ok) {
             throw new Error(`HTTP error! status: ${res.status}`)
           }
           const data = await res.json() 
           setPosts(data.data || [])
         } else if (cards && cards.length > 0) { 
           
           const fetchedPosts = await fetchBlogs(cards)
           setPosts(fetchedPosts)
         } else {
           setPosts([])
         }
      } catch (err: any) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getPosts()
  }, [cards, links])

  return { posts, loading, error }
}

