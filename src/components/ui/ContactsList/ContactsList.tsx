"use client";

import PhoneLink from "@/components/ui/PhoneLink";
import contacts from "@/data/contacts.json";
import EmailIcon from "@/public/assets/icons/icon-mail.svg";

import { ContactsListType } from "./types";

const ContactsList = ({ customListStyle }: ContactsListType) => {
  const {
    emailData: { email, ariaLabel },
  } = contacts;

  return (
    <ul
      className={
        !customListStyle
          ? "inline-flex flex-col items-center justify-center gap-3 md:flex-row md:gap-[48px]"
          : "inline-flex flex-col gap-3 justify-center items-center md:flex-row md:gap-[48px] " +
            customListStyle
      }
    >
      <li>
        <PhoneLink />
      </li>
      <li>
        <a
          className="group flex items-center gap-2 stroke-black stroke-[1.5px] text-xl transition hover:text-accent focus:text-accent"
          href={`tel:${email}`}
          aria-label={ariaLabel}
        >
          <EmailIcon className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent" />
          {email}
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
