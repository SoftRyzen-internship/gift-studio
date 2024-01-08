import { FC } from "react";
import { cn } from "@/utils/cn";
import { SectionHeadingProps } from "./types";

const SectionHeading: FC<SectionHeadingProps> = ({ className, title }) => {
  return (
    <h2
      className={cn(
        "text-4xl md:text-5xl lg:text-7xl text-accent text-center font-display font-normal",
        className,
      )}
    >
      {title}
    </h2>
  );
};

export default SectionHeading;
