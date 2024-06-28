"use client";

import Link from "next/link";

import { Button } from "@/nextjs/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/nextjs/components/ui/dropdown-menu";

import { AccountAvatar } from "@/nextjs/components/accounts/avatar";

const items = [
  {
    email: "email1@gmail.com",
  },
  {
    email: "email2@gmail.com",
  },
  {
    email: "email3@gmail.com",
  },
  {
    email: "email4@gmail.com",
  },
];

export function Accounts() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="size-9 rounded-full">
          <AccountAvatar />
          <span className="sr-only">Account</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="mt-2">
        <DropdownMenuLabel>{items[0].email}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {items.map((item, index) => {
            if (index === 0) return null;
            return (
              <DropdownMenuItem key={item.email}>
                <Link href={`/u/${index}`}>{item.email}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuItem>Add another account</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
