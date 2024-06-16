"use client";

import {
  CandlestickChart,
  CircleUser,
  Grip,
  LayoutDashboard,
  Notebook,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Apps() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-9 rounded-full">
          <Grip className="size-5" />
          <span className="sr-only">Apps</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="mr-1 mt-2">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <CircleUser className="mr-2 size-4" /> Account
          </DropdownMenuItem>
          <DropdownMenuItem>
            <LayoutDashboard className="mr-2 size-4" /> Dashboard
          </DropdownMenuItem>
          <DropdownMenuItem>
            <CandlestickChart className="mr-2 size-4" /> Chart
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Notebook className="mr-2 size-4" /> Notebook
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
