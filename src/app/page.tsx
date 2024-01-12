import React from "react";

import Example from "@/components/Example";
import ContactsList from "@/components/ui/ContactsList";
import Navbar from "@/components/ui/NavBar";
import PhoneLink from "@/components/ui/PhoneLink";
import ServiceCard from "@/components/ui/ServiceCard";
import SocialMediaList from "@/components/ui/SocialMediaList";
import Advantages from "@/sections/Advantages";
import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";
import Faq from "@/sections/Faq";

import data from "@/data/service-card.json";

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceCard
        link={data.link}
        serviceDescription={data.serviceDescription}
        alt={data.alt}
      />

      <Navbar isMobile={false} />

      <ContactsList />
      <PhoneLink />
      <SocialMediaList />
      <About />
      <Advantages />
      <Faq />
      <Gallery />
      <Example />
    </>
  );
}
