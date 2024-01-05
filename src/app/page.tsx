"use client";

import Example from "@/components/Example";
import TestIcon from "@/public/assets/icons/test.svg";
import Navbar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <>
      <div className="container bg-green-300">
        <Navbar />
        <h1 className="text-2xl leading-25 text-accent">Подарунок!</h1>
        <TestIcon className="h-[100px] w-[100px] stroke-accent" />
        <Example />
      </div>
      {/* Для тесту скролу, можна прибрати */}
      <div className="h-[500px] block bg-cyan-600" id="about">
        about
      </div>
      <div className="h-[500px] block bg-red-600" id="faq">
        faq
      </div>
    </>
  );
}
