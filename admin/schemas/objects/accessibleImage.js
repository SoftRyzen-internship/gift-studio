import { defineType, defineField } from "sanity";

export default defineType({
  name: "accessibleImage",
  type: "object",
  fields: [
    defineField({
      name: `image`,
      type: `image`,
      title: "Зображення",
      description: "Завантажте зображення не менш ніж 1200x630 пікселів",
      options: {
        hotspot: true,
      },
      // validation: rule =>
      //   rule.custom(value => {
      //     if (!value) {
      //       return false;
      //     }
      //     return true;
      //   }),
    }),
    defineField({
      name: "alt",
      type: "string",
      title: "Опис зображення",
      description: "Введіть краткий опис зображення",
      // validation: rule => rule.required(),
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
