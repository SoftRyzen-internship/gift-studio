"use client";
import Navbar from "@/components/ui/NavBar";
import Example from "@/components/Example";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Home() {
  return (
    <>
      <div className="container bg-green-300">
        <Navbar isMobile={false} />
        <h1 className="text-2xl text-accent">Подарунок</h1>
        <Example />
        <MobileMenu />
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
