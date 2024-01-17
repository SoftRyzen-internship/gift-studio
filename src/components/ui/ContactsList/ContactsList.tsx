import { FC } from "react";

import PhoneLink from "@/components/ui/PhoneLink";

import { ContactsListType } from "./types";

import { fetchContacts } from "@/admin/requests/fetchContacts";

import EmailIcon from "@/public/assets/icons/icon-mail.svg";

import data from "@/data/contacts.json";

const ContactsList: FC<ContactsListType> = async ({ customListStyle }) => {
  const contacts = await fetchContacts();

  const {
    emailData: { ariaLabel },
  } = data;

  return (
    <ul
      className={
        !customListStyle
          ? "inline-flex flex-col items-center justify-center gap-3 md:flex-row md:gap-[48px]"
          : "inline-flex flex-col gap-3 justify-center items-center md:flex-row md:gap-[48px] " +
            customListStyle
      }
    >
      <li className="flex">
        <PhoneLink customStyle="lg:text-xl leading-[24px]" />
      </li>
      <li className="flex">
        <a
          className="group flex items-center gap-2 stroke-black stroke-[1.5px] text-xl transition hover:text-accent focus:text-accent"
          href={`tel:${contacts.email}`}
          aria-label={ariaLabel}
        >
          <EmailIcon className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent" />
          {contacts.email}
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
