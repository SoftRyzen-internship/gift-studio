"use client";

import React from "react";

import ServiceCard from "@/components/ui/ServiceCard";

import Navbar from "@/components/ui/NavBar";
import MobileMenu from "@/components/ui/MobileMenu";
import MobileBtn from "@/components/ui/MobileBtn";
import ContactsList from "@/components/ui/ContactsList";
import PhoneLink from "@/components/ui/PhoneLink";
import SocialMediaList from "@/components/ui/SocialMediaList";

import data from "@/data/service-card.json";

export default function Home() {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuShown);
  };

  return (
    <>
      <ServiceCard
        link={data.link}
        serviceDescription={data.serviceDescription}
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
    </>
  );
}
