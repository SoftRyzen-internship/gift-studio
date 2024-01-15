// import { TImage } from "@/types";
// import { PortableTextBlock } from "sanity";

export interface FeedbackCardProps {
  // content: { image: TImage; text: PortableTextBlock[]; id: string };
  content: any;
  isActiveCard: boolean;
  setActiveCard: () => void;
}
