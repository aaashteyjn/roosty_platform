import { Hero } from "../../components/home/Hero";
import { LatestPosts } from "../../components/home/LatestPosts";
import { PopularExperts } from "../../components/home/PopularExperts";
import { Categories } from "../../components/home/Categories";
import { CTA } from "../../components/home/CTA";

export function Home() {
  return (
    <main className="bg-[#F8F6FF]">

      <Hero />

      <LatestPosts />

      <PopularExperts />

      <Categories />

      <CTA />

    </main>
  );
}