import { defineType, defineField } from "sanity";

interface TextBlock {
  _type: string;
  children?: Array<{ text?: string }>;
}

type TBlocks = TextBlock[] | undefined;

export default defineType({
  name: "review",
  type: "object",
  fields: [
    defineField({
      name: "name",
      title: "Заголовок відгука",
      description: "Введіть заголовок відгука",
      type: "string",
      validation: rule => rule.required(),
    }),
    defineField({
      name: "image",
      type: "accessibleImage",
      title: "Завантажте зображення відгука",
    }),
    defineField({
      name: "description",
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

          const maxLength = 10;

          if (totalLength > maxLength || totalLength < 1) {
            return `Загальна довжина тексту блоків повинна бути заповнена й менше ${maxLength} символів`;
          }
          return true;
        }),
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
