import { FC } from "react";

import { SocialLinkProps } from "./types";

import { cn } from "@/utils";

import content from "@/data/common.json";

const SocialLink: FC<SocialLinkProps> = ({ username, className }) => {
  const link = content.instagramLink;
  const instagramLink = link.concat(username);

  return (
    <a
      className={cn("social-link transition font-medium", className)}
      href={instagramLink}
      target="_blank"
      title={username}
      rel="noopener noreferrer nofollow"
    >
      {`@${username}`}
    </a>
  );
};

export default SocialLink;
