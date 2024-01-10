import AdvantagesItem from "@/components/AdvantagesItem";
import SectionHeading from "@/components/typography/SectionHeading";
import content from "@/data/advantages.json";

const Advantages = () => {
  const { title, id, advantages } = content;

  return (
    <section id={id} className="section ">
      <div className="container md:max-lg:px-[108px] lg:px-[48px]">
        <SectionHeading title={title} />
        <ul className="max-md:hidden md:grid md:grid-cols-2 md:gap-[81px] lg:grid-cols-4 ">
          {advantages.map(advantage => (
            <li key={advantage.title}>
              <AdvantagesItem data={advantage} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Advantages;
