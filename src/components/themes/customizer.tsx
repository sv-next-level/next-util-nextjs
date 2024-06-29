"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { initialState } from "@/nextjs/lib/redux/features";
import { cn } from "@/nextjs/lib/utils";

import { Button } from "@/nextjs/components/ui/button";
import { Label } from "@/nextjs/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/nextjs/components/ui/tooltip";

import { Wrapper } from "@/nextjs/components/themes/wrapper";

import "@/nextjs/styles/mdx.css";

import { CheckIcon, RefreshCwIcon } from "@/nextjs/assets";
import { useTheme as useCustomTheme } from "@/nextjs/hooks";
import { modes, Radius, radius, themes } from "@/nextjs/registry";

interface CustomizerProps {
  setOpen: React.Dispatch<React.SetStateAction<true | undefined>>;
}
export function Customizer(props: CustomizerProps) {
  const { theme: customeTheme, updateTheme } = useCustomTheme();
  const { theme: resolvedTheme, setTheme } = useTheme();

  const getTheme = (theme: string) => {
    return theme === modes[0].name ? modes[1].name : modes[0].name;
  };

  return (
    <div
      className="rounded-[0.5rem] border bg-white p-6 dark:bg-zinc-950"
      onMouseEnter={() => props.setOpen(true)}
      onMouseLeave={() => props.setOpen(undefined)}
    >
      <Wrapper className="flex flex-col space-y-4 md:space-y-6">
        <div className="flex items-start pt-4 md:pt-0">
          <div className="space-y-1 pr-2">
            <div className="font-semibold leading-none tracking-tight">
              Customize
            </div>
            <div className="text-xs text-muted-foreground">
              Pick a style and color for your components.
            </div>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Button
                  variant="ghost"
                  size="icon"
                  className="ml-auto"
                  onClick={() => {
                    updateTheme(initialState);
                    setTheme(modes[2].name);
                  }}
                >
                  <RefreshCwIcon className="size-4" />
                  <span className="sr-only">Reset theme</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>Reset theme</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
          <div className="space-y-1.5">
            <Label className="text-xs">Color</Label>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((theme) => {
                const isActive = customeTheme.name === theme.name;
                return (
                  <Button
                    size="sm"
                    key={theme.name}
                    variant={"outline"}
                    onClick={() => {
                      updateTheme({
                        ...customeTheme,
                        name: theme.name,
                      });
                    }}
                    className={cn(
                      "justify-start",
                      isActive && "border-2 border-primary",
                    )}
                    style={
                      {
                        "--theme-primary": `hsl(${
                          theme?.activeColor[getTheme(resolvedTheme as string)]
                        })`,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={cn(
                        "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]",
                      )}
                    >
                      {isActive && <CheckIcon className="size-4 text-white" />}
                    </span>
                    {theme.label}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Radius</Label>
            <div className="grid grid-cols-5 gap-2">
              {radius.map((value: Radius) => {
                return (
                  <Button
                    size="sm"
                    key={value}
                    variant={"outline"}
                    onClick={() => {
                      updateTheme({
                        ...customeTheme,
                        radius: value,
                      });
                    }}
                    className={cn(
                      customeTheme.radius === value &&
                        "border-2 border-primary",
                    )}
                  >
                    {value}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Mode</Label>
            <div className="grid grid-cols-3 gap-2">
              {modes.map((mode) => {
                return (
                  <Button
                    size="sm"
                    key={mode.name}
                    variant={"outline"}
                    onClick={() => {
                      updateTheme({
                        ...customeTheme,
                        mode: mode.name,
                      });
                      setTheme(mode.name);
                    }}
                    className={cn(
                      resolvedTheme === mode.name && "border-2 border-primary",
                    )}
                  >
                    <mode.icon className="mr-1 size-4 -translate-x-1" />
                    {mode.label}
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
