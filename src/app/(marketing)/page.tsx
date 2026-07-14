import { Metadata } from "next";
import { DEFAULT_SEO } from "@/constants";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: DEFAULT_SEO.title,
  description: DEFAULT_SEO.description,
  openGraph: DEFAULT_SEO.openGraph,
  twitter: DEFAULT_SEO.twitter,
};

export default function Home() {
  return <HomeContent />;
}