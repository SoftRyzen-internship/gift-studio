"use client";

import React from "react";

import Navbar from "@/components/ui/NavBar";
import Example from "@/components/Example";
import MobileMenu from "@/components/ui/MobileMenu";
import MobileBtn from "@/components/ui/MobileBtn";
import AboutSection from "@/sections/AboutSection";
import GallerySection from "@/sections/GallerySection";

export default function Home() {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuShown);
  };

  return (
    <>
      <div className="container bg-green-300 relative z-20">
        <MobileBtn
          isMobileMenuShown={isMobileMenuShown}
          handleClick={toggleMenu}
        />
        <Navbar isMobile={isMobileMenuShown} />
        <h1 className="text-2xl text-accent">Подарунок</h1>
        <Example />
      </div>

      {isMobileMenuShown && <MobileMenu isMobile={isMobileMenuShown} />}
      <AboutSection />
      <GallerySection />
    </>
  );
}
