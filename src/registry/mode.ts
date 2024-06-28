import { MoonIcon, SunIcon, SunMoonIcon } from "@/nextjs/assets";

export const modes = [
  {
    name: "light",
    label: "Light",
    icon: SunIcon,
  },
  {
    name: "dark",
    label: "Dark",
    icon: MoonIcon,
  },
  {
    name: "system",
    label: "System",
    icon: SunMoonIcon,
  },
] as const;

export type Mode = (typeof modes)[number];
