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

export const FocusSmoll = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  >,
) => (
  <span
    {...props}
    className={cn("text-xs font-bold leading-none xl:text-sm", props.className)}
  />
);
