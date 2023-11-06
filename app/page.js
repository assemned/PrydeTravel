import CTA from "@/components/CTA";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Places from "@/components/Places";
import Plan from "@/components/Plan";
import Reviews from "@/components/Reviews";

export default function Home() {
  return (
    <>
      <Hero />
      <Places />
      <Plan />
      <Gallery />
      <Reviews />
      <CTA />
    </>
  );
}
