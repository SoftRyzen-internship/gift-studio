import { defineType } from "sanity";

export default defineType({
  name: "accessibleImage",
  type: "object",
  fields: [
    {
      name: "image",
      type: "image",
      title: "Зображення",
      options: { hotspot: true },
      validation: Rule =>
        Rule.required().custom(imageField => {
          if (!imageField || !imageField.asset) {
            return "Необхідне зображення";
          }

          const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
          const maxWidth = 1920; // Maximum width in pixels
          const maxHeight = 1080; // Maximum height in pixels
          console.log(imageField.asset);
          const fileSize = imageField.asset.size;
          const imageWidth = imageField.asset.metadata.width;
          const imageHeight = imageField.asset.metadata.height;

          if (fileSize > maxSizeInBytes) {
            return "Розмір зображення має бути менший за 5 MB";
          }

          if (imageWidth > maxWidth) {
            return `Ширина зображення має бути менша за ${maxWidth} пікселів`;
          }

          if (imageHeight > maxHeight) {
            return `Висота зображення має бути менша за ${maxHeight} пікселів`;
          }

          return true;
        }),
    },
    {
      name: "alt",
      type: "string",
      title: "Опис зображення2",
      description: "Введіть краткий опис зображення",
      validation: Rule => [Rule.required().error("Необхідний опис зображення")],
      options: {
        isHighlighted: true,
      },
    },
  ],
});
