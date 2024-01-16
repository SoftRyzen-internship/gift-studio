import React from "react";

// import Example from "@/components/Example";
import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Faq from "@/sections/Faq";
import Services from "@/sections/Services";
import Advantages from "@/sections/Advantages";
// import FeedbackCard from "@/components/ui/FeedbackCard";

export default function Home() {
  return (
    <>
      {/* <FeedbackCard /> */}

      <Hero />
      <About />
      <Services />
      <Advantages />
      <Faq />
      <Gallery />
      {/* <Example /> */}
    </>
  );
}