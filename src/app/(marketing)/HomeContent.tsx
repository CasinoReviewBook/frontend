'use client';

import { Hero } from "@/components/sections/Hero";
import { FeaturedCasinos } from "@/components/sections/FeaturedCasinos";
import { FAQSection } from "@/components/sections/FAQSection";
import { NewsCarousel } from "@/components/sections/NewsCarousel";
import { BonuesSection2 } from "@/components/sections/BonusSection2";
import AllCasinoSection from "@/components/sections/AllCasinoSection";
import CasinoShowsSection from "@/components/sections/CasinoShowsSection";
import { TelegramSection } from "@/components/sections/TelegramSection";
import SpinRallySection from "@/components/sections/SpinRallySection";
import PopularCasinoSection from "@/components/sections/PopularCasinoSection";
import NewCasinoSection from "@/components/sections/NewCasino";
import ExploreCasinoSection from "@/components/sections/ExploreCasino";
import CategorySection from "@/components/sections/CategorySection";
import CasinoFilter from "@/components/sections/CasinoFilter";
import { useAppDispatch } from "@/hooks/useRedux";
import { filterCasinosByTags } from "@/store/slices/casinoSlice";

export default function HomeContent() {
  const dispatch = useAppDispatch();

  const handleFilterChange = (selectedTagIds: string[]) => {
    dispatch(filterCasinosByTags(selectedTagIds));
  };

  return (
    // overflow-x-hidden here kills any child that bleeds past the viewport width
    <div className="overflow-x-hidden w-full">

      <Hero />
      <CasinoFilter onFilterChange={handleFilterChange} />
      <NewCasinoSection/>
      <CategorySection />

      <ExploreCasinoSection />
      <TelegramSection />

      <PopularCasinoSection />
      <CasinoShowsSection />
      <SpinRallySection />
      <BonuesSection2 />
      <CasinoShowsSection />
      <AllCasinoSection />
      <NewsCarousel />
      <FAQSection />
      <TelegramSection />
    </div>
  );
}
