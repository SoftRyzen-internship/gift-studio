"use client";

import { FC } from "react";

import { MobileBtnType } from "@/components/ui/MobileBtn/types";

import CloseIcon from "@/public/assets/icons/icon-close.svg";
import MenuIcon from "@/public/assets/icons/icon-menu.svg";

const MobileBtn: FC<MobileBtnType> = ({ isMobileMenuShown, handleClick }) => {
  return (
    <button className="block h-[24px] w-[24px] lg:hidden" onClick={handleClick}>
      {!isMobileMenuShown ? <MenuIcon /> : <CloseIcon />}
    </button>
  );
};

export default MobileBtn;
