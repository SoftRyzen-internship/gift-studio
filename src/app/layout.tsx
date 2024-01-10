import React from "react";
import type { Metadata } from "next";
import { Montserrat, Caveat } from "next/font/google";

import Header from "@/layout/Header";

import "./globals.css";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Подарунок",
  description: "Подарунки для вас",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk" className={`${montserrat.variable} ${caveat.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
