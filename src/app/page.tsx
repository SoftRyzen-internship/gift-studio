"use client";

import Example from "@/components/Example";
import MobileMenu from "@/components/ui/MobileMenu";

export default function Home() {
  return (
    <div className="container bg-green-300">
      <h1 className="text-2xl text-accent">Подарунок</h1>
      <Example />
      <MobileMenu />
    </div>
  );
}
