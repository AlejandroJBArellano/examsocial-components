import { PropsWithChildren } from "react";
import { cn } from "../../utils";

export const Span = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
) => {
  return (
    <span
      {...props}
      className={cn(
        "text-base leading-tight xl:text-lg xl:leading-normal",
        props.className,
      )}
    />
  );
};

export const FocusSpan = ({ children }: PropsWithChildren) => (
  <span className="font-medium leading-tight xl:text-lg xl:leading-normal">
    {children}
  </span>
);
