"use client";
import { FC, ReactNode, useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper/types";
import { A11y } from "swiper/modules";

import { cn } from "@/utils/cn";
import { getSliderOptions } from "@/utils/getSliderOptions";

import SliderNavigation from "@/components/SliderNavigation";
import { SliderProps } from "./types";

import "swiper/css";
import "swiper/css/a11y";

const Slider: FC<SliderProps> = ({ slides, section }) => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass>();

  const handlePrev = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNext = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <>
      <Swiper
        wrapperTag="ul"
        onSwiper={setSwiperRef}
        id={`swiper-${section}`}
        modules={[A11y]}
        slidesPerView={1}
        loop={true}
        speed={1000}
        spaceBetween={24}
        breakpoints={getSliderOptions(section)}
        className={cn(`${section}-slider`)}
      >
        {slides.map((slide: ReactNode, idx: number) => (
          <SwiperSlide
            key={idx}
            tag="li"
            className={cn(
              "overflow-hidden rounded-normal relative cursor-grab",
              `${section}-slide`,
            )}
          >
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <SliderNavigation onNext={handleNext} onPrev={handlePrev} />
    </>
  );
};

export default Slider;
