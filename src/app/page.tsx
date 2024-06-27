"use client";

import * as React from "react";
import { Resizable } from "@/templates";

export default function Home() {
  return (
    <main className="h-screen">
      <Resizable top={60} left={100} right={100} bottom={100} />
    </main>
  );
}
