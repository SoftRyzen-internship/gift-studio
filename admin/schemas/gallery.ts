import { LuFlower2 } from "react-icons/lu";
import { defineField } from "sanity";

const gallery2 = {
  name: "gallery2",
  title: "Галерея",
  description: "Gallery Schema",
  type: "document",
  icon: LuFlower2,
  fields: [
    defineField({
      name: "name",
      title: "Заголовок галереї",
      description: "Введіть заголовок відгука",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Завантажте зображення відгука",
      of: [{ type: "image" }],
      validation: rule =>
        rule
          .min(1)
          .error("Додайте принаймні одне зображення")
          .max(2)
          .error("Не додавайте більше 2 зображень"), // Adjust the maximum number as needed
    }),
  ],
};

export default gallery2;
