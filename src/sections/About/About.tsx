import { SectionHeading } from "@/components/SectionHeading";
import React from "react";
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
