'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const casinos = Array(6).fill({
  name: 'BC Game Casino',
  image: '/images/888.png',
  rating: 4.9,
  subtitle: 'Premium Casino Experience',
  welcomeBonus: '$2,000 + 10% Cashback',
  minDeposit: '€20',
  wagering: '40x',
  games: '2,400+ games',
});

export default function PopularCasinoSection() {
  return (
    <section className="w-full py-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
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
  <span className="ml-2 text-[#98A2B3]">883</span>
</button>

          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <ChevronLeft size={18} className="text-[#16171D]"/>
          </button>

          <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm">
            <ChevronRight size={18} className="text-[#16171D]" />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div
        className="flex gap-4 overflow-x-auto pb-2"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {casinos.map((casino, index) => (
          <CasinoCard key={index} casino={casino} />
        ))}
      </div>
    </section>
  );
}

function CasinoCard({
  casino,
}: {
  casino: (typeof casinos)[0];
}) {
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
            #1
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
              src={casino.image}
              alt={casino.name}
              fill
              className="object-cover"
            />

            <div className="absolute bottom-2 left-2 bg-[#FF9C2C] text-white text-[8px] px-2 py-1 rounded-md">
              Founded: 2011
            </div>

            <div className="absolute bottom-2 right-2 bg-[#0DAA73] text-white text-[8px] px-2 py-1 rounded-md">
              MGA / UKGC
            </div>
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
                  {casino.rating}
                </span>
              </div>
            </div>

            <p className="text-[11px] text-[#666] ">
              {casino.subtitle}
            </p>

            <div className="mt-1 space-y-0 text-[11px]">
              <div className="flex justify-between">
                <span className="text-[#2E68FB] font-semibold">
                  Welcome Bonus
                </span>
                <span className="text-[#363636]">
                  {casino.welcomeBonus}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#2E68FB] font-semibold">
                  Min Deposit
                </span>
                <span className="text-[#363636]">
                  {casino.minDeposit}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#2E68FB] font-semibold">
                  Wagering
                </span>
                <span className="text-[#363636]">
                  {casino.wagering}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-[#00B67A] font-semibold">
                  Instant
                </span>
                <span className="text-[#00B67A]">
                  2-4h • {casino.games}
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
            >
              Visit Casino ↗
            </button>

            <button
              className="w-[80px] h-[28px] rounded-[12px] text-[11px] font-semibold"
              style={{
                background:
                  'linear-gradient(180deg, #FFE11F 0%, #FF8533 100%)',
              }}
            >
              Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}