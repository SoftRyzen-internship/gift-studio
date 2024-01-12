interface IFeedback {
  title: string;
  imagePath: string;
  alt: string;
}

export interface FeedbackSliderProps {
  feedbacks: IFeedback[];
}
