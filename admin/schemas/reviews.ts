import { MdOutlineRateReview } from "react-icons/md";
import { defineField } from "sanity";

const reviews = {
  name: "reviews",
  title: "Відгуки",
  description: "Review Schema",
  type: "document",
  icon: MdOutlineRateReview,
  fields: [
    defineField({
      name: "reviews",
      title: "Відгуки",
      description: "Додайте відгук",
      type: "array",
      of: [{ type: "review" }],
      validation: rule => rule.min(3).error("Додайте принаймні 3 відгуки"),
    }),
  ],
};

export default reviews;
