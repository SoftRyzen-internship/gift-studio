import { FaHandHolding } from "react-icons/fa";

const about = {
  name: "about",
  title: "Про нас",
  description: "About Schema",
  type: "document",
  icon: FaHandHolding,
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
