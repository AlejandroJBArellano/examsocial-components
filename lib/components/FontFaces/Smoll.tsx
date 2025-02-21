import { PropsWithChildren } from "react";

export const Smoll = ({ children }: PropsWithChildren) => (
  <span className="text-xs leading-none xl:text-sm">{children}</span>
);

export const FocusSmoll = ({ children }: PropsWithChildren) => (
  <span className="font-bold text-xs leading-none xl:text-sm">{children}</span>
);
