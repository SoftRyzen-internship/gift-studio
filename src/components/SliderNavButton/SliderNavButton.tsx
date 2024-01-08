"use client";
import { cn } from "@/utils/cn";
import { FC } from "react";
import { navButtonsAria } from "@/data/gallery.json";
import { SliderNavButtonProps } from "./types";
import ArrowIcon from "@/public/assets/icons/icon-arrow-left.svg";

const SliderNavButton: FC<SliderNavButtonProps> = ({
  direction = "left",
  onClick,
}) => {
  const ariaNav =
    direction === "left" ? navButtonsAria.left : navButtonsAria.right;
  return (
    <li>
      <button
        className={cn(
          "h-6 w-6 cursor-pointer text-gray transition hover:text-accent",
          { "rotate-180": direction === "right" },
        )}
        type="button"
        aria-label={ariaNav}
        onClick={onClick}
      >
        <ArrowIcon className="h-4 w-4  [&>path]:stroke-current" />
      </button>
    </li>
  );
};

export default SliderNavButton;
