"use client";

import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { ServiceCardProps } from "@/components/ui/ServiceCard/types";

import cardImage from "@/public/assets/images/services/services-1@x2.webp";

const ServiceCard: FC<ServiceCardProps> = ({
  link,
  alt,
  src = cardImage,
  wrapperCustomStyle,
  accentWord,
}) => {
  return (
    <div
      className={
        !wrapperCustomStyle
          ? "text-center w-fit"
          : "text-center w-fit " + wrapperCustomStyle
      }
    >
      <Link
        className="flex flex-col gap-6 transition-all hover:text-accent focus:text-accent"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={src}
          alt={alt}
          className="w-[320px] md:w-[295px] h-[416px] object-cover rounded-3xl"
        />

        <p className="flex flex-col items-center text-xl md:text-3xl ">
          <span>{accentWord}</span>
          {alt}
        </p>
      </Link>
    </div>
  );
};

export default ServiceCard;
