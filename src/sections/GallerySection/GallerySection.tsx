import SectionHeading from "@/components/typography/SectionHeading";
import content from "@/data/gallery.json";

const GallerySection = () => {
  const { title, id } = content;

  return (
    <section id={id} className="section container">
      <SectionHeading title={title} />
      {/* ADD: HERE WILL BE SLIDER GALLERY */}
    </section>
  );
};

export default GallerySection;
