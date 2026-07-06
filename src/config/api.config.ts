export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
  frontendURL: process.env.NEXT_PUBLIC_FRONTEND_URL || 'http://localhost:3000',
  isDevelopment: process.env.NODE_ENV !== 'production',
  timeout: 10000,
};

export const API_ENDPOINTS = {
  // Auth
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  LOGOUT: '/auth/logout',
  REFRESH: '/auth/refresh',
  
  // Casinos
  CASINOS: '/casinos',
  CASINO_BY_ID: (id: string) => `/casinos/${id}`,
  FEATURED_CASINOS: '/casinos/featured',
  
  // Bonuses
  BONUSES: '/bonuses',
  BONUS_BY_ID: (id: string) => `/bonuses/${id}`,
  
  // Reviews
  REVIEWS: '/reviews',
  REVIEW_BY_ID: (id: string) => `/reviews/${id}`,
  CASINO_REVIEWS: (casinoId: string) => `/reviews/casino/${casinoId}`,
  
  // Categories
  CATEGORIES: '/categories',
  CATEGORY_BY_ID: (id: string) => `/categories/${id}`,
  
  // News
  NEWS: '/news',
  NEWS_BY_ID: (id: string) => `/news/${id}`,
  
  // Newsletter
  NEWSLETTER_SUBSCRIBE: '/newsletter/subscribe',
  NEWSLETTER_UNSUBSCRIBE: '/newsletter/unsubscribe',
  
  // Email Campaigns
  EMAIL_CAMPAIGNS: '/email-campaigns',
  SEND_CAMPAIGN: (id: string) => `/email-campaigns/${id}/send`,
  
  // Site Settings
  SITE_SETTINGS: '/settings',
  
  // Users
  USER_PROFILE: '/users/profile',
  UPDATE_PROFILE: '/users/profile',
} as const;
