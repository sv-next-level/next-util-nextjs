"use client";

import React from "react";
import { useTheme as useNextTheme } from "next-themes";

import {
  setColor,
  setTheme,
  ThemeState,
} from "@/nextjs/lib/redux/features/theme/slice";
import { useAppDispatch, useAppSelector } from "@/nextjs/lib/redux/store";
import { modes, Theme, themes } from "@/nextjs/registry";

export function useTheme() {
  const dispatch = useAppDispatch();
  const { theme: themeColor } = useNextTheme();

  const [mode, setMode] = React.useState<"light" | "dark">(modes[1].name);
  const color = useAppSelector((state) => state.theme.color);
  const theme = useAppSelector((state) => state.theme.theme);
  const updateTheme = (newTheme: ThemeState) => dispatch(setTheme(newTheme));

  React.useEffect(() => {
    setMode(themeColor === modes[0].name ? modes[0].name : modes[1].name);

    const updateColor = (newColor: Theme["cssVars"]) =>
      dispatch(setColor(newColor));
    for (const staticTheme of themes) {
      if (staticTheme.name === theme.name) {
        updateColor(staticTheme.cssVars);
        break;
      }
    }
  }, [dispatch, themeColor, theme.name, mode]);

  return { color, mode, theme, updateTheme };
}
