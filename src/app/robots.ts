import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  const isUat = process.env.NEXT_PUBLIC_URL?.includes("uat")

  if (isUat) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    }
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/resources/wp-admin/",
        "/resources/wp-login.php",
        "/cdn-cgi/l/email-protection",
        "/admin",
        "/thank-you",
        "/campaigns/enterprise-bill-payments",
      ],
    },
    sitemap: "https://www.enkash.com/sitemap.xml",
  }
}
