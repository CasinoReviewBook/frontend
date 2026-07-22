'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';

import { fetchNews } from '@/store/slices/newsSlice';
import { AppDispatch, RootState } from '@/store';

export default function NewsDetailPage() {
  const params = useParams();
  const dispatch = useDispatch<AppDispatch>();

  const { news, loading, error } = useSelector(
    (state: RootState) => state.news
  );

  const slug = params.slug as string;

  useEffect(() => {
    // Fetch news only if it is not already loaded
    if (news.length === 0) {
      dispatch(fetchNews());
    }
  }, [dispatch, news.length]);

  const currentNews = news.find(
    (item) => item.slug === slug
  );

  if (loading) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p>Loading news...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  if (!currentNews) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-bold">
          News Not Found
        </h1>

        <Link
          href="/news"
          className="inline-block mt-6 text-blue-600 hover:underline"
        >
          ← Back to News
        </Link>
      </div>
    );
  }

  return (
    <main className="mx-auto px-2">

      {/* Back Button */}
      <Link
        href="/news"
        className="inline-block mb-8 text-blue-600 hover:underline"
      >
        ← Back to News
      </Link>

      {/* Article Header */}
      <article>

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          {currentNews.title}
        </h1>

        <div className="mt-4 text-sm text-gray-500">
          Published on{' '}
          {new Date(
            currentNews.published_at
          ).toLocaleDateString()}
        </div>

        {/* Featured Image */}
        <div className="relative w-full h-[300px] md:h-[500px] mt-8 rounded-xl overflow-hidden">
          <img
  src={currentNews.featured_image}
  alt={currentNews.title}
  className="w-full h-full object-cover"
/>
        </div>

        {/* Article Content */}
        <div className="mt-10">

          {currentNews.content
            .split('\n\n')
            .map((paragraph, index) => (
              <p
                key={index}
                className="mb-6 text-lg leading-8 text-gray-700"
              >
                {paragraph}
              </p>
            ))}

        </div>

      </article>

    </main>
  );
}