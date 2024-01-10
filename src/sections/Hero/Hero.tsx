"use client";

import React from "react";

import ButtonLink from "@/components/ui/ButtonLink";

import data from "@/data/hero.json";

import css from "./hero.module.css";

const Hero = () => {
  const { title, btnLabel } = data;

  return (
    <section className={css.hero}>
      <div className="container pb-[258px] pt-[117px] text-center">
        <h1
          className="mb-[15px] text-center font-caveat text-[32px] font-bold leading-[28px] text-accent 
        md:text-[36px] md:leading-[36px] lg:text-7xl lg:leading-[52px]"
        >
          {title}
        </h1>
        <ButtonLink label={btnLabel} variant="primary" targetName="services" />
      </div>
    </section>
  );
};

export default Hero;
