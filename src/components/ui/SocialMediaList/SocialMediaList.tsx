"use client";

import contacts from "@/data/contacts.json";
import InstagramIcon from "@/public/assets/icons/icon-instagram.svg";
import FacebookIcon from "@/public/assets/icons/icon-facebook.svg";

type socialMediaListType = {
  customListStyle?: string;
};

const SocialMediaList = ({ customListStyle }: socialMediaListType) => {
  const icons = [
    <InstagramIcon
      key={1}
      className="w-6 h-6 transition group-hover:stroke-accent group-focus:stroke-accent"
    />,
    <FacebookIcon
      key={2}
      className="w-6 h-6 transition group-hover:stroke-accent group-focus:stroke-accent"
    />,
  ];
  return (
    <ul
      className={
        !customListStyle
          ? "inline-flex items-start gap-2"
          : "inline-flex items-start gap-2 " + customListStyle
      }
    >
      {contacts.socialLinks.map(({ id, link, ariaLabel }) => (
        <li key={id}>
          <a
            className="transition text-transparent group stroke-black stroke-[1.5px]"
            href={link}
            target="_blank"
            rel="noopener noreferrer nofollow"
            aria-label={ariaLabel}
          >
            {icons[id]}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialMediaList;
