"use client";

import React from "react";

import Navbar from "@/components/ui/NavBar";
import MobileMenu from "@/components/ui/MobileMenu";
import MobileBtn from "@/components/ui/MobileBtn";
import ContactsList from "@/components/ui/ContactsList";
import PhoneLink from "@/components/ui/PhoneLink";
import SocialMediaList from "@/components/ui/SocialMediaList";

import About from "@/sections/About";
import Gallery from "@/sections/Gallery";
import Hero from "@/sections/Hero";

export default function Home() {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuShown);
  };

  return (
    <>
      <Navbar isMobile={false} />
      <MobileBtn
        isMobileMenuShown={isMobileMenuShown}
        handleClick={toggleMenu}
      />
      <ContactsList />
      <PhoneLink />
      <SocialMediaList />
      {isMobileMenuShown && <MobileMenu isMobile={isMobileMenuShown} />}
      <Hero />
      <About />
      <Gallery />
    </>
  );
}
