"use client";
import PhoneLink from "../PhoneLink";
import contacts from "@/data/contacts.json";
import EmailIcon from "@/public/assets/icons/icon-mail.svg";

type contactsListType = {
  customListStyle?: string;
};

const ContactsList = ({ customListStyle }: contactsListType) => {
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
          href={`tel:${contacts.emailData.email}`}
          aria-label={contacts.emailData.ariaLabel}
        >
          <EmailIcon className="w-6 h-6 transition group-hover:stroke-accent group-focus:stroke-accent" />
          {contacts.emailData.email}
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
