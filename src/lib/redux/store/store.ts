"use client";

import { configureStore } from "@reduxjs/toolkit";

import { reducers } from "@/lib/redux/features";
import { reducers as nextjsReducers } from "@/nextjs/lib/redux/features";

export const makeStore = () => {
  return configureStore({
    reducer: {
      ...reducers,
      ...nextjsReducers,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
