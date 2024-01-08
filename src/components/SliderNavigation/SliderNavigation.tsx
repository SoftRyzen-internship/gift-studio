"use client";
import React from "react";
import { useSwiper } from "swiper/react";
import SliderNavButton from "@/components/SliderNavButton";

const SliderNavigation = () => {
  const swiper = useSwiper();
  return (
    <ul className="flex-center absolute inset-x-1/2 bottom-0 gap-4">
      <li>
        <SliderNavButton onClick={() => swiper.slidePrev()} />
      </li>
      <li>
        <SliderNavButton direction="right" onClick={() => swiper.slideNext()} />
      </li>
    </ul>
  );
};

export default SliderNavigation;
