import { PropsWithChildren } from "react";

export const Quote = ({ children }: PropsWithChildren) => (
  <span className="font-light leading-tight xl:text-lg xl:leading-normal">
    {children}
  </span>
);

export const FocusQuote = ({ children }: PropsWithChildren) => (
  <span className="italic font-medium leading-tight xl:text-lg xl:leading-normal">
    {children}
  </span>
);
