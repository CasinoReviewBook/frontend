export const SITE_CONFIG = {
  name: "CasinoLab",
  description: "The most trusted casino reviews and affiliate offers.",
  url: "https://casinolab.com",
};

export const DEFAULT_SEO = {
  title: `${SITE_CONFIG.name} | Best Casino Reviews`,
  description: SITE_CONFIG.description,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
  },
};
