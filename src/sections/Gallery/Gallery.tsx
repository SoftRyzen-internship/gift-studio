import Image from "next/image";

import SectionHeading from "@/components/typography/SectionHeading";
import Slider from "@/components/Slider";
import content from "@/data/gallery.json";

const gallery = [1, 2, 3];

const Gallery = () => {
  const { title, id } = content;

  const dataSlides = gallery.map(slide => (
    <Image
      key={slide}
      src={`/assets/images/gallery/gallery-slide-${slide}@x2.webp`}
      alt="Наші продукти"
      sizes="(max-width: 767px) 100vw, (min-width: 768px) 60vw, (min-width: 1280px) 50vw"
      fill
      style={{ objectFit: "cover" }}
    />
  ));

  return (
    <section id={id} className="section relative">
      <div className="container">
        <SectionHeading title={title} />
        <SectionHeading title="gallery" />
        <Slider slides={dataSlides.concat(dataSlides)} section="gallery" />
      </div>
    </section>
  );
};

export default Gallery;
