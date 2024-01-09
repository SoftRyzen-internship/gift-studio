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
        className="min-w-full h-full fixed top-0 left-0 overflow-hidden bg-white z-10 
        flex flex-col items-center lg:hidden pt-[100px] sm:px-[20px] md:px-[30px] md:pt-[136px]"
      >
        <div className="flex flex-col text-center sm:justify-between w-full pointer-events-auto sm:mb-[40px] mb-[64px]">
          <Navbar isMobile={isMobile} />
          <a
            className="inline-block mt-[58px] md:hidden"
            href="tel:+380981234567"
          >
            +380981234567
          </a>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
