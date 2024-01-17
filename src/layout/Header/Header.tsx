"use client";

import React from "react";

import Logo from "@/components/ui/Logo";
import MobileBtn from "@/components/ui/MobileBtn";
import MobileMenu from "@/components/ui/MobileMenu";
import Navbar from "@/components/ui/NavBar";
import PhoneLink from "@/components/ui/PhoneLink";

const Header = () => {
  const [isMobileMenuShown, setIsMobileMenuShown] = React.useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);

    if (!isMobileMenuShown) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <header className="relative z-20 pb-6 pt-[22px] md:py-9">
        <div className="container flex items-center justify-between">
          <Logo className="lg:mr-[180px]" />
          <Navbar isMobile={false} />
          <PhoneLink
            customStyle={"hidden md:flex md:ml-[139px] md:mr-auto lg:mr-0"}
          />

          <MobileBtn
            handleClick={toggleMenu}
            isMobileMenuShown={isMobileMenuShown}
          />
        </div>
      </header>

      <MobileMenu
        className={!isMobileMenuShown ? "[transform:translateX(100%)]" : ""}
        handleClick={toggleMenu}
        isMobile={true}
      />
    </>
  );
};
export default Header;
