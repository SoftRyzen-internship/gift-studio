interface ISlide {
  title: string;
  imagePath: string;
  alt: string;
}

export interface GallerySliderProps {
  images: ISlide[];
}
