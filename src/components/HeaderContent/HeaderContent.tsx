"use client";

import React, { FC, useState } from "react";

import MobileBtn from "@/components/ui/MobileBtn";
import MobileMenu from "@/components/ui/MobileMenu";

import { THeaderContent } from "./types";

const HeaderContent: FC<THeaderContent> = ({ phoneNumber }) => {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuShown(prevState => !prevState);

    if (!isMobileMenuShown) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <>
      <MobileBtn
        handleClick={toggleMenu}
        isMobileMenuShown={isMobileMenuShown}
      />
      {phoneNumber && (
        <MobileMenu
          phoneNumber={phoneNumber}
          className={!isMobileMenuShown ? "[transform:translateX(100%)]" : ""}
          handleClick={toggleMenu}
        />
      )}
    </>
  );
};

export default HeaderContent;
