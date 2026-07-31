import { Metadata } from "next";
import { DEFAULT_SEO } from "@/constants";
import CasinoComparison from "@/components/sections/CasinoComparison";

export const metadata: Metadata = {
  title: "Compare Casinos - Casino Reviews Book",
  description: "Compare top online casinos side by side. Find the best casino for you with our detailed comparison tool.",
  openGraph: {
    title: "Compare Casinos - Casino Reviews Book",
    description: "Compare top online casinos side by side. Find the best casino for you with our detailed comparison tool.",
  },
};

export default function CompareCasinosPage() {
  return <CasinoComparison />;
}
