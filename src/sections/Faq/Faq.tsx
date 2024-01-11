import TabList from "@/components/TabList";
import SectionHeading from "@/components/typography/SectionHeading";
import content from "@/data/faq.json";

const Faq = () => {
  const { title, id, answers } = content;

  return (
    <section id={id} className="section">
      <div className="container">
        <SectionHeading title={title} />
        <TabList data={answers} />
      </div>
    </section>
  );
};

export default Faq;
