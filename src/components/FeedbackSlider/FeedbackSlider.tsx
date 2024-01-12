import { FC } from "react";

import Slider from "@/components/Slider";

import { FeedbackSliderProps } from "./types";

const FeedbackSlider: FC<FeedbackSliderProps> = ({ feedbacks }) => {
  const feedbackSlides = feedbacks.map(({ title, imagePath, alt }) => (
    <div
      key={title}
      className="h-full w-full flex flex-col place-content-center gap-4 bg-slate-400 rounded-3xl text-center p-6"
    >
      <p>{title}</p>
      <p>{imagePath}</p>
      <p>{alt}</p>
    </div>
  ));

  return <Slider slides={feedbackSlides} section="feedback" />;
};

export default FeedbackSlider;
