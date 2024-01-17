import { FC } from "react";

import SliderNavButton from "@/components/ui/SliderNavButton";

import { SliderNavigationProps } from "./types";

const SliderNavigation: FC<SliderNavigationProps> = ({ onNext, onPrev }) => {
  return (
    <ul className="flex-center max-md:h-6 max-md:gap-0 md:gap-4">
      <li key="prev">
        <SliderNavButton onClick={onPrev} />
      </li>
      <li key="next">
        <SliderNavButton direction="right" onClick={onNext} />
      </li>
    </ul>
  );
};

export default SliderNavigation;
