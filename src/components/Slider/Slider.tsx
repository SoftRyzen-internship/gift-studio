"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { FC, ReactNode } from "react";
import { cn } from "@/utils/cn";
import { getSliderOptions } from "@/utils/getSliderOptions";
import SliderNavigation from "@/components/SliderNavigation";
import { SliderProps } from "./types";
import "swiper/css";

const Slider: FC<SliderProps> = ({
  data,
  sliderClass,
  slideClass,
  sectionId,
}) => {
  return (
    <Swiper
      slidesPerView={1}
      loop={false}
      speed={1000}
      spaceBetween={24}
      breakpoints={getSliderOptions(sectionId)}
      className={sliderClass}
    >
      {data.map((slide: ReactNode, idx: number) => (
        <SwiperSlide
          key={idx}
          className={cn("overflow-hidden rounded-normal relative", slideClass)}
        >
          {slide}
        </SwiperSlide>
      ))}

      <SliderNavigation />
    </Swiper>
  );
};

export default Slider;
