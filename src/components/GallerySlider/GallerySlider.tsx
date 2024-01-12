import { FC } from "react";
import Image from "next/image";

import Slider from "@/components/Slider";

import { GallerySliderProps } from "./types";

const GallerySlider: FC<GallerySliderProps> = ({ images }) => {
  const dataSlides = images.map(({ title, imagePath, alt }) => (
    <Image
      key={title}
      src={`/assets/images/gallery/${imagePath}`}
      alt={alt}
      sizes="(max-width: 767px) 100vw, (min-width: 768px) 60vw, (min-width: 1280px) 50vw"
      className="rounded-3xl"
      fill
      style={{ objectFit: "cover" }}
    />
  ));

  return <Slider slides={dataSlides.concat(dataSlides)} section="gallery" />;
};

export default GallerySlider;
