"use client";

import React from "react";

import { Provider as QueryClientProvider } from "@/nextjs/lib/query";
import { Provider as ReduxStoreProvider } from "@/nextjs/lib/redux/store";

import { Toaster as SonnerToaster } from "@/nextjs/components/ui/sonner";
import { Toaster as NormalToaster } from "@/nextjs/components/ui/toaster";

import { Provider as ThemeProvider } from "@/nextjs/components/themes/provider";
import { Wrapper as ThemeWrapper } from "@/nextjs/components/themes/wrapper";

interface ProvidersLayoutProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersLayoutProps) {
  return (
    <QueryClientProvider>
      <ReduxStoreProvider>
        <ThemeWrapper>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <>
              {children}
              <NormalToaster />
              <SonnerToaster richColors position="bottom-left" />
            </>
          </ThemeProvider>
        </ThemeWrapper>
      </ReduxStoreProvider>
    </QueryClientProvider>
  );
}
