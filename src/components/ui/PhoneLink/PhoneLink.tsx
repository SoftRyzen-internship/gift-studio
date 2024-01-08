"use client";
import React from "react";
import contacts from "@/data/contacts.json";
import PhoneIcon from "@/public/assets/icons/icon-phone.svg";

type phoneLink = {
  customStyle?: string;
};

const PhoneLink = ({ customStyle }: phoneLink) => {
  return (
    <a
      className={"flex items-center gap-2 text-xl " + customStyle}
      href={`tel:${contacts.phoneData.phone}`}
      target="_blank"
      rel="noopener noreferrer nofollow"
      aria-label={contacts.phoneData.ariaLabel}
    >
      <PhoneIcon className="fill-white w-6 h-6" />
      {contacts.phoneData.phone}
    </a>
  );
};

export default PhoneLink;
