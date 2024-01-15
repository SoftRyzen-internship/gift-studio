import { fetchFeedbacks } from "admin/requests/fetchFeedbacks";

import Slider from "@/components/Slider";
import FeedbackCard from "@/components/ui/FeedbackCard";

const FeedbackSlider = async () => {
  const feedbacks = await fetchFeedbacks();

  const feedbackSlides = feedbacks.map(feedback => (
    <FeedbackCard
      key={feedback.id}
      content={feedback}
      // isActive={isActive}
      // setIsActive={setIsActive}
    />
  ));

  return <Slider slides={feedbackSlides} section="feedback" />;
};

export default FeedbackSlider;
