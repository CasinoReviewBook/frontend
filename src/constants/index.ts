// export const SITE_CONFIG = {
//   name: "CasinoLab",
//   description: "The most trusted casino reviews and affiliate offers.",
//   url: "https://casinolab.com",
// };

// export const DEFAULT_SEO = {
//   title: `${SITE_CONFIG.name} | Best Casino Reviews`,
//   description: SITE_CONFIG.description,
//   openGraph: {
//     type: "website",
//     locale: "en_US",
//     url: SITE_CONFIG.url,
//     siteName: SITE_CONFIG.name,
//     title: SITE_CONFIG.name,
//     description: SITE_CONFIG.description,
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: SITE_CONFIG.name,
//     description: SITE_CONFIG.description,
//   },
// };



export const SITE = {
  name: "Casino Review Book",

  shortName: "CRB",

  url: "https://casinoreviewsbook.com",

  siteUrl: "https://casinoreviewsbook.com",

  siteName: "Casino Review Book",
  logo: "https://casinoreviewsbook.com/logo.png",

  description:
    "Casino Review Book is a trusted online casino review platform providing honest casino reviews, exclusive casino bonuses, sportsbook reviews, crypto casino guides, slot reviews, payment method guides, gambling strategies, and responsible gambling resources for players worldwide.",

  locale: "en_US",

  type: "website",

  twitter: "@casinoreviewsbook", // Change after creating your X account

  author: "Casino Review Book Editorial Team",

  publisher: "Casino Review Book",
  searchURL: "https://casinoreviewsbook.com/search?q=",

  telegram: "https://t.me/casinoreviewsbook",
  facebook: "https://www.facebook.com/casinoreviewsbook",
  instagram: "https://www.instagram.com/casinoreviewsbook",
  youtube: "https://www.youtube.com/@casinoreviewsbook",
  linkedin: "https://www.linkedin.com/company/casinoreviewsbook",
  github: "https://github.com/casinoreviewsbook",

  email: "e7EoX@example.com",


};

export const DEFAULT_SEO = {
  metadataBase: new URL(SITE.url),

  title: {
    default: "Casino Review Book | Trusted Online Casino Reviews & Bonuses",

    template: "%s | Casino Review Book",
  },

  description: SITE.description,

  applicationName: SITE.name,

  authors: [
    {
      name: SITE.author,
    },
  ],

  creator: SITE.author,

  publisher: SITE.publisher,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: SITE.locale,

    url: SITE.url,

    siteName: SITE.name,

    title: "Casino Review Book",

    description: SITE.description,
  },

  twitter: {
    card: "summary_large_image",

    title: "Casino Review Book",

    description: SITE.description,

    creator: SITE.twitter,
  },

  alternates: {
    canonical: SITE.url,
  },
};
