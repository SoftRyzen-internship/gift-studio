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
            return "Image is required";
          }

          const maxSizeInBytes = 5 * 1024 * 1024; // 5 MB
          const maxWidth = 1920; // Maximum width in pixels
          const maxHeight = 1080; // Maximum height in pixels

          const fileSize = imageField.asset.size;
          const imageWidth = imageField.asset.metadata.width;
          const imageHeight = imageField.asset.metadata.height;

          if (fileSize > maxSizeInBytes) {
            return "Image size must be less than 5 MB";
          }

          if (imageWidth > maxWidth) {
            return `Image width must be less than ${maxWidth} pixels`;
          }

          if (imageHeight > maxHeight) {
            return `Image height must be less than ${maxHeight} pixels`;
          }

          return true;
        }),
    },
    {
      name: "alt",
      type: "string",
      title: "Опис зображення",
      description: "Введіть опис зображення",
      validation: Rule => [Rule.required().error("Alt text is required")],
      // hidden: ({ parent }) => !parent?.asset,
      options: {
        isHighlighted: true,
      },
    },
  ],
});
