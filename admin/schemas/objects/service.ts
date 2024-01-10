import { defineType, defineField } from "sanity";

export default defineType({
  name: "service",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Заголовок послуги",
      description: "Введіть заголовок послуги",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "image",
      type: "accessibleImage",
      title: "Завантажте зображення послуги",
    }),
  ],
  // validation: rule =>
  //   rule.custom((value, context) => {
  //     if (!value || !value.image) {
  //       return "Зображення обов'язкове";
  //     }
  //     if (!value.alt) {
  //       return "Опис зображення обов'язковий";
  //     }
  //     return true;
  //   }),
});
