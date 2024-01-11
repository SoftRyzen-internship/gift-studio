export type ImgType = {
  image: {
    image: string;
    alt: string;
  };
};

export type AboutResponse = ImgType;

export type ContactsResponse = {
  phone: string;
  email: string;
};

export type GalleryResponse = ImgType[];
