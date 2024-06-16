import { Style } from "@/registry/styles";
import { Theme } from "@/registry/themes";
import { createSlice } from "@reduxjs/toolkit";

export interface ThemeState {
  name: Theme["name"];
  style: Style["name"];
  radius: number;
}

const initialState: ThemeState = {
  style: "new-york",
  name: "zinc",
  radius: 0.5,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.name = action.payload.name;
      state.style = action.payload.style;
      state.radius = action.payload.radius;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
