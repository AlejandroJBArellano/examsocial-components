import { PropsWithChildren } from "react";
import { cn } from "../../utils";

export const Smoll = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
) => (
  <span
    {...props}
    className={cn("text-xs leading-none xl:text-sm", props.className)}
  />
);

export const FocusSmoll = ({ children }: PropsWithChildren) => (
  <span className="font-bold text-xs leading-none xl:text-sm">{children}</span>
);
