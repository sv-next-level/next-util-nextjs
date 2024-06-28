import { cn } from "@/nextjs/lib/utils";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/nextjs/components/ui/avatar";

export function AccountAvatar() {
  return (
    <Avatar className={cn("cursor-pointer", `size-8`)}>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
