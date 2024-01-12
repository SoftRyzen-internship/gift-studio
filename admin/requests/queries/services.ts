import { groq } from "next-sanity";

export const servicesQuery = groq`
     *[_type == "serviceList"] { services[]
    {
      image, alt, serviceUrl, serviceName, "id": _key
    }
  }[0].services
`;
