"use client";

import contacts from "@/data/contacts.json";
import InstagramIcon from "@/public/assets/icons/icon-instagram.svg";
import FacebookIcon from "@/public/assets/icons/icon-facebook.svg";

type socialMediaList = {
  customListStyle?: string;
};

const SocialMediaList = ({ customListStyle }: socialMediaList) => {
  const icons = [
    <InstagramIcon key={1} className="w-6 h-6" />,
    <FacebookIcon key={2} className="w-6 h-6" />,
  ];
  return (
    <ul
      className={
        !customListStyle
          ? "inline-flex items-start gap-2"
          : "inline-flex items-start gap-2" + customListStyle
      }
    >
      {contacts.socialLinks.map(({ id, link }) => (
        <li key={id}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={contacts.emailData.ariaLabel}
          >
            {icons[id]}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
