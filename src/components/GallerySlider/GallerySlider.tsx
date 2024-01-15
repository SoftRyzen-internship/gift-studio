import Image from "next/image";
import { fetchGallery } from "admin/requests/fetchGallery";

import Slider from "@/components/Slider";

import { urlFor } from "@/utils/urlFor";

const GallerySlider = async () => {
  const imagesGallery = await fetchGallery();

  const dataSlides = imagesGallery.map((image, idx) => (
    <Image
      key={idx}
      src={urlFor(image.image).url()}
      alt={image.alt}
      sizes="(max-width: 767px) 100vw, (min-width: 768px) 60vw, (min-width: 1280px) 50vw"
      className="rounded-3xl object-cover"
      fill
    />
  ));

  return <Slider slides={dataSlides.concat(dataSlides)} section="gallery" />;
};

export default GallerySlider;
