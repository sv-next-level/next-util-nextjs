"use client";

import NextTopLoader from "nextjs-toploader";

import { useTheme } from "@/nextjs/hooks";

export function TopLoading() {
  const { color, mode } = useTheme();

  return (
    <NextTopLoader color={`hsl(${color[mode].primary})`} showSpinner={false} />
  );
}
