import chartTimeListReducer from "@/nextjs/lib/redux/features/chart/time/list";
import themeReducer from "@/nextjs/lib/redux/features/theme/slice";

export const reducers = {
  theme: themeReducer,
  chartTimeList: chartTimeListReducer,
};
