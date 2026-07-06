'use client';

import Image from 'next/image';
import { Star, Check, ChevronLeft, ChevronRight } from 'lucide-react';

export default function AllCasinoSection() {
    const casinos = Array(3).fill({
        name: 'Red Stag Casino',
        rating: 4.9,
        bonus: '100% up to $1,500 + 150 Free Spins',
        image: '/images/888.png',
        features: [
            'Worldwide sports coverage',
            'Generous reload bonuses',
            'Instant crypto payouts',
        ],
    });

    return (
        <section className="w-full flex flex-col items-center py-12">
            {/* Heading */}
            <div className=" mb-8 flex justify-center">
                <h1 className="font-poppins font-semibold text-[36px] leading-[100%] text-[#111827] text-center">
                    Best Online Casinos
                </h1>
            </div>

            {/* Casino Cards */}
            <div className="flex flex-col gap-6 items-center">
                {casinos.map((casino, index) => (
                    <div
                        key={index}
                        className="
              
              
              bg-white
              rounded-[15px]
              p-[14px]
              flex
              gap-[10px]
              shadow-sm
            "
                    >
                        {/* Inner Card */}
                        <div
                            className="
                w-full
                h-auto
                rounded-[12px]
                border-[3px]
                p-4 sm:p-6
                flex-col lg:flex-row
                flex
                justify-between
                items-center
                overflow-hidden
                gap-4
              "
                            style={{
                                background:
                                    'linear-gradient(231.79deg, #D5EDFF 32.55%, #EEECFF 43.54%, #F9F3FF 53.23%, #F5FCFF 66.16%, #E9F5FF 79.08%)',
                                borderImage:
                                    'linear-gradient(158.37deg, #FF9C2C 2.3%, #FFF1CC 15.9%, #B45B1B 24.24%, #FFC170 62.4%, #FEE5B3 75.76%, #9F5E26 90.07%) 1',
                            }}
                        >
                            {/* Left Image */}
                            <div
                                className="
                  w-full lg:w-[197px]
                  max-w-[197px]
                  h-auto
                  rounded-[12px]
                  overflow-hidden
                  shadow-[0px_3px_18px_-3px_#267BDC33]
                  flex-shrink-0
                "
                            >
                                <Image
                                    src={casino.image}
                                    alt={casino.name}
                                    width={197}
                                    height={219}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Middle Content */}
                            <div
                                className="
                  w-full lg:w-[470px]
                 
                  flex
                  flex-col
                
                  mx-0 lg:mx-8
                  flex-1
                "
                            >
                                {/* Title + Rating */}
                                <div className="flex items-center justify-between">
                                    <h2 className="font-semibold text-[28px] text-[#101828]">
                                        {casino.name}
                                    </h2>

                                    <div className="flex items-center gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                size={16}
                                                fill="#FDB022"
                                                color="#FDB022"
                                            />
                                        ))}

                                        <span className="ml-2 text-[18px] font-semibold text-[#101828]">
                                            {casino.rating}
                                        </span>


                                    </div>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mt-2">
                                    {casino.features.map((feature: string, idx: number) => (
                                        <div
                                            key={idx}
                                            className="flex items-center gap-3 text-[15px] text-[#344054]"
                                        >
                                            <Check size={18} className="text-[#12B76A]" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>

                                {/* Payment Methods */}
                                <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                                    <p className="text-[14px] font-medium text-[#344054] whitespace-nowrap">
                                        Payment Methods:
                                    </p>

                                    <div className="flex items-center gap-2">
                                        <div className="w-10 h-6 rounded-md bg-[#1434CB] text-white text-[9px] font-bold flex items-center justify-center">
                                            VISA
                                        </div>

                                        <div className="w-10 h-6 rounded-md bg-[#EB001B] text-white text-[8px] font-bold flex items-center justify-center">
                                            MC
                                        </div>

                                        <div className="w-10 h-6 rounded-md bg-[#F7931A] text-white text-[8px] font-bold flex items-center justify-center">
                                            BTC
                                        </div>

                                        <div className="w-10 h-6 rounded-md bg-[#0070BA] text-white text-[8px] font-bold flex items-center justify-center">
                                            PP
                                        </div>
                                    </div>
                                </div>

                                {/* Verified Text */}
                                <p className="text-[14px] font-medium text-[#12B76A] mt-2">
                                    ✓ Verified terms • No hidden fees
                                </p>
                            </div>

                            {/* Right Side CTA */}
                            <div className="w-full lg:w-[270px] flex flex-col items-center">
                                <h3 className="text-center text-[22px] font-bold text-[#101828] leading-tight">
                                    {casino.bonus}
                                </h3>

                                <button
                                    className="
                    w-[180px]
                    h-[48px]
                    mt-8
                    rounded-[12px]
                    font-semibold
                    text-white
                    bg-gradient-to-b
                    from-[#8EB6FF]
                    to-[#4B7FFF]
                    transition-all
                    hover:scale-105
                  "
                                >
                                    Visit Casino ↗
                                </button>

                                <button
                                    className="
                    w-[180px]
                    h-[48px]
                    mt-4
                    rounded-[12px]
                    font-semibold
                    text-[#101828]
                    bg-gradient-to-b
                    from-[#FFD85E]
                    to-[#FF9C2C]
                    transition-all
                    hover:scale-105
                  "
                                >
                                    Reviews
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            <div className="w-full max-w-[1124px] flex flex-col sm:flex-row justify-between items-center mt-8 gap-4">
                <p className="text-[13px] text-[#667085]">
                    Showing 8 of 500+ reviewed casinos
                </p>

                <div className="flex items-center gap-2">
                    <button className="w-6 h-6 flex items-center justify-center text-[#667085] hover:text-black">
                        <ChevronLeft size={16} />
                    </button>

                    <button className="w-6 h-6 rounded bg-[#4F46E5] text-white text-xs font-medium">
                        1
                    </button>

                    <button className="w-6 h-6 rounded text-[#667085] hover:bg-gray-100 text-xs">
                        2
                    </button>

                    <button className="w-6 h-6 rounded text-[#667085] hover:bg-gray-100 text-xs">
                        3
                    </button>

                    <button className="w-6 h-6 rounded text-[#667085] hover:bg-gray-100 text-xs">
                        4
                    </button>

                    <span className="text-[#667085] text-xs px-1">...</span>

                    <button className="w-6 h-6 rounded text-[#667085] hover:bg-gray-100 text-xs">
                        28
                    </button>

                    <button className="w-6 h-6 flex items-center justify-center text-[#667085] hover:text-black">
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}