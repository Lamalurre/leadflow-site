import type { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog";

const BASE_URL = "https://sylvor.se";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE_URL}/lead-conversion-automation`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blogg`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE_URL}/integritetspolicy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/villkor`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blogg/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes];
}
