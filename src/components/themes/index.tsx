"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Customizer } from "@/components/themes/customizer";

export function Themes() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState<true | undefined>(undefined);

  return (
    <TooltipProvider>
      <Tooltip open={open}>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="my-auto size-9 rounded-full"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
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
