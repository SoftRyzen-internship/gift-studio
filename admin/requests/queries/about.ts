import { groq } from "next-sanity";

export const aboutQuery = groq`
   *[_type == "about"]{_id, image}
`;
