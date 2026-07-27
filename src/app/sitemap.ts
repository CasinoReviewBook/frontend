import type { MetadataRoute } from "next";

import { SITE } from "@/constants";

import { getAllNews, getAllCasinos } from "@/lib/seo/seoApi";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: SITE.url,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${SITE.url}/news`,
      lastModified: now,
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/casinos`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/bonuses`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE.url}/guides`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE.url}/about-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/contact-us`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${SITE.url}/responsible-gambling`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  /*
  |--------------------------------------------------------------------------
  | Dynamic Casino Pages
  |--------------------------------------------------------------------------
  */

  const [news, casinos] = await Promise.all([getAllNews(), getAllCasinos()]);

  const newsUrls: MetadataRoute.Sitemap = news.map((item: any) => ({
    url: `${SITE.url}/news/${item.slug}`,
    lastModified: new Date(item.updated_at ?? item.created_at),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  const casinoUrls: MetadataRoute.Sitemap = casinos.map((item: any) => ({
    url: `${SITE.url}/casino/${item.slug}`,
    lastModified: new Date(item.updated_at ?? item.created_at),
    changeFrequency: "daily",
    priority: 0.9,
  }));

  return [...staticPages, ...newsUrls, ...casinoUrls];
}
