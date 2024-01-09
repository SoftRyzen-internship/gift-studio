import { ReactNode } from "react";

export interface SliderProps {
  slides: ReactNode[];
  section: "features" | "feedback" | "gallery" | "services";
}
