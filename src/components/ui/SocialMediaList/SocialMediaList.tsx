"use client";

import { FC } from "react";

import SocialLink from "@/components/ui/SocialLink";

import {
  SocialMediaLinkProps,
  SocialMediaListType,
} from "@/components/ui/SocialMediaList/types";

import { cn } from "@/utils/cn";

import FacebookIcon from "@/public/assets/icons/icon-facebook.svg";
import InstagramIcon from "@/public/assets/icons/icon-instagram.svg";

import contacts from "@/data/contacts.json";

const SocialMediaList: FC<SocialMediaListType> = ({ customListStyle }) => {
  const icons = [
    <InstagramIcon
      key={1}
      className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent"
    />,
    <FacebookIcon
      key={2}
      className="h-6 w-6 transition group-hover:stroke-accent group-focus:stroke-accent"
    />,
  ];

  return (
    <ul className={cn("inline-flex items-start gap-2", customListStyle)}>
      {contacts.socialLinks.map(
        ({ id, link, ariaLabel }: SocialMediaLinkProps) => (
          <li key={id}>
            <SocialLink
              username={ariaLabel}
              className="group stroke-black stroke-[1.5px] text-transparent transition"
              socialLink={link}
              ariaLabel={ariaLabel}
            >
              {icons[id]}
            </SocialLink>
          </li>
        ),
      )}
    </ul>
  );
};

export default SocialMediaList;
