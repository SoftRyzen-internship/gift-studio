import { FC } from "react";
import { TabListIemProps } from "./types";
import { cn } from "@/utils/cn";
import { getSocialLink } from "@/utils/getSocialLink";
import SocialLink from "../ui/SocialLink";

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
        "flex flex-col text-left gap-1 md:gap-2 transition duration-1000 border-none max-md:px-4 max-md:py-6 md:p-8 rounded-3xl bg-latte cursor-pointer",
        { "bg-white border-solid border-2 border-accent": isActive },
      )}
    >
      <p className={cn("text-lg font-bold", { "text-accent": isActive })}>
        {question}
      </p>
      {isActive && (
        <p className="text-base font-normal transition duration-1000">
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
