import AboutSection from "@/sections/AboutSection";
import GallerySection from "@/sections/GallerySection";
import ServiceCard from "@/components/ui/ServiceCard";

import data from "@/data/service-card.json";

export default function Home() {
  return (
    <>
      <AboutSection />
      <GallerySection />
      <ServiceCard
        link={data.link}
        alt={data.alt}
        accentWord={data.accentWord}
      />
    </>
  );
}
