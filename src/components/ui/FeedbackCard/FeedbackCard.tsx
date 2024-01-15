"use client";

import React, { useState, FC } from "react";
import Image from "next/image";

import s from "@/public/assets/images/feedback/feedback@x2.webp";

import { FeedbackCardProps } from "./types";

import css from "./feedback.module.css";

const FeedbackCard: FC<FeedbackCardProps> = ({ content }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const { text, label } = content;

  return (
    <div className="group h-[531px] w-[320px] [perspective:1000px] md:w-[708px] lg:w-[600px]">
      <div className="duration-[500ms] h-full w-full rounded-xl shadow-xl transition-all [transform-style:preserve-3d] marker:relative group-hover:[transform:rotateY(180deg)]">
        <div
          className={css.bg + " absolute inset-0 p-6 md:pt-[88px] md:px-[80px]"}
        >
          <p className="mb-6 text-[24px] font-bold text-black  md:mb-4">
            {label}
          </p>

          <p className="text-[16px] font-normal leading-[21.6px] text-black md:max-w-[416px] md:text-[18px] md:leading-[24.3px] lg:max-w-[352px]">
            {text}
          </p>
          <button
            onClick={handleFlip}
            className="text-[16px] font-normal leading-[21.6px] text-black  hover:text-accent focus:text-accent md:text-[18px] md:leading-[24.3px]"
          >
            приховати
          </button>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <Image
              src={s}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="yoyoyo"
              className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
            />
            <div className="absolute bottom-0 left-0 p-6 text-start">
              <p className="text-base">
                {text.length > 100 ? `${text.slice(0, 100)}...` : text}
              </p>
              <button
                onClick={handleFlip}
                className="mr-auto mt-2 rounded-md bg-transparent px-2 py-1 text-sm hover:text-accent focus:text-accent"
              >
                Читати повністю
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
