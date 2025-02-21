import { PropsWithChildren } from "react";

export const Paragraph = ({ children }: PropsWithChildren) => (
  <p className="font-light xl:text-lg xl:leading-7">{children}</p>
);

export const FocusParagraph = ({ children }: PropsWithChildren) => (
  <p className="font-medium xl:text-lg xl:leading-7">{children}</p>
);
