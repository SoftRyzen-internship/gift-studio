"use client";
import PhoneLink from "../PhoneLink";
import contacts from "@/data/contacts.json";
import EmailIcon from "@/public/assets/icons/icon-mail.svg";

type contactsList = {
  customListStyle?: string;
};

const ContactsList = ({ customListStyle }: contactsList) => {
  return (
    <ul
      className={
        !customListStyle
          ? "inline-flex flex-col gap-3 justify-center items-center md:flex-row md:gap-[48px]"
          : "inline-flex flex-col gap-3 justify-center items-center md:flex-row md:gap-[48px]" +
            customListStyle
      }
    >
      <li>
        <PhoneLink />
      </li>
      <li>
        <a
          className="flex items-center gap-2 text-xl"
          href={`tel:${contacts.emailData.email}`}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={contacts.emailData.ariaLabel}
        >
          <EmailIcon className="w-6 h-6 fill-white" />
          {contacts.emailData.email}
        </a>
      </li>
    </ul>
  );
};

export default ContactsList;
