"use client";

import { FC } from "react";

import { PhoneLinkType } from "./types";

import PhoneIcon from "@/public/assets/icons/icon-phone.svg";

import contacts from "@/data/contacts.json";

const PhoneLink: FC<PhoneLinkType> = ({ customStyle }) => {
  const {
    phoneData: { phone, ariaLabel },
  } = contacts;

  return (
    <a
      className={
        !customStyle
          ? "group inline-flex items-center gap-2 stroke-black stroke-[1.5px] text-xl transition hover:text-accent focus:text-accent"
          : "inline-flex items-center gap-2 text-xl transition group hover:text-accent focus:text-accent group stroke-black stroke-[1.5px] " +
            customStyle
      }
      href={`tel:${phone}`}
      aria-label={ariaLabel}
    >
      <PhoneIcon className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent" />
      {phone}
    </a>
  );
};

export default PhoneLink;
