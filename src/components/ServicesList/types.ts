export interface ICard {
  link: string;
  serviceDescription: string;
  alt: string;
}

export interface ServicesListProps {
  cards: ICard[];
}
