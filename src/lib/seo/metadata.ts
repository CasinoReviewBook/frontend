// import type { Metadata } from "next";

// const SITE_NAME = "Casino Review Book";
// const SITE_URL = "https://casinoreviewsbook.com";

// type SEOProps = {
//   title: string;
//   description: string;
//   path?: string;
//   image?: string;
//   noIndex?: boolean;
// };

// export function generateSEO({
//   title,
//   description,
//   path = "",
//   image = "/og-image.jpg",
//   noIndex = false,
// }: SEOProps): Metadata {
//   const url = `${SITE_URL}${path}`;

//   return {
//     title,
//     description,

//     metadataBase: new URL(SITE_URL),

//     alternates: {
//       canonical: url,
//     },

//     robots: {
//       index: !noIndex,
//       follow: !noIndex,
//       googleBot: {
//         index: !noIndex,
//         follow: !noIndex,
//         "max-image-preview": "large",
//         "max-snippet": -1,
//         "max-video-preview": -1,
//       },
//     },

//     openGraph: {
//       title,
//       description,
//       url,
//       siteName: SITE_NAME,
//       locale: "en_US",
//       type: "website",
//       images: [
//         {
//           url: image,
//           width: 1200,
//           height: 630,
//           alt: title,
//         },
//       ],
//     },

//     twitter: {
//       card: "summary_large_image",
//       title,
//       description,
//       images: [image],
//     },
//   };
// }

import { SITE } from "@/constants";
import type { Metadata } from "next";

export interface SEOProps {
  title: string;

  description: string;

  path?: string;

  image?: string;

  keywords?: string[];

  noIndex?: boolean;
}

export function generateSEO({
  title,
  description,
  path = "",
  image = "/icons/og-image.png",
  keywords = [],
  noIndex = false,
}: SEOProps): Metadata {
  const url = `${SITE.url}${path}`;
  const ogImage = image || SITE.ogImage || "/icons/og-image.png";

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(SITE.url),
    applicationName: SITE.name,
    category: "Casino",
    referrer: "origin-when-cross-origin",
    authors: [{ name: SITE.author || SITE.name }],
    creator: SITE.author || SITE.name,
    publisher: SITE.publisher || SITE.name,

    alternates: {
      canonical: url,
    },

    robots: {
      index: !noIndex,

      follow: !noIndex,

      nocache: false,

      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-image-preview": "large",
        "max-video-preview": -1,
        "max-snippet": -1,
      },
    },

    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: SITE.locale || "en_US",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      creator: SITE.twitter,
      images: [image],
    },

    formatDetection: {
      telephone: false,
      address: false,
      email: false,
    },
  };
}
