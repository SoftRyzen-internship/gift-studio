"use client";

import { FC, useState } from "react";
import Image from "next/image";

import { urlFor } from "@/utils/urlFor";

import data from "@/data/feedback.json";

import { FeedbackCardProps } from "./types";

import css from "./feedback.module.css";
// import { PortableText } from "@portabletext/react";

const FeedbackCard: FC<FeedbackCardProps> = ({
  content,
  // isActive,
}) => {
  const { alt, image } = content;
  console.log("🚀 ---------------------🚀");
  console.log("🚀 ~ content:", content);
  console.log("🚀 ---------------------🚀");

  const [isFlipped, setIsFlipped] = useState(false);

  // useEffect(() => {
  //   setIsFlipped(isActive || false);
  // }, [isActive]);

  const handleFlip = () => {
    setIsFlipped(prevState => !prevState);
  };

  const flipStyle = "[transform:rotateY(180deg)]";

  const { btnOpenName, btnCloseName, btnOpenAriaLabel, btnCloseAriaLabel } =
    data.button;

  // const components = {
  //   block: {
  //     // Ex. 1: customizing common block types
  //     cardHeading: ({ children }: { children: string[] }) => (
  //       <p className="text-base md:max-w-[416px] lg:max-w-[353px]">
  //         {children.length > 100 ? `${children.slice(0, 100)}...` : children}
  //       </p>
  //     ),
  //     feedback: ({ children }: { children: string[] }) => (
  //       <p className="mb-6 text-[24px] font-bold leading-[29.26px] text-black md:mb-4">
  //         {children}
  //       </p>
  //     ),

  //     // Ex. 2: rendering custom styles
  //     customHeading: ({ children }: { children: string[] }) => (
  //       <h2 className="text-primary text-lg text-purple-700">{children}</h2>
  //     ),
  //   },
  // };

  return (
    <div className="group h-[531px] w-fit rounded-3xl [perspective:1000px] md:w-[708px] lg:w-[600px]">
      <div
        className={
          isFlipped
            ? "duration-[500ms] h-full w-full rounded-3xl shadow-xl transition-all [transform-style:preserve-3d] marker:relative " +
              flipStyle
            : "duration-[500ms] h-full w-full rounded-3xl shadow-xl transition-all [transform-style:preserve-3d] marker:relative "
        }
      >
        <div className="flex h-full flex-col items-center justify-center rounded-3xl text-white [backface-visibility:hidden]">
          <Image
            src={urlFor(image).url()}
            width={100}
            height={100}
            alt={alt}
            sizes="(max-width: 767px) 100vw, (min-width: 768px) 50vw"
            className="h-full w-full rounded-3xl object-cover object-center shadow-xl "
          />
          <div className="absolute bottom-0 left-0 p-6 text-start md:px-[48px] md:pb-7 lg:p-10 ">
            {/* <PortableText
              value={text}
              components={components.block.cardHeading}
            /> */}

            {/* <p className="text-base md:max-w-[416px] lg:max-w-[353px]">
              {alt.length > 100 ? `${text.slice(0, 100)}...` : text}
            </p> */}
            <button
              type="button"
              aria-label={btnOpenAriaLabel}
              onClick={handleFlip}
              className="mr-auto mt-6 rounded-md bg-transparent text-base leading-[21.6px] transition-colors hover:text-accent focus:text-accent md:mt-4"
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
            {/* <p className="mb-6 text-[24px] font-bold leading-[29.26px] text-black md:mb-4">
              {alt}
            </p> */}
            {/* <PortableText value={text} components={components.block.feedback} /> */}

            {/* <p className="text-[16px] font-normal leading-[21.6px] text-black md:text-[18px] md:leading-[24.3px] ">
              {alt.length > 420 ? `${text.slice(0, 420)}...` : text}
            </p> */}
            {/* <PortableText value={text} /> */}
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
