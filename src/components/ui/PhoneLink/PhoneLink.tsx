"use client";
import React from "react";
import contacts from "@/data/contacts.json";
import PhoneIcon from "@/public/assets/icons/icon-phone.svg";

type phoneLinkType = {
  customStyle?: string;
};

const PhoneLink = ({ customStyle }: phoneLinkType) => {
  return (
    <a
      className={
        !customStyle
          ? "inline-flex items-center gap-2 text-xl transition group hover:text-accent focus:text-accent group stroke-black stroke-[1.5px]"
          : "inline-flex items-center gap-2 text-xl transition group hover:text-accent focus:text-accent group stroke-black stroke-[1.5px]" +
            customStyle
      }
      href={`tel:${contacts.phoneData.phone}`}
      aria-label={contacts.phoneData.ariaLabel}
    >
      <PhoneIcon className="w-6 h-6 transition group-hover:stroke-accent group-focus:stroke-accent" />
      {contacts.phoneData.phone}
    </a>
  );
};

export default PhoneLink;
