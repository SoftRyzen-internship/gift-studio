"use client";

import React, { useState } from "react";
import Image from "next/image";

import s from "@/public/assets/images/feedback/feedback@x2.webp";

import data from "@/data/feedback.json";

import css from "./feedback.module.css";

const FeedbackCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(prevState => !prevState);
  };

  const flipStyle = "[transform:rotateY(180deg)]";

  const {
    text,
    label,
    btnOpenName,
    btnCloseName,
    btnOpenAriaLabel,
    btnCloseAriaLabel,
  } = data;

  return (
    <div className="group h-[531px] w-[320px] rounded-3xl [perspective:1000px] md:w-[708px] lg:w-[600px]">
      <div
        className={
          isFlipped
            ? "duration-[500ms] h-full w-full rounded-3xl shadow-xl transition-all [transform-style:preserve-3d] marker:relative " +
              flipStyle
            : "duration-[500ms] h-full w-full rounded-3xl shadow-xl transition-all [transform-style:preserve-3d] marker:relative "
        }
      >
        <div className="flex h-full flex-col items-center justify-center rounded-3xl text-slate-200 [backface-visibility:hidden]">
          <Image
            src={s}
            alt="yoyoyo"
            className="h-full w-full rounded-3xl object-cover object-center shadow-xl "
          />
          <div className="absolute bottom-0 left-0 p-6 text-start">
            <p className="text-base">
              {text.length > 100 ? `${text.slice(0, 100)}...` : text}
            </p>
            <button
              type="button"
              aria-label={btnOpenAriaLabel}
              onClick={handleFlip}
              className="mr-auto mt-2 rounded-md bg-transparent  py-1 text-sm transition-colors hover:text-accent focus:text-accent"
            >
              {btnOpenName}
            </button>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-3xl px-12 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] first:bg-white ">
          <div
            className={
              css.bg +
              " rounded-3xl absolute inset-0 p-6 md:py-7 md:px-12 lg:pt-[88px] lg:py-10 lg:px-20"
            }
          >
            <p className="mb-6 text-[24px] font-bold text-black md:mb-4">
              {label}
            </p>

            <p className="text-[16px] font-normal leading-[21.6px] text-black md:text-[18px] md:leading-[24.3px] ">
              {text.length > 420 ? `${text.slice(0, 420)}...` : text}
            </p>
            <button
              onClick={handleFlip}
              type="button"
              aria-label={btnCloseAriaLabel}
              className="absolute bottom-6 left-6 text-[16px] font-normal leading-[21.6px] text-black transition-colors hover:text-accent focus:text-accent md:bottom-7 md:left-[48px] md:text-[18px] md:leading-[24.3px] lg:bottom-10 lg:left-20"
            >
              {btnCloseName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
