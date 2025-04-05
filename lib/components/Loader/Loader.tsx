import { SVGProps } from "react";

const Loader = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      <path d="M24 12C24 14.3734 23.2962 16.6935 21.9776 18.6668C20.6591 20.6402 18.7849 22.1783 16.5922 23.0866C14.3995 23.9948 11.9867 24.2324 9.65892 23.7694C7.33114 23.3064 5.19295 22.1635 3.51472 20.4853C1.83649 18.8071 0.693599 16.6689 0.230577 14.3411C-0.232446 12.0133 0.00519403 9.60051 0.913446 7.4078C1.8217 5.21509 3.35977 3.34094 5.33316 2.02236C7.30655 0.703788 9.62662 -2.83022e-08 12 0V2.4C10.1013 2.4 8.24524 2.96303 6.66653 4.01789C5.08781 5.07275 3.85736 6.57207 3.13076 8.32624C2.40415 10.0804 2.21404 12.0106 2.58446 13.8729C2.95488 15.7351 3.86919 17.4456 5.21177 18.7882C6.55436 20.1308 8.26492 21.0451 10.1271 21.4155C11.9894 21.786 13.9196 21.5958 15.6738 20.8692C17.4279 20.1426 18.9272 18.9122 19.9821 17.3335C21.037 15.7548 21.6 13.8987 21.6 12H24Z" />
    </svg>
  );
};

export default Loader;
