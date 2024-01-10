import AdvantagesItem from "@/components/AdvantagesItem";
import Slider from "@/components/Slider";
import SectionHeading from "@/components/typography/SectionHeading";
import content from "@/data/advantages.json";

const Advantages = () => {
  const { title, id, advantages } = content;

  const advantagesList = advantages.map(advantage => (
    <li
      key={advantage.title}
      className="md:max-lg:flex-center md:max-lg:flex-col"
    >
      <AdvantagesItem data={advantage} />
    </li>
  ));

  return (
    <section id={id} className="section ">
      <div className="container md:max-lg:px-[108px] lg:px-[48px]">
        <SectionHeading title={title} />
        <ul className="max-md:hidden md:grid md:grid-cols-2 md:gap-[81px] lg:grid-cols-4 ">
          {advantagesList}
        </ul>
        <div className="md:hidden">
          <Slider slides={advantagesList} section="advantages" />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
