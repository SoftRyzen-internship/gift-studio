import { groq } from "next-sanity";

export const contactsQuery = groq`
   *[_type == "contacts"]{_id, phone, email, instagram, facebook}
`;
