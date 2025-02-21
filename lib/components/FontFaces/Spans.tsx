import { PropsWithChildren } from "react";

export const Span = ({ children }: PropsWithChildren) => {
  return (
    <span className="text-base leading-tight xl:text-lg xl:leading-normal">
      {children}
    </span>
  );
};

export const FocusSpan = ({ children }: PropsWithChildren) => (
  <span className="font-medium leading-tight xl:text-lg xl:leading-normal">
    {children}
  </span>
);
