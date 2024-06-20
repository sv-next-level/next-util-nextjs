import { Mode, modes } from "@/registry/mode";
import { Radius, radius } from "@/registry/radius";
import { Style, styles } from "@/registry/styles";
import { Theme, themes } from "@/registry/themes";
import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  mode: Mode["name"];
  name: Theme["name"];
  style: Style["name"];
  radius: Radius;
}

export const initialState: ThemeState = {
  mode: modes[2].name,
  name: themes[0].name,
  style: styles[1].name,
  radius: radius[2],
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.mode = action.payload.mode;
      state.name = action.payload.name;
      state.style = action.payload.style;
      state.radius = action.payload.radius;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
