import { SITE } from "@/constants";
import { MetadataRoute } from "next";

const isProduction = process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  if (!isProduction) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/login/", "/dashboard/", "/private/"],
      },
      {
        userAgent: "GPTBot",

        allow: "/",

        disallow: "/admin/",
      },
    ],

    sitemap: [
      `${SITE.url}/sitemap.xml`,
      `${SITE.url}/sitemap-news.xml`,
      `${SITE.url}/sitemap-images.xml`,
    ],

    host: `${SITE.url}`,
  };
}
