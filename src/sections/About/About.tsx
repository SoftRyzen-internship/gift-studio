import SectionHeading from "@/components/typography/SectionHeading";
import content from "@/data/about.json";

const About = () => {
  const { title, id } = content;

  return (
    <section id={id} className="section container">
      <SectionHeading title={title} />
    </section>
  );
};

export default About;
