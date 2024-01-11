"use client";

import { FC } from "react";

import ButtonLink from "@/components/ui/ButtonLink";

import { NavDataType, NavPropsType } from "./types";

import data from "@/data/navbar.json";

const Navbar: FC<NavPropsType> = ({ isMobile }) => {
  const desktopStyles = "hidden lg:flex w-fit h-fit";
  const mobileStyles = "lg:hidden flex w-fit h-fit mx-auto";

  return (
    <nav className={!isMobile ? desktopStyles : mobileStyles}>
      <ul className="mx-auto flex list-none flex-col justify-center gap-6 text-center lg:flex-row ">
        {data.map(({ text, textRef, id }: NavDataType) => (
          <li key={id}>
            <ButtonLink label={text} targetName={textRef} variant="ghost" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
