"use client";
import { FC } from "react";
import { Link } from "react-scroll";

import { NavDataType, NavPropsType } from "./types";

import data from "@/data/navbar.json";

const Navbar: FC<NavPropsType> = ({ isMobile }) => {
  const desktopStyles = "hidden lg:flex w-fit h-fit";
  const mobileStyles = "lg:hidden flex w-fit h-fit mx-auto";
  return (
    <nav className={!isMobile ? desktopStyles : mobileStyles}>
      <ul className="flex flex-col lg:flex-row gap-6 mx-auto list-none text-center justify-center">
        {data.map(({ text, textRef, id }: NavDataType) => (
          <li key={id}>
            <Link
              className="font-sans font-normal text-black transition hover:text-accent focus:text-accent 
              text-3xl lg:text-base cursor-pointer"
              to={`${textRef}`}
              spy
              smooth
              duration={500}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
