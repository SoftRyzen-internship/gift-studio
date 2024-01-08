"use client";
import React from "react";

type MobileBtnProps = {
  isMobileMenuShown: boolean;
  handleClick: () => void;
};

const MobileBtn = ({ isMobileMenuShown, handleClick }: MobileBtnProps) => {
  return (
    <button className="w-[24px] h-[24px] block lg:hidden" onClick={handleClick}>
      {!isMobileMenuShown ? "|||" : "X"}
    </button>
  );
};

export default MobileBtn;
