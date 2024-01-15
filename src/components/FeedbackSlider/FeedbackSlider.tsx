import { FC } from "react";

import Slider from "@/components/Slider";
import FeedbackCard from "@/components/ui/FeedbackCard";

import { FeedbackSliderProps } from "./types";

const FeedbackSlider: FC<FeedbackSliderProps> = ({ feedbacks }) => {
  const feedbackSlides = feedbacks.map(feedback => (
    <FeedbackCard key={feedback.text} content={feedback} />
  ));

  return <Slider slides={feedbackSlides} section="feedback" />;
};

export default FeedbackSlider;
