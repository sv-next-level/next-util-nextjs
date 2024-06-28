"use client";

import { cn } from "@/nextjs/lib/utils";

import { useTheme } from "@/nextjs/hooks";

interface ThemeWrapperProps extends React.ComponentProps<"div"> {
  defaultTheme?: string;
}

export function Wrapper({
  defaultTheme,
  children,
  className,
}: ThemeWrapperProps) {
  const { theme } = useTheme();

  return (
    <div
      className={cn(`theme-${defaultTheme || theme.name}`, "w-full", className)}
      style={
        {
          "--radius": `${defaultTheme ? 0.5 : theme.radius}rem`,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
