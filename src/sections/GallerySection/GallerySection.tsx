import SectionHeading from "@/components/SectionHeading";
import Slider from "@/components/Slider";
import content from "@/data/gallery.json";
import Image from "next/image";
const gallery = [1, 2, 3];

const GallerySection = () => {
  const { title, id } = content;

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
    <section id={id} className="section container py-10">
      <SectionHeading title={title} />
      <Slider
        sliderClass={`${id}-slider`}
        slideClass={`${id}-slide`}
        data={dataSlides}
        sectionId="gallery"
      />
    </section>
  );
};

export default GallerySection;
