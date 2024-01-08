import { ReactNode } from "react";

export interface SliderProps {
  data: ReactNode[];
  sliderClass: string;
  slideClass: string;
  sectionId: "features" | "feedback" | "gallery";
}
