"use client";

import Example from "@/components/Example";
import Navbar from "@/components/ui/NavBar";

export default function Home() {
  return (
    <>
      <div className="container bg-green-300">
        <Navbar isMobile={false} />
        <h1 className="text-2xl text-accent">Подарунок</h1>
        <Example />
      </div>

      {/* Для тесту скролу, можна прибрати */}
      <div className="block h-[500px] bg-cyan-600" id="about">
        about
      </div>
      <div className="block h-[500px] bg-red-600" id="faq">
        faq
      </div>
    </>
  );
}
