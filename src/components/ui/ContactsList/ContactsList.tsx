"use client";

import PhoneLink from "@/components/ui/PhoneLink";

import { ContactsListType } from "./types";

import EmailIcon from "@/public/assets/icons/icon-mail.svg";

import contacts from "@/data/contacts.json";

const ContactsList = ({ customListStyle }: ContactsListType) => {
  const {
    emailData: { email, ariaLabel },
  } = contacts;

  return (
    <ul
      className={
        !customListStyle
          ? "inline-flex flex-col gap-3 justify-center items-center md:flex-row md:gap-[48px]"
          : "inline-flex flex-col gap-3 justify-center items-center md:flex-row md:gap-[48px] " +
            customListStyle
      }
    >
      <li>
        <PhoneLink />
      </li>
      <li>
        <a
          className="flex items-center gap-2 text-xl transition group hover:text-accent focus:text-accent group stroke-black stroke-[1.5px]"
          href={`tel:${email}`}
          aria-label={ariaLabel}
        >
          <EmailIcon className="w-6 h-6 transition group-hover:stroke-accent group-focus:stroke-accent" />
          {email}
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
