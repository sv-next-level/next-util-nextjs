"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@/nextjs/assets";
import { modes } from "@/nextjs/registry";

import { Button } from "@/nextjs/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/nextjs/components/ui/tooltip";

import { Customizer } from "@/nextjs/components/themes/customizer";

export function Themes() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [open, setOpen] = React.useState<true | undefined>(undefined);

  const getTheme = (theme: string) => {
    return theme === modes[0].name ? modes[1].name : modes[0].name;
  };

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-full"
            onClick={() => {
              let currentTheme: string;
              if (theme !== modes[2].name) {
                currentTheme = getTheme(theme as string);
              } else {
                currentTheme = getTheme(systemTheme as string);
              }
              setTheme(currentTheme);
            }}
          >
            <SunIcon className="size-5 dark:hidden" />
            <MoonIcon className="hidden size-5 dark:block" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent asChild>
          <Customizer setOpen={setOpen} />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
