// src/lib/seo/webpageSchema.ts
import { SITE } from "@/constants";

export interface WebPageSchemaProps {
  url: string;
  title: string;
  description: string;
  image?: string;
  datePublished?: string;
  dateModified?: string;
  language?: string;
}



export function webpageSchema({
  url,
  title,
  description,
  image,
  datePublished,
  dateModified,
  language = "en-US",
}: WebPageSchemaProps) {
  return {
    "@context": "https://schema.org",

    "@type": "WebPage",

    "@id": `${url}#webpage`,

    url,
    name: title,
    headline: title,
    description,
    inLanguage: language,

    isPartOf: {
      "@id": `${SITE.url}/#website`,
    },

    about: {
      "@id": `${SITE.url}/#organization`,
    },

    publisher: {
      "@id": `${SITE.url}/#organization`,
    },

    primaryImageOfPage: {
      "@type": "ImageObject",
      "@id": `${url}#primaryimage`,
      url: image,
    },

    image: {
      "@id": `${url}#primaryimage`,
    },

    breadcrumb: {
      "@id": `${url}#breadcrumb`,
    },

    potentialAction: {
      "@type": "ReadAction",
      target: [url],
    },

    ...(datePublished && {
      datePublished,
    }),

    ...(dateModified && {
      dateModified,
    }),
  };
}