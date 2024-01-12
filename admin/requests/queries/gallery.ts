import { groq } from "next-sanity";

export const galleryQuery = groq`
  *[_type == "photoGallery"]{
    images[]{
      image,
      alt,
      "id": _key
    }
  }[0].images
`;
