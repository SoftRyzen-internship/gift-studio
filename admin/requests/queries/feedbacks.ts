import { groq } from "next-sanity";

export const feedbackQuery = groq`
  *[_type == "feedbacks"]{
    reviews[]{
      image, alt, text, "id": _key
    }
  }[0].reviews
`;
