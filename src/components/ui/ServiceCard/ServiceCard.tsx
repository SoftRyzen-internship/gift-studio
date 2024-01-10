"use client";

import { FC } from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";
import Link from "next/link";

import { ServiceCardProps } from "@/components/ui/ServiceCard/types";

import cardImage from "@/public/assets/images/services/services-1@x2.webp";

const ServiceCard: FC<ServiceCardProps> = ({
  link,
  serviceDescription,
  src = cardImage,
  wrapperCustomStyle,
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
        className="flex flex-col gap-3 lg:gap-6 transition-all hover:text-accent focus:text-accent"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src={src}
          alt={serviceDescription}
          className="md:w-[295px] h-[416px] object-cover rounded-3xl"
        />

        <ReactMarkdown className="flex flex-col items-center text-xl md:text-3xl ">
          {serviceDescription}
        </ReactMarkdown>
      </Link>
    </div>
  );
};

export default ServiceCard;
