"use client";

import * as React from "react";

import Link from "next/link";

import { pixelTOPercentage } from "@/nextjs/lib/utils";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/nextjs/components/ui/resizable";

import { Accounts } from "@/nextjs/components/accounts";
import { Apps } from "@/nextjs/components/apps";
import { Settings } from "@/nextjs/components/settings";
import { Themes } from "@/nextjs/components/themes";

interface ResizableProps {
  top: number;
  left: number;
  right: number;
  bottom: number;
}

export function Resizable(props: ResizableProps) {
  const [_window, setWindowObject] = React.useState<
    (Window & typeof globalThis) | null
  >(null);
  const screenWidth = _window?.screen.width || 0;
  const screenHeight = _window?.screen.height || 0;

  const top = pixelTOPercentage(props.top, screenHeight);
  const left = pixelTOPercentage(props.left, screenWidth);
  const right = pixelTOPercentage(props.right, screenWidth);
  const bottom = pixelTOPercentage(props.bottom, screenHeight);

  React.useEffect(() => {
    setWindowObject(globalThis.window);
  }, []);

  return (
    <>
      {_window ? (
        <ResizablePanelGroup direction="vertical">
          {top ? (
            <>
              <ResizablePanel defaultSize={top}>
                <div className="flex h-full justify-between gap-1 px-2">
                  <div className="my-auto flex justify-start gap-1 overflow-auto p-px">
                    TIME
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
                      <ResizablePanel>content middle</ResizablePanel>
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
