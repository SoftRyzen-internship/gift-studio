import { FC } from "react";

import Slider from "@/components/Slider";
import ServiceCard from "@/components/ui/ServiceCard";

import { cn } from "@/utils/cn";

import { ServicesListProps } from "./types";

const ServicesList: FC<ServicesListProps> = ({ cards }) => {
  const isShowSlider = cards.length > 4;
  const serviceCards = !isShowSlider
    ? []
    : cards.map(card => (
        <ServiceCard
          key={card.alt}
          link={card.link}
          serviceDescription={card.serviceDescription}
          alt={card.alt}
        />
      ));

  return (
    <>
      <ul
        className={cn(
          "max-md:space-y-6 md:grid md:grid-cols-2 md:max-lg:gap-x-6 md:max-lg:gap-y-10 lg:hidden md:max-lg:px-[47px]",
          { "lg:grid lg:grid-cols-4 services-slide": !isShowSlider },
        )}
      >
        {cards.map(card => (
          <li key={card.alt}>
            <ServiceCard
              link={card.link}
              serviceDescription={card.serviceDescription}
              alt={card.alt}
            />
          </li>
        ))}
      </ul>
      {isShowSlider && (
        <div className={cn("hidden", { "lg:block": isShowSlider })}>
          <Slider section="services" slides={serviceCards} />
        </div>
      )}
    </>
  );
};

export default ServicesList;
