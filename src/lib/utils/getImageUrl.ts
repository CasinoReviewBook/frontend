import { API_CONFIG } from '@/config/api.config';

export const getImageUrl = (url?: string | null): string => {
  if (!url) return '/images/888.png';
  if (url.startsWith('http')) return url;
  const baseUrl = API_CONFIG.baseURL.replace(/\/api\/?$/, '');
  return `${baseUrl}${url.startsWith('/') ? '' : '/'}${url}`;
};
