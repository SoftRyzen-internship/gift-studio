"use client";

import { FC } from "react";
import { PortableText, toPlainText } from "@portabletext/react";

import SanityImage from "@/components/ui/SanityImage";

import data from "@/data/feedback.json";

import { FeedbackCardProps } from "./types";

import css from "./Feedback.module.css";

const FeedbackCard: FC<FeedbackCardProps> = ({
  content,
  setActiveCard,
  isActiveCard,
}) => {
  const { image, text, reviewName } = content;

  const flipStyle = "[transform:rotateY(180deg)]";

  const { btnOpenName, btnCloseName, btnOpenAriaLabel, btnCloseAriaLabel } =
    data.button;

  const plainText = toPlainText(text);

  return (
    <div className="group h-[531px] w-full rounded-3xl [perspective:1000px] max-md:max-w-[440px] md:w-[708px] lg:w-[600px]">
      <div
        className={
          isActiveCard
            ? "duration-500 h-full w-full rounded-3xl shadow-xl transition-all [transform-style:preserve-3d] marker:relative " +
              flipStyle
            : "h-full w-full rounded-3xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] marker:relative "
        }
      >
        <div className="flex h-full flex-col items-center justify-center rounded-3xl text-white [backface-visibility:hidden]">
          <SanityImage
            image={image}
            width={480}
            height={531}
            sizes="(max-width: 767px) 100vw, (min-width: 768px) 708px, (min-width: 1280px) 600px"
            className="h-full rounded-3xl object-cover object-center shadow-xl "
          />
          <div className="absolute bottom-0 left-0 p-6 text-start md:px-[48px] md:pb-7 lg:p-10 ">
            <p className=" line-clamp-3 text-[18px] leading-[24px] md:max-w-[416px] md:text-[22px] md:leading-[30px] lg:max-w-[353px]">
              {plainText}
            </p>
            <button
              type="button"
              aria-label={btnOpenAriaLabel}
              onClick={setActiveCard}
              className={
                "mr-auto mt-6 rounded-md bg-transparent text-base leading-[22px] transition-colors hover:text-accent focus:text-accent md:mt-4"
              }
            >
              {btnOpenName}
            </button>
          </div>
        </div>
        <div className="absolute inset-0 h-full w-full rounded-3xl px-12 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] first:bg-white ">
          <div
            className={
              css.bg +
              " text-left rounded-3xl absolute inset-0 p-6 md:py-7 md:px-12 lg:pt-10 lg:py-10 lg:px-20"
            }
          >
            <p className="mb-6 text-[24px] font-bold leading-[29px] text-black md:mb-4">
              {reviewName}
            </p>

            <div className="text-[16px] font-normal leading-[22px] text-black md:text-[18px] md:leading-[24px] ">
              <PortableText value={text} />
            </div>
            <button
              onClick={setActiveCard}
              type="button"
              aria-label={btnCloseAriaLabel}
              className="absolute bottom-6 left-6 text-[16px] font-normal leading-[22px] text-black transition-colors hover:text-accent focus:text-accent md:bottom-7 md:left-[48px] md:text-[18px] md:leading-[24px] lg:bottom-10 lg:left-20"
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
