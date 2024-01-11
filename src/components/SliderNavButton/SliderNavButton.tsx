import { FC } from "react";

import content from "@/data/gallery.json";
import ArrowIcon from "@/public/assets/icons/icon-arrow-left.svg";
import { cn } from "@/utils/cn";

import { SliderNavButtonProps } from "./types";

const SliderNavButton: FC<SliderNavButtonProps> = ({
  direction = "left",
  onClick,
}) => {
  const { navButtonsAria } = content;
  const ariaNav =
    direction === "left" ? navButtonsAria.left : navButtonsAria.right;

  return (
    <button
      className={cn(
        "h-6 w-6 cursor-pointer text-gray transition hover:text-accent flex-center",
        { "rotate-180": direction === "right" },
      )}
      type="button"
      aria-label={ariaNav}
      onClick={onClick}
    >
      <ArrowIcon className="h-4 w-4 [&>path]:stroke-current" />
    </button>
  );
};

export default SliderNavButton;
