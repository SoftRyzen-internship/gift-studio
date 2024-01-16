import SectionHeading from "@/components/typography/SectionHeading";
import GallerySlider from "@/components/GallerySlider";

import content from "@/data/gallery.json";

const Gallery = () => {
  const { title, id, images } = content;

  return (
    <section
      id={id}
      className="section relative max-md:pb-10 md:pb-[60px] lg:pb-[100px]"
    >
      <div className="container">
        <SectionHeading title={title} />
        <GallerySlider images={images} />
      </div>
    </section>
  );
};

export default Gallery;
