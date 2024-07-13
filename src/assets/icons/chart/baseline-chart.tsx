import { IconProps } from "..";

export const BaselineChartIcon = (props: IconProps): JSX.Element => {
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
      <path d="M8 12H6" />
      <path d="M14 12h-2" />
      <path d="M20 12h-2" />
      <path d="M3 3v18h18" />
      <path d="m20 7-4 9-7-9-4 9" />
    </svg>
  );
};
