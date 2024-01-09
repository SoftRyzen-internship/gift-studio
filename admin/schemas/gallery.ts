import { defineField } from "sanity";

const gallery = {
  name: "gallery",
  title: "Галерея",
  description: "Gallery Schema",
  type: "document",
  fields: [
    defineField({
      name: "images",
      type: "array",
      title: "Завантажте зображення для галереї",
      of: [{ type: "accessibleImage" }],
      validation: rule => rule.min(6).error("Додайте принаймні 6 зображень"),
    }),
  ],
};

export default gallery;
