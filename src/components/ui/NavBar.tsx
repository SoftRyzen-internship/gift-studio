import { Link } from "react-scroll";

import React from "react";
import data from "../../data/navbar.json";
type navData = {
  text: string;
  textRef: string;
  id: number;
};
type navProps = {
  isMobile: boolean;
};

const Navbar = ({ isMobile }: navProps) => {
  return (
    <nav className={!isMobile ? "hidden lg:flex" : "lg:hidden flex "}>
      <ul className="flex flex-col lg:flex-row gap-6 mx-auto list-none text-center justify-center">
        {data.map(({ text, textRef, id }: navData) => (
          <li key={id} className="">
            <Link
              className="font-sans font-normal text-black transition hover:text-accent focus:text-accent 
              text-3xl lg:text-base"
              to={textRef}
              spy
              smooth
              duration={500}
              href="#"
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
