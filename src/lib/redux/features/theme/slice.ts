import { createSlice } from "@reduxjs/toolkit";

import {
  Mode,
  modes,
  Radius,
  radius,
  Style,
  styles,
  Theme,
  themes,
} from "@/nextjs/registry";

export interface ThemeState {
  mode: Mode["name"];
  name: Theme["name"];
  style: Style["name"];
  radius: Radius;
}

export const initialState: {
  color: Theme["cssVars"];
  theme: ThemeState;
} = {
  color: themes[0].cssVars,
  theme: {
    mode: modes[2].name,
    name: themes[0].name,
    style: styles[1].name,
    radius: radius[2],
  },
};

export const ThemeSlice = createSlice({
  name: "ThemeSlice",
  initialState,
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setColor, setTheme } = ThemeSlice.actions;

export default ThemeSlice.reducer;
