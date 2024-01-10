import { FC } from "react";
import SliderNavButton from "@/components/SliderNavButton";
import { SliderNavigationProps } from "./types";

const SliderNavigation: FC<SliderNavigationProps> = ({ onNext, onPrev }) => {
  return (
    <ul className="flex-center gap-4">
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
