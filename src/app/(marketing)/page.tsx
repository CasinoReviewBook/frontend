import { Hero } from "@/components/sections/Hero";
import { FeaturedCasinos } from "@/components/sections/FeaturedCasinos";
import { FAQSection } from "@/components/sections/FAQSection";
import { NewsCarousel } from "@/components/sections/NewsCarousel";
import { BonuesSection2 } from "@/components/sections/BonusSection2";
import AllCasinoSection from "@/components/sections/AllCasinoSection";
import CasinoShowsSection from "@/components/sections/CasinoShowsSection";
import { Metadata } from "next";
import { TelegramSection } from "@/components/sections/TelegramSection";
import { DEFAULT_SEO } from "@/constants";
import SpinRallySection from "@/components/sections/SpinRallySection";
import PopularCasinoSection from "@/components/sections/PopularCasinoSection";
import NewCasinoSection from "@/components/sections/NewCasino";
import ExploreCasinoSection from "@/components/sections/ExploreCasino";
import CategorySection from "@/components/sections/CategorySection";

export const metadata: Metadata = {
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
  openGraph: DEFAULT_SEO.openGraph,
  twitter: DEFAULT_SEO.twitter,
};

export default function Home() {
  return (
    // overflow-x-hidden here kills any child that bleeds past the viewport width
    <div className="overflo
    w-x-hidden w-full">

      <Hero />
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