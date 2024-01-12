import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Faq from "@/sections/Faq";
import Advantages from "@/sections/Advantages";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Advantages />
      <Faq />
      <Gallery />
    </>
  );
}
