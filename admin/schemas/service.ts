import { FaHandHolding } from "react-icons/fa";

const service = {
  name: "service",
  title: "Послуги",
  description: "Service Schema",
  type: "document",
  icon: FaHandHolding,
  fields: [
    {
      name: "serviceName",
      title: "Назва послуги",
      type: "string",
      description: "Введіть назву послуги",
    },

    {
      name: "url",
      title: "URL послуги",
      description: "Введіть http-адресу послуги",
      type: "url",
    },

    {
      name: "image",
      title: "Distributor image",
      type: "accessibleImage",
      description: "Add an image or logo of the distributor",
    },
  ],
};

export default service;
