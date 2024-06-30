import * as React from "react";

import { Button } from "@/nextjs/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/nextjs/components/ui/dropdown-menu";
import { Input } from "@/nextjs/components/ui/input";

import { Wrapper } from "@/nextjs/components/themes/wrapper";

import { CHART_TIME_FORMAT } from "@/chart/time/format";

export function TimeAdd() {
  const formats = Object.keys(CHART_TIME_FORMAT).map((key) =>
    key.toLowerCase(),
  );

  const [format, setFormat] = React.useState<string>(formats[0]);

  return (
    <Wrapper className="mt-1 flex justify-between">
      <Input className="h-7 w-10 px-1 text-center outline-none" />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="h-7 w-20">
            {format}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuRadioGroup value={format} onValueChange={setFormat}>
            {formats.map((format) => {
              return (
                <DropdownMenuRadioItem key={format} value={format}>
                  {format}
                </DropdownMenuRadioItem>
              );
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button className="h-7 bg-primary px-2.5">Add</Button>
    </Wrapper>
  );
}
