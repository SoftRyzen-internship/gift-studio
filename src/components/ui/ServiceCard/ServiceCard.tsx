"use client";

import { FC } from "react";

import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";

import { ServiceCardProps } from "@/components/ui/ServiceCard/types";
import cardImage from "@/public/assets/images/services/services-1@x2.webp";

const ServiceCard: FC<ServiceCardProps> = ({
  link,
  serviceDescription,
  src = cardImage,
  alt,
  wrapperCustomStyle,
}) => {
  return (
    <div
      className={
        !wrapperCustomStyle
          ? "w-fit text-center"
          : "text-center w-fit " + wrapperCustomStyle
      }
    >
      <Link
        className="flex flex-col gap-3 transition-all hover:text-accent focus:text-accent lg:gap-6"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={src}
          alt={alt}
          className="h-[416px] rounded-3xl object-cover md:w-[295px]"
        />

        <ReactMarkdown className="flex flex-col items-center text-xl leading-[26.8px] md:text-3xl md:leading-[32.1px] ">
          {serviceDescription}
        </ReactMarkdown>
      </Link>
    </div>
  );
};

export default ServiceCard;
