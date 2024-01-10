import Image from "next/image";

import SectionHeading from "@/components/typography/SectionHeading";
import Slider from "@/components/Slider";
import content from "@/data/gallery.json";

const gallery = [1, 2, 3];

const GallerySection = () => {
  const { title, id } = content;

  // TODO: ITS AS EXAMPLE WHAT SLIDER DATA EXPECT
  const dataSlides = gallery.map(slide => (
    <Image
      key={slide}
      src={`/assets/images/gallery/gallery-slide-${slide}@x2.webp`}
      alt="Нашу продукти"
      sizes="(max-width: 767px) 100vw, (min-width: 768px) 60vw, (min-width: 1280px) 50vw"
      fill
      style={{ objectFit: "cover" }}
    />
  ));

  return (
    <section id={id} className="section relative">
      <div className="container">
        <SectionHeading title={title} />
        <SectionHeading title="services" />
        <Slider slides={dataSlides.concat(dataSlides)} section="services" />
        <SectionHeading title="gallery" />
        <Slider slides={dataSlides.concat(dataSlides)} section="gallery" />
        <SectionHeading title="features" />
        <Slider slides={dataSlides.concat(dataSlides)} section="features" />
        <SectionHeading title="feedback" />
        <Slider slides={dataSlides.concat(dataSlides)} section="feedback" />
      </div>
    </section>
  );
};

export default GallerySection;
