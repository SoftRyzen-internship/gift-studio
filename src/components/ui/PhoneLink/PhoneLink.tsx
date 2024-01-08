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
          ? "flex items-center gap-2 text-xl transition group hover:text-accent focus:text-accent"
          : "flex items-center gap-2 text-xl transition group hover:text-accent focus:text-accent" +
            customStyle
      }
      href={`tel:${contacts.phoneData.phone}`}
      aria-label={contacts.phoneData.ariaLabel}
    >
      <PhoneIcon className="w-6 h-6 fill-current text-white transition group-hover:text-accent" />
      {contacts.phoneData.phone}
    </a>
  );
};

export default PhoneLink;
