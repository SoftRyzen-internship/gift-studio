import SectionHeading from "@/components/SectionHeading";
import TabList from "@/components/TabList";
import content from "@/data/faq.json";

const FaqSection = () => {
  const { title, id, answers } = content;

  return (
    <section id={id} className="section container">
      <SectionHeading title={title} className="mb-6" />
      <TabList data={answers} />
    </section>
  );
};

export default FaqSection;
