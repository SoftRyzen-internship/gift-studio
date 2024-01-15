"use client";

import React from "react";

import ButtonLink from "@/components/ui/ButtonLink";

import data from "@/data/hero.json";

import css from "@/sections/Hero/hero.module.css";

const Hero = () => {
  const { title, btnLabel, accentWord } = data;

  return (
    <section
      className={css.hero + " " + css.max + " bg-cover bg-[#d9d9d9] bg-bottom"}
    >
      <div className="container pb-[258px] pt-[117px] text-center md:py-[160px] lg:pb-[182px] lg:pt-[184px]">
        <div className="md:w-fit lg:ml-6">
          <h1
            className=" mb-[15px] flex flex-col text-center font-caveat text-[32px] font-bold leading-[28px] text-accent md:mb-[24px] 
          md:text-[36px] md:leading-[36px] lg:text-7xl lg:leading-[52px]"
          >
            <span>{accentWord}</span>
            {title}
          </h1>
          <ButtonLink
            label={btnLabel}
            variant="primary"
            targetName="services"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
