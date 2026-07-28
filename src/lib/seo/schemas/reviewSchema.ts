// src/lib/seo/reviewSchema.ts

export interface ReviewSchemaProps {
  pageUrl: string;
  reviewTitle: string;
  reviewBody: string;

  authorName: string;
  authorUrl: string;

  itemName: string;
  itemUrl: string;

  ratingValue: number;
  bestRating?: number;
  worstRating?: number;

  published: string;
  modified: string;
}

export function reviewSchema({
  pageUrl,
  reviewTitle,
  reviewBody,

  authorName,
  authorUrl,

  itemName,
  itemUrl,

  ratingValue,
  bestRating = 5,
  worstRating = 1,

  published,
  modified,
}: ReviewSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "Review",

    "@id": `${pageUrl}#review`,

    name: reviewTitle,

    reviewBody,

    datePublished: published,

    dateModified: modified,

    author: {
      "@id": `${authorUrl}#person`,
    },

    itemReviewed: {
      "@type": "Thing",

      "@id": itemUrl,

      name: itemName,
    },

    reviewRating: {
      "@type": "Rating",

      ratingValue,

      bestRating,

      worstRating,
    },

    publisher: {
      "@id": "https://casinoreviewsbook.com/#organization",
    },
  };
}