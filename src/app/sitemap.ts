import type { MetadataRoute } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url;

  const sections = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "#about", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "#services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "#showcase", priority: 0.8, changeFrequency: "weekly" as const },
    { path: "#corporate", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "#product-launch", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "#movies", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "#outings", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "#gallery", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "#testimonials", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "#contact", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return sections.map((section) => ({
    url: `${baseUrl}${section.path}`,
    lastModified: new Date(),
    changeFrequency: section.changeFrequency,
    priority: section.priority,
  }));
}
