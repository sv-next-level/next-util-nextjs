"use client";

import * as React from "react";
import { toast as sonnerToast } from "sonner";

import Link from "next/link";

import {
  AreaChartIcon,
  BarChartIcon,
  BaselineChartIcon,
  CandlestickChartIcon,
  HistogramChartIcon,
  LineChartIcon,
} from "@/nextjs/assets";
import { useScreenSize } from "@/nextjs/hooks";
import { pixelTOPercentage } from "@/nextjs/lib/utils";
import { fetchData } from "@/nextjs/server/actions";

import { Button } from "@/nextjs/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/nextjs/components/ui/resizable";
import { Separator } from "@/nextjs/components/ui/separator";
import { ToastAction } from "@/nextjs/components/ui/toast";
import { useToast } from "@/nextjs/components/ui/use-toast";

import { Accounts } from "@/nextjs/components/accounts";
import { Apps } from "@/nextjs/components/apps";
import { Settings } from "@/nextjs/components/settings";
import { Themes } from "@/nextjs/components/themes";

import { title } from "@/common/functions";

interface ResizableProps {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export function Resizable(props: ResizableProps) {
  const { toast: normalToast } = useToast();
  const { height, width } = useScreenSize();

  const top = pixelTOPercentage(props.top, height ?? 0);
  const left = pixelTOPercentage(props.left, width ?? 0);
  const right = pixelTOPercentage(props.right, width ?? 0);
  const bottom = pixelTOPercentage(props.bottom, height ?? 0);

  return (
    <>
      {height && width ? (
        <ResizablePanelGroup direction="vertical">
          {top ? (
            <>
              <ResizablePanel defaultSize={top}>
                <div className="flex h-full justify-between overflow-x-scroll px-2">
                  <div className="flex items-center justify-start gap-4">
                    <AreaChartIcon />
                    <Separator orientation="vertical" />
                    <BarChartIcon />
                    <Separator orientation="vertical" />
                    <BaselineChartIcon />
                    <Separator orientation="vertical" />
                    <CandlestickChartIcon />
                    <Separator orientation="vertical" />
                    <HistogramChartIcon />
                    <Separator orientation="vertical" />
                    <LineChartIcon />
                  </div>
                  <div className="my-auto flex justify-end gap-1">
                    <Link href="/" className="my-auto text-primary underline">
                      Loader
                    </Link>
                    <Themes />
                    <Settings />
                    <Apps />
                    <Accounts />
                  </div>
                </div>
              </ResizablePanel>
              <ResizableHandle
                disabled
                className="hover:bg-secondary active:bg-secondary"
              />
            </>
          ) : null}

          <ResizablePanel defaultSize={100 - top - bottom}>
            <ResizablePanelGroup direction="horizontal">
              {left ? (
                <>
                  <ResizablePanel defaultSize={left}>
                    sidebar left
                  </ResizablePanel>
                  <ResizableHandle />
                </>
              ) : null}

              <ResizablePanel>
                <ResizablePanelGroup direction="vertical">
                  <ResizablePanel></ResizablePanel>
                  <ResizableHandle />

                  <ResizablePanel>
                    <ResizablePanelGroup direction="horizontal">
                      <ResizablePanel>content left</ResizablePanel>
                      <ResizableHandle />
                      <ResizablePanel>
                        <div className="size-full items-center">
                          <Button
                            variant="outline"
                            onClick={() => {
                              sonnerToast("Event has been created", {
                                description: new Date().toISOString(),
                                action: {
                                  label: "Undo",
                                  onClick: () => console.log("Undo"),
                                },
                              });
                              fetchData({});
                            }}
                            className="flex"
                          >
                            {title("show sonner toast")}
                          </Button>

                          <Button
                            variant="outline"
                            onClick={() => {
                              normalToast({
                                title: "Scheduled: Catch up ",
                                variant: "destructive",
                                description: new Date().toISOString(),
                                action: (
                                  <ToastAction altText="Goto schedule to undo">
                                    Undo
                                  </ToastAction>
                                ),
                              });
                            }}
                            className="flex"
                          >
                            {title("show normal toast")}
                          </Button>
                        </div>
                      </ResizablePanel>
                      <ResizableHandle />
                      <ResizablePanel>content rigth</ResizablePanel>
                    </ResizablePanelGroup>
                  </ResizablePanel>

                  <ResizableHandle />
                  <ResizablePanel defaultSize={30}></ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>

              {right ? (
                <>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={right}>
                    sidebar right
                  </ResizablePanel>
                </>
              ) : null}
            </ResizablePanelGroup>
          </ResizablePanel>

          {bottom ? (
            <>
              <ResizableHandle />
              <ResizablePanel defaultSize={bottom}>footer</ResizablePanel>
            </>
          ) : null}
        </ResizablePanelGroup>
      ) : null}
    </>
  );
}
