'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const casinos = [
  {
    name: 'BC Game Casino',
    image: '/images/888.png',
    rating: 4.9,
    subtitle: 'Premium Casino Experience',
    welcomeBonus: '$2,500 + 10% Cashback',
    depositBonus: '400% up to €750 + 240 Free Spins',
    minDeposit: '€20',
    wagering: '40x',
    instantWithdrawal: '2-4 Hours',
    gaming: '2400+ Games',
  },
  {
    name: 'BC Game Casino',
    image: '/images/888.png',
    rating: 4.9,
    subtitle: 'Premium Casino Experience',
    welcomeBonus: '$2,500 + 10% Cashback',
    depositBonus: '400% up to €750 + 240 Free Spins',
    minDeposit: '€20',
    wagering: '40x',
    instantWithdrawal: '2-4 Hours',
    gaming: '2400+ Games',
  },
  {
    name: 'BC Game Casino',
    image: '/images/888.png',
    rating: 4.9,
    subtitle: 'Premium Casino Experience',
    welcomeBonus: '$2,500 + 10% Cashback',
    depositBonus: '400% up to €750 + 240 Free Spins',
    minDeposit: '€20',
    wagering: '40x',
    instantWithdrawal: '2-4 Hours',
    gaming: '2400+ Games',
  },
   {
    name: 'BC Game Casino',
    image: '/images/888.png',
    rating: 4.9,
    subtitle: 'Premium Casino Experience',
    welcomeBonus: '$2,500 + 10% Cashback',
    depositBonus: '400% up to €750 + 240 Free Spins',
    minDeposit: '€20',
    wagering: '40x',
    instantWithdrawal: '2-4 Hours',
    gaming: '2400+ Games',
  },
  {
    name: 'BC Game Casino',
    image: '/images/888.png',
    rating: 4.9,
    subtitle: 'Premium Casino Experience',
    welcomeBonus: '$2,500 + 10% Cashback',
    depositBonus: '400% up to €750 + 240 Free Spins',
    minDeposit: '€20',
    wagering: '40x',
    instantWithdrawal: '2-4 Hours',
    gaming: '2400+ Games',
  },
  {
    name: 'BC Game Casino',
    image: '/images/888.png',
    rating: 4.9,
    subtitle: 'Premium Casino Experience',
    welcomeBonus: '$2,500 + 10% Cashback',
    depositBonus: '400% up to €750 + 240 Free Spins',
    minDeposit: '€20',
    wagering: '40x',
    instantWithdrawal: '2-4 Hours',
    gaming: '2400+ Games',
  },
];

export default function SpinRallySection() {
  return (
    <section className="w-full py-8">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between mb-6 gap-3">
        <div>
          <h2 className="text-[24px] sm:text-[36px] font-bold text-[#1F1F1F]">
            Spin Rally
          </h2>

          <p className="text-[15px] text-[#5F6368] mt-1">
            New Rally
            <span className="text-[#2E68FB]">
              {' '}every 20 minutes
            </span>
            {' '} - spin and win!
          </p>
        </div>

       
      </div>

      {/* Cards */}
     <div
  className="flex gap-4 overflow-x-auto pb-2"
  style={{
    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE & Edge
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
      className="flex gap-3 p-3 rounded-2xl border shrink-0"
      style={{
        width: '320px',
        height: '171px',
        borderRadius: '16px',
        border: '1px solid #2E68FB70',
        background:
          'linear-gradient(231.79deg, #D5EDFF 32.55%, #EEECFF 43.54%, #F9F3FF 53.23%, #F5FCFF 66.16%, #E9F5FF 79.08%)',
      }}
    >
      {/* Image Column */}
      <div
  className="relative overflow-hidden rounded-tl-[14px] rounded-bl-[14px] rounded-br-[14px]"
  style={{
    width: '139px',
    height: '147px',
  }}
>
  <Image
    src={casino.image}
    alt={casino.name}
    fill
    className="object-cover"
  />

  {/* NEW Badge */}
  <div
    className="absolute top-[-6] right-0 z-10"
  >
    <span
      className="text-[#363636] text-[9px] font-bold px-2 py-1 "
      style={{
        background:
          'linear-gradient(180deg, #FFB000 0%, #FF8A00 100%)',
        boxShadow: '0 2px 6px rgba(0,0,0,0.15)',
      }}
    >
      NEW
    </span>
  </div>
</div>

      {/* Content Column */}
      <div
        className="flex flex-col justify-between"
        style={{
          width: '212px',
          height: '147px',
        }}
      >
        {/* Header */}
        <div>
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-2">
             

              <div>
                <h3 className="text-[15px] font-bold text-[#151515] leading-none">
                  {casino.name}
                </h3>

                <p className="text-[10px] text-[#666] mt-1">
                  {casino.subtitle}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1 text-[#363636]">
              <Star
                size={12}
                fill="#FFB000"
                color="#FFB000"
              />
              <span className="text-[11px] font-semibold">
                {casino.rating}
              </span>
            </div>
          </div>

          {/* Details */}
          <div className="mt-3 space-y-1 text-[10px]">
            <div className="flex justify-between">
              <span className="text-[#2E68FB] font-semibold">
                Welcome Bonus
              </span>
              <span className='text-[#363636]'>{casino.welcomeBonus}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[#2E68FB] font-semibold">
                Deposit Bonus
              </span>
              <span className='text-[#363636]'>{casino.depositBonus}</span>
            </div>

           

            <div className="flex justify-between">
              <span className="text-[#00B67A] font-semibold">
                Gaming
              </span>
              <span className="text-[#00B67A]">
                {casino.gaming}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            style={{
              width: '130px',
              height: '27px',
              borderRadius: '12px',
              padding: '6px 10px',
              boxShadow: '0px 2px 0px 0px #2E68FB',
              background:
                'linear-gradient(180deg, #CDDCFB 0%, #588CF3 100%)',
            }}
            className="text-white text-[11px] font-semibold"
          >
            Visit Casino ↗
          </button>

          <button
            style={{
              width: '74px',
              height: '27px',
              borderRadius: '12px',
              padding: '6px 10px',
              background:
                'linear-gradient(180deg, #FFE11F 0%, #FF8533 100%)',
            }}
            className="text-[#1F1F1F] text-[11px] font-semibold"
          >
            Reviews
          </button>
        </div>
      </div>
    </div>
  );
}