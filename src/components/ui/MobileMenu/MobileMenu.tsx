"use client";
import React from "react";
import Navbar from "../NavBar/NavBar";

type navProps = {
  isMobile: boolean;
};

const MobileMenu = ({ isMobile }: navProps) => {
  return (
    <>
      <div
        className="min-w-full h-full fixed top-0 left-0 overflow-hidden bg-white pt-[16px] z-50 
        flex flex-col items-center lg:hidden sm:pt-[24px] sm:px-[20px] md:px-[30px] md:pt-[36px]"
      >
        <div className="flex sm:justify-between w-full pointer-events-auto sm:mb-[40px] mb-[64px]"></div>

        <Navbar isMobile={isMobile} />
        <a
          className="inline-block mt-[58px] md:hidden"
          href="tel:+380981234567"
        >
          +380981234567
        </a>
      </div>
    </>
  );
};

export default MobileMenu;
