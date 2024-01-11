import { FC } from "react";

import SocialLink from "@/components/ui/SocialLink";
import { cn, getSocialLink } from "@/utils";

import { TabListIemProps } from "./types";

const TabListIem: FC<TabListIemProps> = ({
  isActive,
  question,
  answer,
  setActive,
}) => {
  const answerWithSocialLink = getSocialLink(answer);

  return (
    <li
      onClick={setActive}
      className={cn(
        "flex flex-col text-left gap-1 md:gap-2 transition border-none max-md:px-4 max-md:py-6 md:max-lg:p-8 lg:pr-4 lg:pl-8 lg:py-8 rounded-3xl bg-latte cursor-pointer",
        { "bg-white border-solid border-[1px] border-accent": isActive },
      )}
    >
      <p
        className={cn("text-lg font-bold transition", {
          "text-accent": isActive,
        })}
      >
        {question}
      </p>
      {isActive && (
        <p className="text-base font-normal leading-16 transition">
          {answerWithSocialLink.map((text, index) => {
            if (index === 1) {
              return <SocialLink key={index} username={text} />;
            }
            return text;
          })}
        </p>
      )}
    </li>
  );
};

export default TabListIem;
