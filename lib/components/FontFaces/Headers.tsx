import { PropsWithChildren } from "react";
import { cn } from "../../utils";

export const Heading1 = ({ children }: PropsWithChildren) => (
  <h1 className="text-4xl font-bold font-['Sentient'] leading-[48px] tracking-wide xl:text-[40px] xl:leading-[56px]">
    {children}
  </h1>
);

export const Heading2 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) => (
  <h2
    {...props}
    className={cn(
      "text-[32px] font-medium font-['Sentient'] leading-10 tracking-wide xl:text-4xl xl:leading-[48px]",
      props.className,
    )}
  />
);

export const Heading3 = (
  props: PropsWithChildren<
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLHeadingElement>,
      HTMLHeadingElement
    >
  >,
) => (
  <h3
    {...props}
    className={cn(
      "text-[28px] font-bold font-['Sentient'] leading-loose tracking-wide xl:font-bold xl:text-[32px] xl:leading-10",
      props.className,
    )}
  />
);

export const Heading4 = ({ children }: PropsWithChildren) => (
  <h4 className="text-2xl font-medium font-['Sentient'] leading-7 tracking-wide xl:text-[28px] xl:leading-loose">
    {children}
  </h4>
);

export const Heading5 = ({ children }: PropsWithChildren) => (
  <h5 className="text-xl font-medium font-['Sentient'] leading-normal tracking-tight xl:text-2xl xl:leading-7 xl:tracking-wide">
    {children}
  </h5>
);

export const Heading6 = ({ children }: PropsWithChildren) => (
  <h6 className="text-lg font-medium leading-tight tracking-tight xl:text-xl xl:leading-normal">
    {children}
  </h6>
);
