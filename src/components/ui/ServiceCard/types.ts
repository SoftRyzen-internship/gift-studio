import { TImage } from "@/types";
import { PortableTextBlock } from "sanity";

export interface IServiceCard {
  image: TImage;
  serviceName: PortableTextBlock[];
  serviceUrl: string;
  id: string;
}

export interface ServiceCardProps {
  wrapperCustomStyle?: string;
  data: IServiceCard;
}
