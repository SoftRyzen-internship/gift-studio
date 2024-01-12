"use client";

import React from "react";

import ContactsList from "@/components/ui/ContactsList";
import MobileBtn from "@/components/ui/MobileBtn";
import MobileMenu from "@/components/ui/MobileMenu";
import Navbar from "@/components/ui/NavBar";
import PhoneLink from "@/components/ui/PhoneLink";
import ServiceCard from "@/components/ui/ServiceCard";
import SocialMediaList from "@/components/ui/SocialMediaList";
import About from "@/sections/About";
import Faq from "@/sections/Faq";
import Gallery from "@/sections/Gallery";
import FeedbackCard from "@/components/ui/FeedbackCard";

import data from "@/data/service-card.json";

export default function Home() {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuShown);
  };

  return (
    <>
      <FeedbackCard />
      <ServiceCard
        link={data.link}
        serviceDescription={data.serviceDescription}
        alt={data.alt}
      />
      <Navbar isMobile={false} />
      <MobileBtn
        isMobileMenuShown={isMobileMenuShown}
        handleClick={toggleMenu}
      />
      <ContactsList />
      <PhoneLink />
      <SocialMediaList />
      {isMobileMenuShown && <MobileMenu isMobile={isMobileMenuShown} />}
      <About />
      <Faq />
      <Gallery />
    </>
  );
}
