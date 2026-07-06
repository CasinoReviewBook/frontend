'use client';

import { Menu, Search, ChevronDown } from 'lucide-react';
import Image from 'next/image';
interface NavbarProps {
  onMenuClick: () => void;
}

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header
      className="
        fixed top-0 right-0 z-30
        left-0 lg:left-[260px]
        bg-[#EEF3FE]/90 backdrop-blur-md
       
      "
    >
      <div className="h-20 flex items-center justify-between px-3 sm:px-6 gap-2 sm:gap-5">

        {/* Sidebar Toggle - only visible on mobile */}
      <button
  onClick={onMenuClick}
  className="flex lg:hidden items-center justify-center shrink-0 w-9 h-9 rounded-lg "
  aria-label="Toggle sidebar"
>
  <Menu size={20} className="text-slate-700" />
</button>

        {/* Search Bar */}
       <div className="relative flex-1 max-w-[671px] flex items-center min-w-0">
    <input
        type="text"
        placeholder="Games, Categories"
        className="
            w-full
            h-[40px] sm:h-[45px]
            rounded-[32px]
            border
            border-[#2E68FB40]
            bg-[#46108E0D]
            pl-4 sm:pl-6
            pr-12 sm:pr-14
            text-xs sm:text-sm
            text-slate-700
            placeholder:text-slate-500
            outline-none
            focus:border-[#2E68FB]
            transition-colors
        "
    />
    
    {/* Search Button */}
    <button
        type="button"
        className="
            absolute
            right-[1px]
            top-[1px]
            w-[38px] sm:w-[43px]
            h-[38px] sm:h-[43px]
            rounded-full
            bg-[linear-gradient(180deg,#CDDCFB_0%,#588CF3_100%)]
            flex
            items-center
            justify-center
            text-white
            hover:opacity-90
            transition-opacity
            active:scale-95
        "
    >
        <Search size={16} className="sm:w-[18px] sm:h-[18px]" />
    </button>
</div>

        {/* Right Section */}
        <div className="flex items-center gap-1 sm:gap-4">

          {/* Language Selector */}
          <button
            className="
              hidden md:flex
              items-center
              justify-center
              gap-2
              w-[125px]
              h-[48px]
              rounded-[20px]
              px-6
              text-sm
              font-medium
              text-[#1E293B]
              whitespace-nowrap
            "
          >
            🇬🇧
            <span>EN</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Register Button */}
          <button
            className="
              hidden sm:flex
              items-center
              justify-center
              w-auto px-3 sm:w-[137px] sm:px-[22px]
              h-[40px] sm:h-[48px]
              rounded-[20px]
              font-bold
              text-[12px] sm:text-[14px]
              text-[#16203A]
              whitespace-nowrap
              bg-[linear-gradient(180deg,_#CDDCFB_0%,_#588CF3_100%)]
              shadow-[0px_2px_0px_0px_#2E68FB]
            "
          >
            REGISTER
          </button>

          {/* Play Now Button */}
          <button
            className="
              flex
              items-center
              justify-center
              w-auto px-3 sm:w-[165px] sm:px-6
              h-[40px] sm:h-[48px]
              rounded-[80px]
              font-bold
              text-[12px] sm:text-[14px]
              text-[#16203A]
              whitespace-nowrap
              bg-[linear-gradient(180deg,_#FFE11F_0%,_#FF8533_100%)]
              shadow-[0px_2px_0px_0px_#E36D1F]
            "
          >
            PLAY NOW
          </button>

        </div>
      </div>
    </header>
  );
}