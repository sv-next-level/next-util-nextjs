import { setTheme, ThemeState } from "@/nextjs/lib/redux/features/theme/slice";
import { useAppDispatch, useAppSelector } from "@/nextjs/lib/redux/store";

export function useTheme() {
  const dispatch = useAppDispatch();

  const theme = useAppSelector((state) => state.theme);
  const updateTheme = (newTheme: ThemeState) => dispatch(setTheme(newTheme));

  return { theme, updateTheme };
}
