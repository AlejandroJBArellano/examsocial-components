import { cn } from "@/utils";
import { PropsWithChildren } from "react";

export const Heading1 = ({
  children,
  ...props
}: PropsWithChildren<React.HTMLAttributes<HTMLHeadingElement>>) => (
  <h1
    {...props}
    className={cn(
      "sentient text-4xl font-bold leading-[48px] tracking-wide xl:text-[40px] xl:leading-[56px]",
      props.className,
    )}
  >
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
      "sentient text-[32px] font-medium leading-10 tracking-wide xl:text-4xl xl:leading-[48px]",
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
      "sentient text-[28px] font-bold leading-loose tracking-wide xl:text-[32px] xl:font-bold xl:leading-10",
      props.className,
    )}
  />
);

export const Heading4 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) => (
  <h4
    {...props}
    className={cn(
      "sentient text-2xl font-medium leading-7 tracking-wide xl:text-[28px] xl:leading-loose",
      props.className,
    )}
  />
);

export const Heading5 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) => (
  <h5
    {...props}
    className={
      props.className +
      " sentient text-xl font-medium leading-normal tracking-tight xl:text-2xl xl:leading-7 xl:tracking-wide"
    }
  />
);

export const Heading6 = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  >,
) => (
  <h6
    {...props}
    className={cn(
      "text-lg font-medium leading-tight tracking-tight xl:text-xl xl:leading-normal",
      props.className,
    )}
  />
);
