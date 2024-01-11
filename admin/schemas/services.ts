import { defineField } from "sanity";
import { TBlocks } from "./reviews";

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
      of: [
        defineField({
          name: "service",
          title: "Послуга",
          type: "object",
          description: "Додайте послугу",
          fields: [
            defineField({
              name: "serviceName",
              title: "Заголовок послуги",
              description: "Введіть заголовок послуги",
              type: "array",
              of: [{ type: "block" }],
              validation: Rule =>
                Rule.custom((blocks: TBlocks) => {
                  if (!blocks || !Array.isArray(blocks)) {
                    return "Заголовок обов'язковий";
                  }
                  return true;
                }),
            }),
            defineField({
              name: "serviceUrl",
              title: "Посилання",
              description:
                "Введіть посилання на додаткову інформацію про послугу",
              type: "string",
              validation: rule =>
                rule.required().error("Посилання є обов'язковим полем"),
            }),
            defineField({
              name: "image",
              title: "Зображення",
              type: "image",
              description: "Завантажте зображення",
              options: { hotspot: true },
              validation: rule =>
                rule.required().custom(value => {
                  if (!value || !value.asset) {
                    return "Зображення є обов'язковим полем";
                  }
                  return true;
                }),
            }),
            defineField({
              name: "alt",
              title: "Опис зображення",
              type: "string",
              validation: rule =>
                rule.required().error("Опис зображення є обов'язковим полем"),
            }),
          ],
          preview: {
            select: {
              title: "serviceName",
              media: "image",
            },
          },
          validation: rule =>
            rule.required().error("Додайте принаймні 1 послугу"),
        }),
      ],
      validation: rule => rule.min(1).error("Додайте принаймні 1 послугу"),
    }),
  ],
};

export default services;
