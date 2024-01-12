import { PortableTextBlock } from "sanity";

export type ISections = "features" | "feedback" | "gallery" | "services";

export type ContactsResponse = {
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
};

export type ImageType = {
  image: {
    _type: "image";
    asset: object;
  };
  alt: string;
};

export type GalleryResponse = (ImageType & {
  id: string;
})[];

export type AboutResponse = { image: ImageType };

export type FeedbackResponse = (ImageType & {
  text: PortableTextBlock[];
  id: string;
})[];

export type ServicesResponse = (ImageType & {
  serviceName: PortableTextBlock[];
  serviceUrl: string;
  id: string;
})[];

export interface TextBlock {
  _type: string;
  children?: Array<{ text?: string }>;
}

export type TBlocks = TextBlock[] | undefined;
