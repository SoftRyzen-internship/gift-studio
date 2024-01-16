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
    base: "cursor-pointer rounded-3xl text-left max-md:px-4 max-md:py-6 md:max-lg:p-8 lg:py-8 lg:pl-8 lg:pr-4",
    question: "text-lg font-bold lg:text-3xl lg:leading-32",
  };
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    event.preventDefault();
    if (event.key === " " || event.key === "Spacebar") {
      setActive();
    }
  };

  return !isActive ? (
    <li
      onClick={setActive}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className={cn(styles.base, "border-transparent bg-latte")}
    >
      <p className={styles.question}>{question}</p>
    </li>
  ) : (
    <li
      onClick={setActive}
      tabIndex={0}
      className={cn(
        styles.base,
        "answer-opening flex flex-col gap-1 border-[1px] border-solid border-accent bg-white md:gap-2",
      )}
    >
      <p className={cn(styles.question, "text-accent")}>{question}</p>
      <p className="text-base font-normal leading-16">
        {answerWithSocialLink.map((text, index) => {
          if (index === 1) {
            return <SocialLink key={index} username={text} />;
          }
          return text;
        })}
      </p>
    </li>
  );
};

export default FaqListItem;
