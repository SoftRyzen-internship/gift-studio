import { defineField } from "sanity";

import { TBlocks } from "@/types";

const feedbacks = {
  name: "feedbacks",
  title: "Відгуки",
  description: "Review Schema",
  type: "document",
  fields: [
    defineField({
      name: "reviews",
      title: "Відгуки",
      description: "Додайте відгук",
      type: "array",
      of: [
        defineField({
          name: "review",
          title: "Відгук",
          type: "object",
          description: "Додайте відгук",
          fields: [
            defineField({
              name: "reviewName",
              title: "Заголовок відгука",
              description: "Введіть заголовок відгука",
              type: "string",
              validation: rule =>
                rule
                  .required()
                  .error("Заголовок обов'язковий")
                  .min(3)
                  .error("Введіть заголовок, який містить хоча б 3 символи")
                  .max(20)
                  .error(
                    "Введіть заголовок, який містить не більше 20 символів",
                  ),
            }),
            defineField({
              name: "image",
              title: "Зображення",
              type: "image",
              description: "Upload Зображення",
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
              title: "Alt",
              type: "string",
              validation: rule =>
                rule.required().error("Alt є обов'язковим полем"),
            }),
            defineField({
              name: "text",
              title: "Текст відгука",
              type: "array",
              description: "Напишіть повний текст для цього відгука",
              of: [{ type: "block" }],
              validation: Rule =>
                Rule.custom((blocks: TBlocks) => {
                  if (!blocks || !Array.isArray(blocks)) {
                    return "Description must be an array of blocks";
                  }
                  const totalLength = blocks.reduce((acc, block) => {
                    if (
                      block._type === "block" &&
                      block.children &&
                      Array.isArray(block.children)
                    ) {
                      block.children.forEach(child => {
                        if (child.text && typeof child.text === "string") {
                          acc += child.text.length;
                        }
                      });
                    }

                    return acc;
                  }, 0);

                  const maxLength = 425;

                  if (totalLength > maxLength || totalLength < 1) {
                    return `Загальна довжина тексту блоків повинна бути заповнена й містити менше ${maxLength} символів`;
                  }
                  return true;
                }),
            }),
          ],
          validation: rule =>
            rule.required().error("Додайте принаймні 3 відгуки"),
        }),
      ],
      validation: rule => rule.min(3).error("Додайте принаймні 3 відгуки"),
    }),
  ],
};

export default feedbacks;
