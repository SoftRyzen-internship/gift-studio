import { MdOutlineRateReview } from "react-icons/md";
import { defineField } from "sanity";
import { TBlocks } from "./objects/review";

const reviews2 = {
  name: "reviews2",
  title: "Відгуки21",
  description: "Review Schema",
  type: "document",
  icon: MdOutlineRateReview,
  fields: [
    defineField({
      name: "reviews",
      title: "Відгуки",
      description: "Додайте відгук",
      type: "array",
      of: [
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
          fields: [
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
        }),
      ],
      validation: rule => rule.min(3).error("Додайте принаймні 3 відгуки"),
    }),
  ],
};

export default reviews2;
