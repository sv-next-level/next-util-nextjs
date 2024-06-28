"use client";

import * as React from "react";
import Link from "next/link";

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
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}

export function Resizable(props: ResizableProps) {
  const [_window, setWindowObject] = React.useState<any>(null);
  const screenWidth = _window?.screen.width;
  const screenHeight = _window?.screen.height;
  const top = 100 - ((screenHeight - (props.top ?? 0)) / screenHeight) * 100;
  const left = 100 - ((screenWidth - (props.left ?? 0)) / screenWidth) * 100;
  const right = 100 - ((screenWidth - (props.right ?? 0)) / screenWidth) * 100;
  const bottom =
    100 - ((screenHeight - (props.bottom ?? 0)) / screenHeight) * 100;

  React.useEffect(() => {
    setWindowObject(globalThis.window);
  }, []);

  return (
    <>
      {_window ? (
        <ResizablePanelGroup direction="vertical">
          {top ? (
            <>
              <ResizablePanel
                defaultSize={top}
                className="flex justify-between"
              >
                <div>header</div>
                <div className="my-auto ml-2 mr-4 flex gap-2">
                  <Link href="/" className="my-auto text-primary underline">
                    Loader
                  </Link>
                  <Themes />
                  <Settings />
                  <Apps />
                  <Accounts />
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
                  <ResizablePanel>content top</ResizablePanel>
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
                  <ResizablePanel defaultSize={30}>
                    content bottom
                  </ResizablePanel>
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
