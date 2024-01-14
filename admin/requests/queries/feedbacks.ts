import { groq } from "next-sanity";

export const feedbackQuery = groq`
  *[_type == "feedbacks"] {
    reviews[]{
      "image": {
        alt,
        "src":image.asset->url,
        "lqip":image.asset->metadata.lqip,
      },
      text,
      "id": _key
    }
  }[0].reviews
`;
