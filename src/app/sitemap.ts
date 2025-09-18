import type { MetadataRoute } from "next";
import { moduleCatalog } from "@/data/curriculum";

const siteUrl = "https://saas-ai-architect-academy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: siteUrl,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/curriculum`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
      {
      url: `${siteUrl}/curriculum/modules`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    ...moduleCatalog.map((module) => ({
      url: `${siteUrl}/curriculum/modules/${module.code.toLowerCase()}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
