"use client";

import React from "react";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

interface ProviderLayoutProps {
  children: React.ReactNode;
}

export function Provider({ children }: ProviderLayoutProps) {
  const [queryClient, setQueryClient] = React.useState<QueryClient>(
    new QueryClient(),
  );
  if (!queryClient) {
    // Create the query client instance the first time this renders
    setQueryClient(new QueryClient());
  }

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
