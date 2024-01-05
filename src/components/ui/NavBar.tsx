import { Link } from "react-scroll";

import React from "react";
import data from "../../lib/navbar.json";

type navProps = { text: string; textRef: string; id: number };

const Navbar = () => {
  return (
    <nav className="flex flex-col  lg:flex-row">
      <ul className="flex flex-col lg:flex-row gap-6 list-none text-center">
        {data.map(({ text, textRef, id }: navProps) => (
          <li key={id} className="">
            <Link
              className="font-sans font-normal text-black hover:text-accent focus:text-accent 
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
