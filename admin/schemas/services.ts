import { defineField } from "sanity";

const services = {
  name: "services",
  title: "Послуги",
  description: "Services Schema",
  type: "document",
  fields: [
    defineField({
      name: "services",
      title: "Послуги",
      description: "Додайте послуги",
      type: "array",
      of: [{ type: "service" }],
      validation: rule => rule.min(1).error("Додайте принаймні 1 послугу"),
    }),
  ],
};

export default services;
