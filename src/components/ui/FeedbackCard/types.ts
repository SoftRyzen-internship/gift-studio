import { IFeedback } from "@/components/FeedbackSlider/types";

export interface FeedbackCardProps {
  content: IFeedback;
  isActiveCard: boolean;
  setActiveCard: () => void;
}
