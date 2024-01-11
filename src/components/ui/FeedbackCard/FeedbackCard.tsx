"use client";

import React, { useState } from "react";
// import Image from "next/image";

// import s from "@/public/assets/bg/feedback/feebback-bg.svg";

import css from "./index.module.css";

const FeedbackCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="group h-96 w-80 [perspective:1000px]">
      <div className="duration-[500ms] relative h-full w-full rounded-xl shadow-xl transition-all [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <div className={css.bg + " absolute inset-0"}>
          {/* <Image
            src={s}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="yoyoyo"
            className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40"
          /> */}
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex min-h-full flex-col items-center justify-center">
            <p className="text-3xl font-bold">Jane Doe</p>
            <p className="text-lg">Photographer</p>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing.
            </p>
            <button
              onClick={handleFlip}
              className="mt-2 rounded-md bg-neutral-800 px-2 py-1 text-sm hover:bg-neutral-900"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
