import { FC } from "react";

import { SocialLinkProps } from "./types";

import { cn } from "@/src/utils";
import { fetchContacts } from "@/admin/requests/fetchContacts";

const SocialLink: FC<SocialLinkProps> = async ({
  username,
  className,
  socialLink,
  tabIndex = 0,
  children,
  ariaLabel,
}) => {
  const contacts = await fetchContacts();

  const link = contacts?.instagram;

  const instagramLink = link.concat(username);

  return (
    <a
      className={cn("social-link transition font-medium", className)}
      href={!socialLink ? instagramLink : socialLink}
      target="_blank"
      title={username}
      tabIndex={tabIndex}
      aria-label={ariaLabel}
      rel="noopener noreferrer nofollow"
    >
      {!children && `@${username}`}
      {children && children}
    </a>
  );
};

export default SocialLink;
