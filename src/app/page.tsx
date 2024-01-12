import ServiceCard from "@/components/ui/ServiceCard";

import data from "@/data/service-card.json";
import Services from "@/sections/Services";

export default function Home() {
  return (
    <>
      <ServiceCard
        link={data.link}
        serviceDescription={data.serviceDescription}
        alt={data.alt}
      />
      <Services />
    </>
  );
}
