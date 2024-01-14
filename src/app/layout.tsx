import React from "react";
import type { Metadata } from "next";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

import { montserrat, caveat } from "./fonts";

import "./globals.css";

import meta from "@/data/meta";

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
