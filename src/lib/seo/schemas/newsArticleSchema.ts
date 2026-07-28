// src/lib/seo/newsArticleSchema.ts

export interface NewsArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  authorName: string;
  authorUrl: string;
  published: string;
  modified: string;
}

export function newsArticleSchema({
  title,
  description,
  url,
  image,
  authorName,
  authorUrl,
  published,
  modified,
}: NewsArticleSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "NewsArticle",

    "@id": `${url}#newsarticle`,

    headline: title,

    description,

    url,

    mainEntityOfPage: {
      "@id": `${url}#webpage`,
    },

    image: {
      "@id": `${url}#primaryimage`,
    },

    author: {
      "@id": `${authorUrl}#person`,
    },

    publisher: {
      "@id": "https://casinoreviewsbook.com/#organization",
    },

    datePublished: published,

    dateModified: modified,

    isAccessibleForFree: true,
  };
}