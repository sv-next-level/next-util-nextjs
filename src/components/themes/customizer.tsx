"use client";

import * as React from "react";
import { themes } from "@/registry/themes";
import { CheckIcon, MoonIcon, ResetIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { Wrapper } from "@/components/themes/wrapper";

import "@/styles/mdx.css";

import { useTheme as useCustomTheme } from "@/hooks/use-theme";

export function Customizer() {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme: setMode, resolvedTheme: mode } = useTheme();
  const { theme, updateTheme } = useCustomTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="z-40 w-[340px] rounded-[0.5rem] bg-white p-6 dark:bg-zinc-950">
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
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto rounded-[0.5rem]"
            onClick={() => {
              updateTheme({
                ...theme,
                name: "zinc",
                radius: 0.5,
              });
            }}
          >
            <ResetIcon />
            <span className="sr-only">Reset</span>
          </Button>
        </div>
        <div className="flex flex-1 flex-col space-y-4 md:space-y-6">
          <div className="space-y-1.5">
            <Label className="text-xs">Color</Label>
            <div className="grid grid-cols-3 gap-2">
              {themes.map((t) => {
                const isActive = theme.name === t.name;

                return mounted ? (
                  <Button
                    variant={"outline"}
                    size="sm"
                    key={t.name}
                    onClick={() => {
                      updateTheme({
                        ...theme,
                        name: t.name,
                      });
                    }}
                    className={cn(
                      "justify-start",
                      isActive && "border-2 border-primary"
                    )}
                    style={
                      {
                        "--theme-primary": `hsl(${
                          t?.activeColor[mode === "dark" ? "dark" : "light"]
                        })`,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={cn(
                        "mr-1 flex h-5 w-5 shrink-0 -translate-x-1 items-center justify-center rounded-full bg-[--theme-primary]"
                      )}
                    >
                      {isActive && <CheckIcon className="size-4 text-white" />}
                    </span>
                    {t.label}
                  </Button>
                ) : (
                  <Skeleton className="h-8 w-full" key={t.name} />
                );
              })}
            </div>
          </div>
          <div className="space-y-1.5">
            <Label className="text-xs">Radius</Label>
            <div className="grid grid-cols-5 gap-2">
              {["0", "0.25", "0.5", "0.75", "1"].map((value) => {
                return (
                  <Button
                    variant={"outline"}
                    size="sm"
                    key={value}
                    onClick={() => {
                      updateTheme({
                        ...theme,
                        radius: parseFloat(value),
                      });
                    }}
                    className={cn(
                      theme.radius === parseFloat(value) &&
                        "border-2 border-primary"
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
              {mounted ? (
                <>
                  <Button
                    variant={"outline"}
                    size="sm"
                    onClick={() => setMode("light")}
                    className={cn(
                      mode === "light" && "border-2 border-primary"
                    )}
                  >
                    <SunIcon className="mr-1 -translate-x-1" />
                    Light
                  </Button>
                  <Button
                    variant={"outline"}
                    size="sm"
                    onClick={() => setMode("dark")}
                    className={cn(mode === "dark" && "border-2 border-primary")}
                  >
                    <MoonIcon className="mr-1 -translate-x-1" />
                    Dark
                  </Button>
                </>
              ) : (
                <>
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </>
              )}
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
