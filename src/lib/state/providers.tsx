"use client";

import React from "react";

import { Provider as QueryClientProvider } from "@/nextjs/lib/query";
import { Provider as ReduxStoreProvider } from "@/nextjs/lib/redux/store";

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
            {children}
          </ThemeProvider>
        </ThemeWrapper>
      </ReduxStoreProvider>
    </QueryClientProvider>
  );
}
