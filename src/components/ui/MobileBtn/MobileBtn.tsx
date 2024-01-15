"use client";

import { FC } from "react";

import { MobileBtnType } from "@/components/ui/MobileBtn/types";

import data from "@/data/mobileMenuBtn.json";

import CloseIcon from "@/public/assets/icons/icon-close.svg";
import MenuIcon from "@/public/assets/icons/icon-menu.svg";

const MobileBtn: FC<MobileBtnType> = ({ isMobileMenuShown, handleClick }) => {
  const { openBtnAriaLabel, closeBtnAriaLabel } = data;

  return (
    <button
      aria-label={isMobileMenuShown ? openBtnAriaLabel : closeBtnAriaLabel}
      className="block h-[24px] w-[40px] px-2 lg:hidden"
      onClick={handleClick}
    >
      {!isMobileMenuShown ? <MenuIcon /> : <CloseIcon />}
    </button>
  );
};

export default MobileBtn;
