"use client";

import { FC } from "react";

import Navbar from "@/components/ui/NavBar";

import { NavPropsType } from "@/components/ui/NavBar/types";

const MobileMenu: FC<NavPropsType> = ({ isMobile }) => {
  return (
    <>
      <div
        className="fixed left-0 top-0 z-10 flex h-full min-w-full flex-col
        items-center overflow-hidden bg-white pt-[100px] sm:px-[20px] md:px-[30px] md:pt-[136px] lg:hidden"
      >
        <div className="pointer-events-auto mb-[64px] flex w-full flex-col text-center sm:mb-[40px] sm:justify-between">
          <Navbar isMobile={isMobile} />
          <a
            className="mt-[58px] inline-block md:hidden"
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
