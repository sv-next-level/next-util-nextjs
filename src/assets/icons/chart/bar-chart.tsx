import { IconProps } from "..";

export const BarChartIcon = (props: IconProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 3v18h18" />
      <rect width="4" height="7" x="7" y="10" rx="1" />
      <rect width="4" height="12" x="15" y="5" rx="1" />
    </svg>
  );
};
