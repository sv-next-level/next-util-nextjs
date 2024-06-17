"use client";

import { Settings as SettingsIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Settings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-9 rounded-full">
          <SettingsIcon className="size-5" />
          <span className="sr-only">Settings</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="mr-4 mt-2">
        <DropdownMenuItem>item 1</DropdownMenuItem>
        <DropdownMenuItem>item 2</DropdownMenuItem>
        <DropdownMenuItem>item 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
