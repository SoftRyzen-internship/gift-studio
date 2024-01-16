import { fetchAbout } from "admin/requests/fetchAbout";

import SanityImage from "@/components/ui/SanityImage";
import SectionHeading from "@/components/typography/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";

import content from "@/data/about.json";

const About = async () => {
  const { id, title, description, buttonLabel, btnScrollTo } = content;
  const aboutImage = await fetchAbout();

  return (
    <section id={id} className="section">
      <div className="container mx-auto md:max-lg:px-[88px] lg:grid lg:grow lg:grid-cols-2 lg:justify-items-start lg:gap-x-8 lg:gap-y-2">
        <SectionHeading
          title={title}
          className="md:max-lg:mb-9 lg:mb-0 lg:mt-6 lg:self-end"
        />
        <SanityImage
          image={aboutImage}
          priority
          className="h-[376px] w-full rounded-3xl max-lg:mb-9 max-md:mb-6 max-md:object-cover md:h-[645px] lg:order-first lg:row-span-3 lg:max-w-[548px]"
          width={320}
          height={376}
          sizes="(max-width: 767px) 100vw,(min-width: 768px) 592px, (min-width: 1280px) 548px"
        />
        <div className="max-md:mb-6 md:max-lg:mb-10 lg:h-[448px] lg:overflow-auto">
          {description.map(text => (
            <p
              key={text}
              className="mb-[19px] text-base font-light leading-16 last:mb-0 md:text-xl md:font-normal md:leading-27"
            >
              {text}
            </p>
          ))}
        </div>
        <ButtonLink
          label={buttonLabel}
          targetName={btnScrollTo}
          variant="outline"
          className="max-lg:mx-auto  lg:mb-6 lg:self-start"
        />
      </div>
    </section>
  );
};

export default About;
