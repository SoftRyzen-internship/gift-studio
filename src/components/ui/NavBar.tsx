import { Link } from "react-scroll";

import React from "react";
import data from "@/data/navbar.json";
type navData = {
  text: string;
  textRef: string;
  id: number;
};
type navProps = {
  isMobile: boolean;
};

const Navbar = ({ isMobile }: navProps) => {
  const desktopStyles = "hidden lg:flex lg:w-max[508px] lg:h-max[20px]";
  const mobileStyles = "lg:hidden flex w-max-[123px] h-max-[294px] mx-auto ";
  return (
    <nav className={!isMobile ? desktopStyles : mobileStyles}>
      <ul className="flex flex-col lg:flex-row gap-6 mx-auto list-none text-center justify-center ">
        {data.map(({ text, textRef, id }: navData) => (
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
