"use client";

import { FC, useState } from "react";
import TabListIem from "@/components/TabListIem";

import { TabListProps } from "./types";

const TabList: FC<TabListProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const handleAccordionClick = (idx: number) => {
    if (idx === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(idx);
    }
  };

  return (
    <ul className="flex flex-col gap-4 lg:mx-auto lg:max-w-[922px]">
      {data.map(({ question, answer }, idx) => (
        <TabListIem
          key={question}
          question={question}
          answer={answer}
          isActive={idx === activeIndex}
          setActive={() => handleAccordionClick(idx)}
        />
      ))}
    </ul>
  );
};

export default TabList;
