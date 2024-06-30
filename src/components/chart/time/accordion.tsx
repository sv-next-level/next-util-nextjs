import * as React from "react";

import { StarIcon } from "@/nextjs/assets";
import { cn } from "@/nextjs/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/nextjs/components/ui/accordion";
import { Button } from "@/nextjs/components/ui/button";
import { DropdownMenuItem } from "@/nextjs/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/nextjs/components/ui/tooltip";

import { Wrapper as ThemeWrapper } from "@/nextjs/components/themes/wrapper";

import { ChartTimeFormat } from "@/chart/time/list";

interface TimeAccordionProps {
  list: ChartTimeFormat[][];
}

export function TimeAccordion(props: TimeAccordionProps) {
  return (
    <ThemeWrapper>
      <Accordion type="multiple" className="w-44">
        {props.list.map((times, index) => {
          return (
            <AccordionItem key={index} value={`${index}`}>
              <AccordionTrigger className="my-1 p-1 text-xs opacity-50 hover:rounded-sm hover:bg-secondary hover:no-underline">
                {times[0].format}
              </AccordionTrigger>
              <AccordionContent className="pb-1">
                {times.map((item: ChartTimeFormat) => {
                  return (
                    <DropdownMenuItem
                      key={item.label}
                      className="group flex justify-between"
                    >
                      {item.label}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              className={cn(
                                "hidden h-auto rounded-sm p-0.5 opacity-50 hover:opacity-100 group-hover:block",
                                item.star ? "opacity-100 block" : null,
                              )}
                            >
                              <StarIcon
                                className={cn(
                                  "size-4 stroke-primary",
                                  item.star ? "fill-primary" : null,
                                )}
                              />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            {(item.star ? "Remove from" : "Add to") +
                              " favorites"}
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </DropdownMenuItem>
                  );
                })}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </ThemeWrapper>
  );
}
