import { FC, KeyboardEvent } from "react";

import SocialLink from "@/components/ui/SocialLink";

import { FaqListItemProps } from "./types";

import { cn, getSocialLink } from "@/src/utils";

const FaqListItem: FC<FaqListItemProps> = ({
  isActive,
  question,
  answer,
  setActive,
}) => {
  const answerWithSocialLink = getSocialLink(answer);
  const styles = {
    base: "cursor-pointer rounded-3xl text-left max-md:px-4 max-md:py-6 md:max-lg:p-8 lg:py-8 lg:pl-8 lg:pr-4 border-transparent bg-latte transition border-[1px] border-solid",
    question: "text-lg font-bold lg:text-3xl lg:leading-32 transition-color",
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    event.preventDefault();
    if (event.key === " " || event.key === "Spacebar") {
      setActive();
    }
  };

  return (
    <li
      onClick={setActive}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={cn(styles.base, {
        "flex flex-col gap-1 border-accent bg-white md:gap-2": isActive,
      })}
    >
      <p className={cn(styles.question, { "text-accent": isActive })}>
        {question}
      </p>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out grid",
          {
            "grid-rows-[1fr] opacity-100": isActive,
            "grid-rows-[0fr] opacity-0": !isActive,
          },
        )}
      >
        <div className="overflow-hidden">
          <p className="text-base font-normal leading-16 ">
            {answerWithSocialLink.map((text, index) => {
              if (index === 1) {
                return <SocialLink key={index} username={text} />;
              }
              return text;
            })}
          </p>
        </div>
      </div>
    </li>
  );
};

export default FaqListItem;
