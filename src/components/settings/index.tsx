"use client";

import { SettingsIcon } from "@/nextjs/assets";

import { Button } from "@/nextjs/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/nextjs/components/ui/dropdown-menu";

export function Settings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-9 rounded-full">
          <SettingsIcon className="size-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="mr-2 mt-2">
        <DropdownMenuItem>item 1</DropdownMenuItem>
        <DropdownMenuItem>item 2</DropdownMenuItem>
        <DropdownMenuItem>item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
