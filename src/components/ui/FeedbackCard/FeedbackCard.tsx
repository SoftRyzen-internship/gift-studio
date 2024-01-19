"use client";

import { FC } from "react";
import { PortableText, toPlainText } from "@portabletext/react";

import SanityImage from "@/components/ui/SanityImage";

import { FeedbackCardProps } from "./types";

import data from "@/data/feedback.json";

import css from "./Feedback.module.css";

const FeedbackCard: FC<FeedbackCardProps> = ({
  content,
  setActiveCard,
  isActiveCard,
}) => {
  const { image, text, reviewName } = content;

  const flipStyle = "[transform:rotateY(180deg)]";

  const { btnOpenName, btnCloseName } = data.button;

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
          <div className="relative h-full w-full rounded-3xl object-cover object-center shadow-xl ">
            <SanityImage
              image={image}
              fill
              sizes="(max-width: 767px) 100vw, (min-width: 768px) 708px, (min-width: 1280px) 600px"
            />
          </div>

          <div className="absolute bottom-0 left-0 p-6 pb-[15px] text-start md:px-[48px] md:pb-[19px] lg:p-[10] lg:pb-[31px] ">
            <p className=" line-clamp-3 text-[18px] leading-[24px] md:max-w-[416px] md:text-[22px] md:leading-[30px] lg:max-w-[353px]">
              {plainText}
            </p>
            <button
              type="button"
              aria-label={btnOpenName}
              onClick={setActiveCard}
              className={
                "mr-auto mt-[15px] h-10 rounded-md bg-transparent text-base leading-[22px] transition-colors hover:text-accent focus:text-accent md:mt-[5px]"
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
              " text-left rounded-3xl absolute inset-0 p-6 pb-[15px] md:py-7 md:pb-[19px] md:px-12 lg:py-10 lg:pb-[31px] lg:px-20"
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
              aria-label={btnCloseName}
              className="absolute bottom-6 left-6 h-10 text-[16px] font-normal leading-[22px] text-black transition-colors hover:text-accent focus:text-accent md:bottom-7 md:left-[48px] md:text-[18px] md:leading-[24px] lg:bottom-10 lg:left-20"
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
