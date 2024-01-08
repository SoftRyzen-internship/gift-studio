"use client";
import React from "react";
import Navbar from "@/components/ui/NavBar/NavBar";
import Example from "@/components/Example";
import MobileMenu from "@/components/ui/MobileMenu";
import MobileBtn from "@/components/ui/MobileBtn";

export default function Home() {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);
  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);
    document.body.classList.toggle("overflow-hidden", !isMobileMenuShown);
  };
  return (
    <>
      {/* z-index для хедеру */}
      <div className="container bg-green-300 relative z-20">
        <MobileBtn
          isMobileMenuShown={isMobileMenuShown}
          handleClick={toggleMenu}
        />
        <Navbar isMobile={false} />
        <h1 className="text-2xl text-accent">Подарунок</h1>
        <Example />
      </div>
      {/* Для тесту скролу, можна прибрати */}
      <div className="h-[500px] block bg-cyan-600" id="about">
        about
      </div>
      <div className="h-[500px] block bg-red-600" id="faq">
        faq
      </div>
      {isMobileMenuShown && <MobileMenu isMobile={isMobileMenuShown} />}
    </>
  );
}
