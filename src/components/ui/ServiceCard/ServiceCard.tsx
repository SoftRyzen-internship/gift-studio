"use client";

import { FC } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

import { ServiceCardProps } from "@/components/ui/ServiceCard/types";

import cardImage from "@/public/assets/images/services/services-1@x2.webp";
import { cn } from "@/utils/cn";

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
        className="services-card group flex flex-col gap-3 transition-all hover:text-accent focus:text-accent lg:gap-6 hover:scale-110 focus:scale-110"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="rounded-3xl overflow-hidden">
          <Image
            src={src}
            alt={alt}
            className="h-[416px] object-cover md:w-[295px]  lg:transition-transform lg:group-hover:scale-110 lg:group-focus:scale-110"
          />
        </div>

        <ReactMarkdown className="flex flex-col items-center text-xl leading-[26.8px] md:text-3xl md:leading-[32.1px] ">
          {serviceDescription}
        </ReactMarkdown>
      </a>
    </div>
  );
};

export default ServiceCard;
