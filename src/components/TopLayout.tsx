"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { PromoBanner } from "./PromoBanner";

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <PromoBanner />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
