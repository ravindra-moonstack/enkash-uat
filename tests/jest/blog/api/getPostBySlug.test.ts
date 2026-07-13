import { GET } from "@/src/app/api/resources/blogs/getPostBySlug/route"
import pool from "@/src/lib/dbConnect"
import { cookies } from "next/headers"

jest.mock("@/src/lib/dbConnect", () => ({
  __esModule: true,
  default: {
    query: jest.fn(),
  },
}))

jest.mock("next/headers", () => ({
  cookies: jest.fn(),
}))

describe("getPostBySlug API", () => {
  let mockRequest: Request;

  beforeEach(() => {
    jest.clearAllMocks()
    mockRequest = new Request("http://localhost/api/resources/blogs/getPostBySlug?slug=test-post")
  })

  it("should return 404 if post is not found and no slug history exists", async () => {
    (cookies as jest.Mock).mockResolvedValue({
      has: jest.fn().mockReturnValue(false),
    });
    
    // First query for post, second for slug history
    (pool.query as jest.Mock)
      .mockResolvedValueOnce([[]])
      .mockResolvedValueOnce([[]]);

    const response = await GET(mockRequest)
    const data = await response.json()

    expect(response.status).toBe(404)
    expect(data.posts).toEqual([])
  })

  it("should redirect if slug history is found", async () => {
    (cookies as jest.Mock).mockResolvedValue({
      has: jest.fn().mockReturnValue(false),
    });
    
    (pool.query as jest.Mock)
      .mockResolvedValueOnce([[]])
      .mockResolvedValueOnce([[{ slug: 'new-slug-url' }]]);

    const response = await GET(mockRequest)
    const data = await response.json()

    expect(response.status).toBe(200) // The API currently returns 200 with JSON { redirect: ... }
    expect(data.redirect).toBe("new-slug-url")
  })

  it("should return a published post and fetch related posts by tag", async () => {
    (cookies as jest.Mock).mockResolvedValue({
      has: jest.fn().mockReturnValue(false),
    });

    const mockPost = {
      id: 1,
      title: "Test Post",
      slug: "test-post",
      category: "1,2",
      tags: "tag1,tag2",
    };

    const mockRelatedPost = {
      id: 2,
      title: "Related Post",
      slug: "related-post",
    };

    (pool.query as jest.Mock)
      .mockResolvedValueOnce([[mockPost]]) // Post query
      .mockResolvedValueOnce([[mockRelatedPost]]); // Related by tags query (returns < 4, so it might fetch categories next)

    // Actually, if it returns 1 related by tag, it will fetch remaining by category
    (pool.query as jest.Mock).mockResolvedValueOnce([[{ id: 3, title: "Cat Post", slug: "cat-post" }]]);

    const response = await GET(mockRequest)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data.posts[0].title).toBe("Test Post")
    expect(data.relatedBlogs.length).toBe(2)
    expect(pool.query).toHaveBeenCalledTimes(3)
  })

  it("should apply admin status condition if token cookie is present", async () => {
    (cookies as jest.Mock).mockResolvedValue({
      has: jest.fn().mockReturnValue(true),
    });

    (pool.query as jest.Mock).mockResolvedValue([[]]); // Just to let it run

    await GET(mockRequest)

    const queryArg = (pool.query as jest.Mock).mock.calls[0][0];
    expect(queryArg).toContain("p.status IN ('publish', 'draft')");
  })
})
