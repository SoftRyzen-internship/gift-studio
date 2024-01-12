import FeedbackSlider from "@/components/FeedbackSlider";
import SectionHeading from "@/components/typography/SectionHeading";

import content from "@/data/feedback.json";

const Feedback = () => {
  const { id, title, feedbacks } = content;

  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeading title={title} />
        <FeedbackSlider feedbacks={feedbacks} />
      </div>
    </section>
  );
};

export default Feedback;
