import { TFeedbackCard } from "@/src/types";

export interface FeedbackCardProps {
  content: TFeedbackCard;
  isActiveCard: boolean;
  setActiveCard: () => void;
}
