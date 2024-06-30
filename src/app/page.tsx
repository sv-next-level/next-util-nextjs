"use client";

import * as React from "react";

import { Resizable } from "@/nextjs/templates";

export default function Home() {
  return (
    <main className="h-screen max-h-screen w-screen max-w-full">
      <Resizable top={60} left={50} right={50} bottom={100} />
    </main>
  );
}
