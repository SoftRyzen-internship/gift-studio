"use client";
import React from "react";
import CloseIcon from "@/public/assets/icons/icon-close.svg";
import MenuIcon from "@/public/assets/icons/icon-menu.svg";

type MobileBtnProps = {
  isMobileMenuShown: boolean;
  handleClick: () => void;
};

const MobileBtn = ({ isMobileMenuShown, handleClick }: MobileBtnProps) => {
  return (
    <button className="w-[24px] h-[24px] block lg:hidden" onClick={handleClick}>
      {!isMobileMenuShown ? <MenuIcon /> : <CloseIcon />}
    </button>
  );
};

export default MobileBtn;
