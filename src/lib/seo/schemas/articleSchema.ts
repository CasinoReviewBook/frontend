// src/lib/seo/articleSchema.ts

export interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  image: string;
  authorName: string;
  authorUrl: string;
  published: string;
  modified: string;
}

export function articleSchema({
  title,
  description,
  url,
  image,
  authorName,
  authorUrl,
  published,
  modified,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "Article",

    "@id": `${url}#article`,

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
  };
}