"use client";

import { FC } from "react";
import Image from "next/image";

import { ServiceCardProps } from "@/components/ui/ServiceCard/types";

import { cn } from "@/utils/cn";

import cardImage from "@/public/assets/images/services/services-1@x2.webp";

const ServiceCard: FC<ServiceCardProps> = ({
  link,
  serviceDescription,
  src = cardImage,
  alt,
  wrapperCustomStyle,
}) => {
  return (
    <div className={cn("w-fit text-center", wrapperCustomStyle)}>
      <a
        className="services-card group flex flex-col gap-3 transition-all hover:text-accent focus:text-accent lg:gap-6"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="overflow-hidden rounded-3xl">
          <Image
            src={src}
            alt={alt}
            className="h-[416px] object-cover md:w-[295px]  lg:transition-transform lg:group-hover:scale-110 lg:group-focus:scale-110"
          />
        </div>

        <p className="flex flex-col items-center text-xl leading-[26.8px] md:text-3xl md:leading-[32.1px] ">
          {serviceDescription}
        </p>
      </a>
    </div>
  );
};

export default ServiceCard;
