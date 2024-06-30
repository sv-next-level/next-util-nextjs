"use client";

import * as React from "react";

import { ChevronDownIcon } from "@/nextjs/assets";

import { Button } from "@/nextjs/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/nextjs/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/nextjs/components/ui/tooltip";

import { TimeAccordion } from "@/nextjs/components/chart/time/accordion";
import { TimeAdd } from "@/nextjs/components/chart/time/add";

import {
  ChartTime,
  ChartTimeFormat,
  chartTimeFormat,
  INITIAL_CHART_TIME_LIST,
} from "@/chart/time/list";

export function Time() {
  const groupAndSort = (arr: ChartTimeFormat[]): ChartTimeFormat[][] => {
    // Group by format
    const grouped = arr.reduce((obj: any, item: ChartTimeFormat) => {
      if (!obj[item.format]) {
        obj[item.format] = [];
      }
      obj[item.format].push(item);
      return obj;
    }, {});

    // Sort each group by value
    const sortedGroups = Object.keys(grouped).map((key) => {
      return grouped[key].sort(
        (a: ChartTime, b: ChartTime) => a.number - b.number,
      );
    });

    return sortedGroups;
  };

  const listOfList: ChartTimeFormat[][] = groupAndSort(
    INITIAL_CHART_TIME_LIST.map((item) => chartTimeFormat(item)),
  );

  const starList: ChartTimeFormat[] = listOfList
    .flat()
    .filter((item) => item.star);

  return (
    <DropdownMenu>
      {starList.map((item) => {
        return (
          <TooltipProvider key={item.short}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" className="px-1">
                  {item.short}
                </Button>
              </TooltipTrigger>
              <TooltipContent>{item.label}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="w-6">
          <ChevronDownIcon className="size-4" />
          <span className="sr-only">Time</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="mt-2 max-h-96 overflow-auto"
      >
        <TimeAccordion list={listOfList} />
        <TimeAdd />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
