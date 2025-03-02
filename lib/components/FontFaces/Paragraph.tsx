import { PropsWithChildren } from "react";
import { cn } from "../../utils";

export const Paragraph = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >,
) => (
  <p
    {...props}
    className={cn("font-light xl:text-lg xl:leading-7", props.className)}
  />
);

export const FocusParagraph = ({ children }: PropsWithChildren) => (
  <p className="font-medium xl:text-lg xl:leading-7">{children}</p>
);
