"use client";

import { FC } from "react";
import { Link } from "react-scroll";

import { ButtonLinkProps } from "./types";

import { cn } from "@/utils/cn";

const ButtonLink: FC<ButtonLinkProps> = ({
  label,
  targetName,
  variant,
  className,
}) => {
  const styles = {
    primary:
      "text-white text-base font-bold bg-accent py-4 px-6 rounded-[10px] hover:bg-lava",
    outline:
      "text-accent text-base font-bold bg-white py-4 px-6 border-accent border-[1px] rounded-[10px] hover:bg-accent hover:text-white",
    ghost:
      "font-montserrat text-3xl font-normal text-black hover:text-accent focus:text-accent lg:text-base",
  };

  return (
    <Link
      className={cn(
        "cursor-pointer transition block w-fit",
        styles[variant],
        className,
      )}
      to={targetName}
      spy
      smooth
      duration={500}
    >
      {label}
    </Link>
  );
};

export default ButtonLink;
