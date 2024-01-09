import React from "react";

import ButtonLink from "@/components/ui/ButtonLink";
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
  const mobileStyles = "lg:hidden flex w-max-[123px] h-max-[294px] mx-auto";
  return (
    <nav className={!isMobile ? desktopStyles : mobileStyles}>
      <ul className="mx-auto flex list-none flex-col justify-center gap-6 text-center lg:flex-row ">
        {data.map(({ text, textRef, id }: navData) => (
          <li key={id}>
            <ButtonLink label={text} elementName={textRef} variant="ghost" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
