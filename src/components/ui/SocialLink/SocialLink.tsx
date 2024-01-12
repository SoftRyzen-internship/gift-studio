import { FC } from "react";

import { SocialLinkProps } from "./types";

import { cn } from "@/utils";

import content from "@/data/common.json";

const SocialLink: FC<SocialLinkProps> = ({
  username,
  className,
  socialLink,
  children,
}) => {
  const instagramLink = content.instagramLink.concat(username);

  return (
    <a
      className={cn("social-link transition font-medium", className)}
      href={!socialLink ? instagramLink : socialLink}
      target="_blank"
      title={username}
      rel="noopener noreferrer nofollow"
    >
      {!children && `@${username}`}
      {children && children}
    </a>
  );
};

export default SocialLink;
