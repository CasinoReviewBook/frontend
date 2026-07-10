'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useCasinos } from '@/hooks/useRedux';
import { getImageUrl } from '@/lib/utils/getImageUrl';
import Link from "next/link";
export default function PopularCasinoSection() {
  const { casinos, loading } = useCasinos();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const displayCasinos = casinos;

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <section className="w-full py-8">
        <div className="flex items-center justify-center">
          <div className="text-slate-500">Loading casinos...</div>
        </div>
      </section>
    );
  }

  if (displayCasinos.length === 0) {
    return null;
  }

  return (
    <section className="w-full py-8">
      {/* Header */}
    <div className="mb-6">
        {/* First Row */}
        <div className="flex items-center justify-between">
         <div className="flex items-center gap-3">
          <Star
            size={22}
            fill="#B8C5FF"
            color="#B8C5FF"
          />

          <h2 className="text-[24px] sm:text-[36px] font-semibold text-[#111827]">
            Popular
          </h2>
        </div>

          <div className="flex items-center gap-3">
            <button className="hidden md:flex items-center bg-white px-4 py-2 rounded-full text-sm font-medium shadow-sm text-[#16171D]">
              See all
              <span className="ml-2 text-[#98A2B3]">{casinos.length}</span>
            </button>
            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100"
              onClick={scrollLeft}
            >
              <ChevronLeft size={18} className="text-[#16171D]" />
            </button>

            <button
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm border border-gray-100"
              onClick={scrollRight}
            >
              <ChevronRight size={18} className="text-[#16171D]" />
            </button>
          </div>
        </div>

        {/* Second Row */}
        <p className="text-[15px] text-[#5F6368] mt-2">
          New Rally
          <span className="text-[#2E68FB]"> every 20 minutes</span> – spin and win!
        </p>
      </div>

      {/* Cards */}
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto pb-2 scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {displayCasinos.map((casino, index) => (
          <CasinoCard key={casino.id} casino={casino} index={index} />
        ))}
      </div>
    </section>
  );
}

function CasinoCard({
  casino,
  index,
}: {
  casino: any;
  index: number;
}) {
  const welcomeBonus = casino.bonuses?.[0] || null;
  const imageUrl = getImageUrl(casino.logo || casino.featured_image);

  return (
  <div
  className="relative bg-white rounded-[12px] p-[10px] shrink-0"
  style={{
    width: '268px',
    height: '346px',
  }}
>
  <div className="absolute -top-2 right-2 z-[9] text-[34px]">
    🏅
  </div>

  {/* Gradient wrapper */}
  <div
    className="p-[2px] rounded-[12px] h-full"
    style={{
      background:
        'linear-gradient(158.37deg, #FF9C2C 2.3%, #FFF1CC 15.9%, #B45B1B 24.24%, #FFC170 62.4%, #FEE5B3 75.76%, #9F5E26 90.07%)',
    }}
  >
        {/* Actual Card */}
         <div
      className="relative rounded-[10px] p-[12px] h-full overflow-hidden"
      style={{
        background:
          'linear-gradient(231.79deg, #D5EDFF 32.55%, #EEECFF 43.54%, #F9F3FF 53.23%, #F5FCFF 66.16%, #E9F5FF 79.08%)',
      }}
    >
          {/* Rank */}
          <div className="absolute top-0 left-0 z-20 bg-[#FF9C2C] text-white text-[18px] font-bold px-3 py-1 rounded-br-xl rounded-tl-[10px]">
            #{index + 1}
          </div>

          

          {/* Medal */}
   
          {/* Image */}
          <div
            className="relative overflow-hidden rounded-[12px]"
            style={{
              width: '221px',
              height: '143px',
              boxShadow: '0px 3px 18px -3px #267BDC33',
            }}
          >
            <Image
              src={imageUrl}
              alt={casino.name}
              fill
              className="object-cover"
              unoptimized
            />

            <div className="absolute bottom-2 left-2 bg-[#FF9C2C] text-white text-[8px] px-2 py-1 rounded-md">
              {casino.established_year ? `Founded: ${casino.established_year}` : 'New Casino'}
            </div>

            {casino.license_authority && (
              <div className="absolute bottom-2 right-2 bg-[#0DAA73] text-white text-[8px] px-2 py-1 rounded-md">
                {casino.license_authority}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="mt-2">
            <div className="flex justify-between items-start">
              <h3 className="text-[15px] font-bold text-[#151515]">
                {casino.name}
              </h3>

              <div className="flex items-center gap-1">
                <Star
                  size={12}
                  fill="#FDB022"
                  color="#FDB022"
                />
                <span className="text-[12px] text-[#000000] font-semibold">
                  {casino.rating || 'N/A'}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-[#666] line-clamp-2">
              {welcomeBonus ? welcomeBonus.title :casino.short_description || 'Premium Casino Experience'}
            </p>

            <div className="mt-1 space-y-0 text-[11px]">
              {welcomeBonus && (
                <div className="flex justify-between">
                  <span className="text-[#2E68FB] font-semibold">
                    Welcome Bonus
                  </span>
                  <span className="text-[#363636]">
                    {welcomeBonus.amount}
                  </span>
                </div>
              )}

              {casino.minimum_deposit && (
                <div className="flex justify-between">
                  <span className="text-[#2E68FB] font-semibold">
                    Min Deposit
                  </span>
                  <span className="text-[#363636]">
                    ${casino.minimum_deposit}
                  </span>
                </div>
              )}

              {welcomeBonus?.wagering_requirement && (
                <div className="flex justify-between">
                  <span className="text-[#2E68FB] font-semibold">
                    Wagering
                  </span>
                  <span className="text-[#363636]">
                    {welcomeBonus.wagering_requirement}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="text-[#00B67A] font-semibold">
                  Instant
                </span>
                <span className="text-[#00B67A]">
                  {casino.withdrawal_time || '2-4h'}
                </span>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="absolute bottom-3 left-3 right-3 flex gap-2">
            <button
              className="flex-1 h-[28px] rounded-[12px] text-[11px] font-semibold"
              style={{
                boxShadow: '0px 2px 0px 0px #2E68FB',
                background:
                  'linear-gradient(180deg, #CDDCFB 0%, #588CF3 100%)',
              }}
              onClick={() => {
                if (casino.website_url) {
                  window.open(casino.website_url, '_blank');
                }
              }}
            >
              Visit Casino ↗
            </button>

           <Link
  href={`/casino/${casino.slug}`}
  className="
    inline-flex
    w-[80px]
    h-[28px]
    items-center
    justify-center
    rounded-[12px]
    text-[11px]
    font-semibold
    text-[#ffff]
    bg-[linear-gradient(180deg,#FFE11F_0%,#FF8533_100%)]
    transition-all
    hover:brightness-105
    active:scale-95
  "
>
  Reviews
</Link>
          </div>
        </div>
      </div>
    </div>
  );
}