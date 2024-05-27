import { SVGProps } from "react";

export function CircleIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        {...props}
      >
        <path  d="M16 8A8 8 0 110 8a8 8 0 0116 0zm-8 3a3 3 0 100-6 3 3 0 000 6z" />
      </svg>
    );
  }