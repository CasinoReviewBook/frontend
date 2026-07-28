// src/lib/seo/aggregateRatingSchema.ts

export interface AggregateRatingSchemaProps {
  itemName: string;
  itemUrl: string;

  ratingValue: number;

  reviewCount: number;

  bestRating?: number;

  worstRating?: number;
}

export function aggregateRatingSchema({
  itemName,
  itemUrl,

  ratingValue,

  reviewCount,

  bestRating = 5,

  worstRating = 1,
}: AggregateRatingSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "AggregateRating",

    "@id": `${itemUrl}#aggregaterating`,

    itemReviewed: {
      "@type": "Thing",

      "@id": itemUrl,

      name: itemName,
    },

    ratingValue,

    reviewCount,

    bestRating,

    worstRating,
  };
}