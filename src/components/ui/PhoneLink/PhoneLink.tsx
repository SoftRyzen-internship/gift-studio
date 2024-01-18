"use client";

import { FC } from "react";

import { PhoneLinkType } from "./types";

import PhoneIcon from "@/public/assets/icons/icon-phone.svg";

import data from "@/data/contacts.json";

const PhoneLink: FC<PhoneLinkType> = ({ contacts, customStyle }) => {
  const {
    phoneData: { ariaLabel },
  } = data;

  return (
    <a
      className={
        !customStyle
          ? "group inline-flex items-center gap-2 stroke-black stroke-[1.5px] text-xl transition hover:text-accent focus:text-accent lg:text-[24px]"
          : "inline-flex items-center gap-2 text-xl lg:text-[24px] transition group hover:text-accent focus:text-accent group stroke-black stroke-[1.5px] " +
            customStyle
      }
      href={`tel:${contacts?.phone}`}
      aria-label={ariaLabel}
    >
      <PhoneIcon className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent" />
      {contacts?.phone}
    </a>
  );
};

export default PhoneLink;
