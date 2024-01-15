import { TImage } from "@/types";
import { PortableTextBlock } from "sanity";

export interface IFeedback {
  image: TImage;
  text: PortableTextBlock[];
  id: string;
  reviewName: string;
}

export interface FeedbackSliderProps {
  feedbacks: IFeedback[];
}
