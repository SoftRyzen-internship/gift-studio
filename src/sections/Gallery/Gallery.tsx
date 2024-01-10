import SectionHeading from "@/components/typography/SectionHeading";
import content from "@/data/gallery.json";

const Gallery = () => {
  const { title, id } = content;

  return (
    <section id={id} className="section ">
      <div className="container">
        <SectionHeading title={title} />
        {/* ADD: HERE WILL BE SLIDER GALLERY */}
      </div>
    </section>
  );
};

export default Gallery;
