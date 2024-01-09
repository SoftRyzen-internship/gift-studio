import { GrGallery } from "react-icons/gr";

const about = {
  name: "about",
  title: "Про нас",
  description: "About Schema",
  type: "document",
  icon: GrGallery,
  fields: [
    {
      name: "image",
      title: "Distributor image",
      type: "accessibleImage",
      description:
        "Додайте зображення розмірами не менше 592 пікселів шириною та 645 пікселів висотою",
    },
  ],
};

export default about;
