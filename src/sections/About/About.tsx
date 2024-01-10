import SectionHeading from "@/components/typography/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import content from "@/data/about.json";
import Image from "next/image";

const About = () => {
  const { id, title, image, description, buttonLabel, btnScrollTo } = content;

  return (
    <section id={id} className="section">
      <div className="container mx-auto md:max-lg:px-[88px] lg:grid lg:grow lg:grid-cols-2 lg:justify-items-start lg:gap-x-8 lg:gap-y-2">
        <SectionHeading title={title} className="lg:mb-0 lg:mt-6 lg:self-end" />
        <Image
          className="h-[376px] w-full rounded-3xl max-lg:mb-9 max-md:mb-6 md:h-[645px] lg:order-first lg:row-span-3 lg:max-w-[548px]"
          src={`/assets/images/about/about@x2.webp`}
          alt={image.alt}
          width={320}
          height={376}
          sizes="(max-width: 767px) 100vw, (min-width: 1280px) 548px"
        />
        <ul className="max-md:mb-6 md:max-lg:mb-10 lg:h-[448px] lg:overflow-auto">
          {description.map(text => (
            <li key={text} className="mb-[21.6px] last:mb-0">
              <p className="text-base font-light leading-[21.6px] md:text-xl md:font-normal md:leading-27">
                {text}
              </p>
            </li>
          ))}
        </ul>
        <ButtonLink
          label={buttonLabel}
          elementName={btnScrollTo}
          variant="outline"
          className="max-lg:mx-auto  lg:mb-6 lg:self-start"
        />
      </div>
    </section>
  );
};

export default About;
