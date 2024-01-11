"use client";

import { FC } from "react";
import { Link } from "react-scroll";
import { cn } from "@/utils/cn";

import { ButtonLinkProps } from "./types";

const ButtonLink: FC<ButtonLinkProps> = ({
  label,
  targetName,
  variant,
  className,
  handleClick,
}) => {
  const styles = {
    primary:
      "text-white text-base font-bold bg-accent py-4 px-6 rounded-[10px] hover:bg-lava",
    outline:
      "text-accent text-base font-bold bg-white py-4 px-6 rounded-[10px] hover:bg-accent hover:text-white",
    ghost:
      "font-montserrat text-3xl font-normal text-black hover:text-accent focus:text-accent lg:text-base",
  };

  return (
    <Link
      onClick={handleClick}
      className={cn(
        "cursor-pointer transition inline-block",
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
