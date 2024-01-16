import { PortableTextBlock } from "sanity";

export type TSections = "advantages" | "feedback" | "gallery" | "services";

export type TContactsResponse = {
  phone: string;
  email: string;
  instagram: string;
  facebook: string;
};

export type TImage = {
  src: string;
  alt: string;
  lqip: string;
};

export type TGalleryResponse = {
  image: TImage;
  id: string;
}[];

export type TAboutResponse = TImage;

export type TFeedbackCard = {
  image: TImage;
  text: PortableTextBlock[];
  id: string;
  reviewName: string;
};
export type TFeedbackResponse = TFeedbackCard[];

export type TServicesCard = {
  image: TImage;
  serviceName: PortableTextBlock[];
  serviceUrl: string;
  id: string;
};
export type TServicesResponse = TServicesCard[];

export interface ITextBlock {
  _type: string;
  children?: Array<{ text?: string }>;
}

export type TBlocks = ITextBlock[] | undefined;
