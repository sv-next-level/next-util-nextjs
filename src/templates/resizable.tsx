"use client";

import * as React from "react";
import Link from "next/link";

import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Accounts } from "@/components/accounts";
import { Apps } from "@/components/apps";
import { Settings } from "@/components/settings";
import { Themes } from "@/components/themes";

export function Resizable() {
  return (
    <ResizablePanelGroup direction="vertical">
      <ResizablePanel defaultSize={6} className="flex justify-between">
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
      <ResizableHandle disabled />

      <ResizablePanel defaultSize={88}>
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={3}>sidebar left</ResizablePanel>
          <ResizableHandle />

          <ResizablePanel defaultSize={94}>
            <ResizablePanelGroup direction="vertical">
              <ResizablePanel defaultSize={30}>content top</ResizablePanel>
              <ResizableHandle />

              <ResizablePanel defaultSize={40}>
                <ResizablePanelGroup direction="horizontal">
                  <ResizablePanel defaultSize={30}>content left</ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={40}>
                    content middle
                  </ResizablePanel>
                  <ResizableHandle />
                  <ResizablePanel defaultSize={30}>
                    content rigth
                  </ResizablePanel>
                </ResizablePanelGroup>
              </ResizablePanel>

              <ResizableHandle />
              <ResizablePanel defaultSize={30}>content bottom</ResizablePanel>
            </ResizablePanelGroup>
          </ResizablePanel>

          <ResizableHandle />
          <ResizablePanel defaultSize={3}>sidebar right</ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>

      <ResizableHandle />
      <ResizablePanel defaultSize={6}>footer</ResizablePanel>
    </ResizablePanelGroup>
  );
}
