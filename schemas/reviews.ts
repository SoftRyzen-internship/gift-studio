import { MdOutlineRateReview } from "react-icons/md";
import { defineField } from "sanity";

interface TextBlock {
  _type: string;
  children?: Array<{ text?: string }>;
}

type TBlocks = TextBlock[] | undefined;

const review = {
  name: "review",
  title: "Відгуки",
  description: "Review Schema",
  type: "document",
  icon: MdOutlineRateReview,
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
      // validation: rule =>
      //   rule.custom((value, context) => {
      //     if (!value) {
      //       return "Зображення обов'язкове";
      //     }
      //     console.log("🚀 ~ file: reviews.ts:32 ~ value:", value);

      //     return true; // Validation passed
      //   }),
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
};

export default review;
