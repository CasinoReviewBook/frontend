'use client';

import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const casinoShows = [
    {
        title: 'WELCOME BONUS',
        offer: '100%',
        subtitle: 'DEPOSIT MATCH',
        description: 'GET A 100% DEPOSIT BONUS INSTANTLY UPON REGISTRATION.',
        image: '/images/888.png',
    },
    {
        title: 'MONTHLY LEADERBOARD',
        offer: '$10K MONTHLY',
        subtitle: 'LEADERBOARD',
        description: 'COMPETE WITH PLAYERS AND WIN HUGE MONTHLY PRIZES.',
        image: '/images/888.png',
    },
    {
        title: 'FREE MYSTERY BOXES',
        offer: '3 FREE BONUS',
        subtitle: 'BOXES',
        description: 'UNLOCK SURPRISE REWARDS, SPINS, AND CASHBACK OFFERS.',
        image: '/images/888.png',
    },
    {
        title: 'DEPOSIT REWARDS',
        offer: '+15%',
        subtitle: 'EXTRA DEPOSIT BONUS',
        description: 'BOOST EVERY DEPOSIT WITH ADDITIONAL CASINO REWARDS.',
        image: '/images/888.png',
    },
    {
        title: 'CASHBACK REWARDS',
        offer: '5%',
        subtitle: 'CASHBACK BONUS',
        description: 'RECEIVE CASHBACK REWARDS ON EVERY WAGER PLACED.',
        image: '/images/888.png',
    },
];

// ── Exact values from design spec ──────────────────────────────
const OUTER_W = 244.13;   // total card wrapper width
const OUTER_H = 280.90;   // total card wrapper height
const CARD_W = 227.03;   // card body width
const CARD_H = 206.23;   // card body height
const CARD_TOP = 75;       // card body starts this far down (image peek zone)
const IMG_W = 210.56;   // center image width
const IMG_H = 92.09;    // center image height
const IMG_TOP = 16.29;    // image top offset inside wrapper
const IMG_LEFT = 33.57;    // image left offset inside wrapper
// ───────────────────────────────────────────────────────────────

export default function CasinoShowsSection() {
    return (
        <section className="w-full py-10">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between mb-8 gap-3">
                <div className="flex items-center gap-3">
                    <span className="px-2 py-1 text-[10px] font-semibold bg-[#EAF0FF] text-[#4F6BFF] rounded-full">
                        NEW
                    </span>
                    <h2 className="text-[22px] sm:text-[32px] font-semibold text-[#1F2937]">
                        Casinos Shows
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

            <div
                className="[&::-webkit-scrollbar]:hidden"
                style={{
                    width: '100%',
                    overflowX: 'auto',
                    overflowY: 'visible',
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <div style={{
                    display: 'flex',
                    gap: '16px',
                    width: 'fit-content',
                    paddingTop: '10px',
                    paddingBottom: '16px',
                    alignItems: 'flex-end',
                }}>
                    {casinoShows.map((item, index) => (
                        <CasinoCard key={index} item={item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CasinoCard({ item }: { item: (typeof casinoShows)[0] }) {
    return (
        <div
            style={{
                position: 'relative',
                flexShrink: 0,
                width: `${OUTER_W}px`,
                height: `${OUTER_H}px`,
                overflow: 'hidden',
            }}
        >
            {/* Left blurred image */}
            <div
                style={{
                    position: 'absolute',
                    width: `${IMG_W}px`,
                    height: `${IMG_H}px`,
                    top: `${IMG_TOP}px`,
                    left: '50%',
                    zIndex: 10,
                    transformOrigin: 'bottom center',
                    transform:
                        'translateX(-50%) rotate(-18deg) translateX(-18px) translateY(6px)',
                    filter: 'blur(3px) brightness(0.80)',
                    opacity: 0.68,
                }}
            >
                <Image
                    src={item.image}
                    alt=""
                    fill
                    aria-hidden
                    className="object-contain"
                />
            </div>

            {/* Right blurred image */}
            <div
                style={{
                    position: 'absolute',
                    width: `${IMG_W}px`,
                    height: `${IMG_H}px`,
                    top: `${IMG_TOP}px`,
                    left: '50%',
                    zIndex: 10,
                    transformOrigin: 'bottom center',
                    transform:
                        'translateX(-50%) rotate(18deg) translateX(18px) translateY(6px)',
                    filter: 'blur(3px) brightness(0.80)',
                    opacity: 0.68,
                }}
            >
                <Image
                    src={item.image}
                    alt=""
                    fill
                    aria-hidden
                    className="object-contain"
                />
            </div>

            {/* Center image */}
            <div
                style={{
                    position: 'absolute',
                    width: `${IMG_W}px`,
                    height: `${IMG_H}px`,
                    top: `${IMG_TOP}px`,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    zIndex: 12,
                    filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.22))',
                }}
            >
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Card body */}

            <div
                style={{
                    position: 'absolute',
                    top: `${CARD_TOP}px`,
                    left: `${(OUTER_W - CARD_W) / 2}px`,
                    width: `${CARD_W}px`,
                    height: `${CARD_H}px`,
                    zIndex: 20,
                    borderRadius: '18px',
                    overflow: 'hidden',
                    background:
                        'linear-gradient(175deg, #D4E1FF 0%, #EAF0FF 45%, #F4F7FF 100%)',

                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <div
                    style={{
                        position: 'absolute',
                        width: '51px',
                        height: '51px',
                        top: '5px',
                        left: '175px',

                        borderRadius: '50%',
                        background: '#2E68FB4D',
                        filter: 'blur(20px)',
                        zIndex: 1,
                        pointerEvents: 'none',
                    }}
                />
                {/* Title block */}
                <div
                    style={{
                        flexShrink: 0,
                        paddingTop: '30px',
                        paddingLeft: '16px',
                        paddingRight: '16px',
                        textAlign: 'center',
                    }}
                >
                    <p
                        style={{
                            fontSize: '7.5px',
                            fontWeight: 700,
                            color: '#2F63FF',
                            letterSpacing: '0.3em',
                            marginBottom: '4px',
                        }}
                    >
                        {item.title}
                    </p>

                    <h3
                        style={{
                            fontSize: item.offer.length > 5 ? '24px' : '38px',
                            fontWeight: 900,
                            color: '#000',
                            lineHeight: 1,
                        }}
                    >
                        {item.offer}
                    </h3>

                    <h4
                        style={{
                            fontSize: '11px',
                            fontWeight: 800,
                            color: '#000',
                            textTransform: 'uppercase',
                            marginTop: '2px',
                        }}
                    >
                        {item.subtitle}
                    </h4>
                </div>

                {/* Description */}
                <div
                    style={{
                        flex: 1,
                        marginTop: '10px',
                        padding: '8px 14px',
                        background:
                            'linear-gradient(90deg, #B8CCFF 0%, #C8D8FF 50%, #B8CCFF 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <p
                        style={{
                            fontSize: '9px',
                            fontWeight: 600,
                            color: '#0D1B5E',
                            textAlign: 'center',
                            textTransform: 'uppercase',
                            lineHeight: '14px',
                        }}
                    >
                        {item.description}
                    </p>
                </div>

                {/* Footer */}
                <div
                    style={{
                        flexShrink: 0,
                        position: 'relative',
                        background: '#fff',
                        height: '44px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <button
                        style={{
                            fontSize: '10.5px',
                            fontWeight: 700,
                            color: '#2F63FF',
                            letterSpacing: '0.2em',
                        }}
                    >
                        CLAIM BONUS
                    </button>

                    <div
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: '38px',
                            height: '3px',
                            borderRadius: '2px',
                            backgroundColor: '#2F63FF',
                        }}
                    />
                </div>
            </div>
        </div>
    );
}