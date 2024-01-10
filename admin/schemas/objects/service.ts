import { defineType, defineField } from "sanity";

import { TBlocks } from "./review";

export default defineType({
  name: "service",
  type: "object",
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
    //     const totalLength = blocks.reduce((acc, block) => {
    //       if (
    //         block._type === "block" &&
    //         block.children &&
    //         Array.isArray(block.children)
    //       ) {
    //         block.children.forEach(child => {
    //           if (child.text && typeof child.text === "string") {
    //             acc += child.text.length;
    //           }
    //         });
    //       }

    //       return acc;
    //     }, 0);

    //     const maxLength = 425;

    //     if (totalLength > maxLength || totalLength < 1) {
    //       return `Заголовок обов'язковий і має містити менше ${maxLength} символів`;
    //     }
    //     return true;
    //   }),

    defineField({
      name: "serviceImage",
      type: "accessibleImage",
      title: "Завантажте зображення послуги",
    }),
  ],
  preview: {
    select: {
      title: "serviceName",
      media: "serviceImage",
    },
  },
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
