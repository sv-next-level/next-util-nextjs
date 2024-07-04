"use client";

import * as React from "react";
import { useTheme as useNextTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@/nextjs/assets";
import { useTheme as useCustomTheme } from "@/nextjs/hooks";
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
  const { mode } = useCustomTheme();
  const { setTheme } = useNextTheme();
  const [open, setOpen] = React.useState<true | undefined>(undefined);

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="size-9 rounded-full"
            onClick={() => {
              setTheme(mode === modes[0].name ? modes[1].name : modes[0].name);
            }}
          >
            <SunIcon className="size-5 dark:hidden" />
            <MoonIcon className="hidden size-5 dark:block" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </TooltipTrigger>
        <TooltipContent
          className="mr-2 mt-2 border bg-white p-6 text-inherit shadow-md dark:bg-black"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(undefined)}
        >
          <Customizer />
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
