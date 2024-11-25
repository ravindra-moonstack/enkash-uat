// app/robots.ts
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/resources/wp-admin/",
          "/resources/wp-login.php",
          "/_next/static/chunks/*",
          "/olympus/payables/pay-by-any-card-old/",
        ],
      },
    ],
    sitemap: [
      "https://enkash.com/sitemap.xml",
      "https://enkash.com/sitemap-vouchers",
    ],
  };
}
