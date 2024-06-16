"use client";

import * as React from "react";
import { Provider as ReduxStoreProvider } from "react-redux";

import { AppStore, makeStore } from "@/lib/redux/store";

interface ReduxProviderLayoutProps {
  children: React.ReactNode;
}

export function Provider({ children }: ReduxProviderLayoutProps) {
  const storeRef = React.useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return (
    <ReduxStoreProvider store={storeRef.current}>{children}</ReduxStoreProvider>
  );
}
