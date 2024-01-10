import { GrGallery } from "react-icons/gr";

const contacts = {
  name: "contacts",
  title: "Контакти",
  description: "Contacts Schema",
  type: "document",
  icon: GrGallery,
  fields: [
    {
      name: "phone",
      title: "Номер телефона",
      type: "string",
      description: "Введіть номер телефона в форматі '+380981234567'",
    },
    {
      name: "email",
      title: "E-mail",
      type: "string",
      description: "Введіть E-mail",
    },
    {
      name: "instagram",
      title: "Instagram",
      type: "string",
      description: "Введіть посилання на сторінку Instagram",
    },
    {
      name: "facebook",
      title: "Facebook",
      type: "string",
      description: "Введіть посилання на сторінку Facebook",
    },
  ],
};

export default contacts;
