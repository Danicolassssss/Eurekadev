"use client";

import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export default function TopLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
