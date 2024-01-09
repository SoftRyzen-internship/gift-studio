import SectionHeading from "@/components/typography/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import content from "@/data/about.json";

const AboutSection = () => {
  const { title, id } = content;

  return (
    <section id={id} className="section container">
      <SectionHeading title={title} />

      {/* REMOVE: ONLY FOR EXAMPLE BUTTONS LINKS */}
      <div className="mx-auto block space-y-4">
        <ButtonLink
          label="Переглянути букети"
          elementName="FAQ"
          variant="primary"
        />
        <ButtonLink
          label="Переглянути букети"
          elementName="FAQ"
          variant="outline"
        />
        <ButtonLink
          label="Переглянути букети"
          elementName="FAQ"
          variant="ghost"
        />
      </div>
    </section>
  );
};

export default AboutSection;