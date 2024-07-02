import React from "react";

import { ChevronDownIcon } from "@/nextjs/assets";
import { useChartTime } from "@/nextjs/hooks";
import { cn } from "@/nextjs/lib/utils";

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

import { ChartTime, ChartTimeFormat, chartTimeFormat } from "@/chart/time/list";

export function Time() {
  const { chartTimeList, updateChartTime } = useChartTime();

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
      return grouped[key].sort((a: ChartTime, b: ChartTime) => a.time - b.time);
    });

    return sortedGroups;
  };

  const listOfList: ChartTimeFormat[][] = groupAndSort(
    chartTimeList.list.map((item) => chartTimeFormat(item)),
  );

  const starList: ChartTimeFormat[] = listOfList
    .flat()
    .filter((item) => item.star)
    .concat(chartTimeFormat(chartTimeList.chartTime))
    .filter(
      (chartTime, index, self) =>
        index ===
        self.findIndex(
          (chartTimeFormat) => chartTimeFormat.short === chartTime.short,
        ),
    );

  return (
    <DropdownMenu>
      {starList.map((item) => {
        return (
          <TooltipProvider key={item.short}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  className={cn(
                    "px-1",
                    chartTimeList.chartTime.time === item.time &&
                      chartTimeList.chartTime.format === item.format
                      ? "!text-primary bg-secondary"
                      : null,
                  )}
                  onClick={() => {
                    updateChartTime(item);
                  }}
                >
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
