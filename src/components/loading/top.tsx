"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import { useTheme as useCustomTheme } from "@/nextjs/hooks";
import { modes, themes } from "@/nextjs/registry";

export function TopLoading() {
  const { theme: customTheme } = useCustomTheme();
  const { theme: themeColor, systemTheme } = useTheme();
  const [color, setColor] = useState<string>(customTheme.name);

  const getTheme = (theme: string) => {
    return theme === modes[0].name ? modes[0].name : modes[1].name;
  };

  useEffect(() => {
    for (const theme of themes as any) {
      if (customTheme.name === theme.name) {
        let currentTheme: string;
        if (themeColor !== modes[2].name) {
          currentTheme = getTheme(themeColor as string);
        } else {
          currentTheme = getTheme(systemTheme as string);
        }
        setColor(`hsl(${theme.cssVars[currentTheme].primary as string})`);
        break;
      }
    }
  }, [customTheme, systemTheme, themeColor]);

  return <NextTopLoader color={color} showSpinner={false} />;
}
