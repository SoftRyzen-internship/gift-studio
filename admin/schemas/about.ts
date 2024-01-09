import { GrGallery } from "react-icons/gr";

const about = {
  name: "about",
  title: "Про нас2",
  description: "About Schema",
  type: "document",
  icon: GrGallery,
  fields: [
    {
      name: "image",
      title: "Distributor image",
      type: "accessibleImage",
      description:
        "Додайте зображення розмірами не менше 592 пікселів шириною х 645 пікселів висотою",
    },
  ],
};

export default about;
