import type { Metadata } from "next";
import React from "react";

import "./globals.css";
import { Caveat, Montserrat } from "next/font/google";

import meta from "@/data/meta";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

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

export const metadata: Metadata = meta;

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
        <Footer />
      </body>
    </html>
  );
}
