"use client";

import Example from "@/components/Example";
import TestIcon from "@/public/assets/icons/placeholder.svg";

export default function Home() {
  return (
    <div className="container bg-green-300">
      <h1 className="text-2xl leading-25 text-accent">Подарунок</h1>
      <TestIcon className="h-[100px] w-[100px] stroke-accent" />
      <Example />
    </div>
  );
}
