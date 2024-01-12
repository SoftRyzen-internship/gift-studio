import React from "react";

import Example from "@/components/Example";
import ContactsList from "@/components/ui/ContactsList";
import Navbar from "@/components/ui/NavBar";
import PhoneLink from "@/components/ui/PhoneLink";
import SocialMediaList from "@/components/ui/SocialMediaList";
import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Faq from "@/sections/Faq";

import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Navbar isMobile={false} />
      <ContactsList />
      <PhoneLink />
      <SocialMediaList />
      <About />
      <Faq />
      <Gallery />
      <Example />
    </>
  );
}
