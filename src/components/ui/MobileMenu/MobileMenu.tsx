"use client";

import { FC } from "react";

import { cn } from "@/utils/cn";

import Navbar from "@/components/ui/NavBar";
import PhoneLink from "@/components/ui/PhoneLink";

import { MobileMenuProps } from "@/components/ui/MobileMenu/types";

const MobileMenu: FC<MobileMenuProps> = ({
  isMobile,
  contacts,
  handleClick,
  className,
}) => {
  return (
    <>
      <div
        className={cn(
          "fixed left-0 top-0 z-10 flex h-full min-w-full flex-col items-center overflow-hidden bg-white pt-[100px] transition-all sm:px-5 md:px-[30px] md:pt-[136px] lg:hidden ",
          className,
        )}
      >
        <div className="pointer-events-auto flex w-full flex-col text-center sm:justify-between">
          <Navbar handleClick={handleClick} isMobile={isMobile} />
          <PhoneLink
            contacts={contacts}
            customStyle={"md:hidden mx-auto mt-[58px]"}
          />
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
