import { PropsWithChildren } from "react";
import { cn } from "../../utils";
import {
  FocusDisplay,
  FocusSmoll,
  Heading2,
  Heading3,
  Heading5,
  Span,
} from "../FontFaces";
import { Icon } from "../Icon";

type PricingMode = "monthly" | "yearly" | "lifetime" | "basic";

type PricingProps = PropsWithChildren<{
  mode?: PricingMode;
}>;

const Pricing = ({ children, mode = "basic" }: PricingProps) => {
  const modes: Record<PricingMode, string> = {
    basic: "rounded-t-xl border-x border-t",
    monthly: "border-t bg-secondary-tint text-secondary-shadow",
    yearly: "border-y bg-accent-tint text-accent-shadow",
    lifetime: "rounded-b-xl border-x border-b",
  };

  return (
    <section
      className={cn(
        "space-y-6 border-black px-4 py-5 xl:space-y-8 xl:rounded-xl xl:p-6",
        modes[mode],
      )}
    >
      {children}
    </section>
  );
};

const PricingHeader = ({ children }: PropsWithChildren) => {
  return <article className="space-y-4">{children}</article>;
};

Pricing.Header = PricingHeader;

const PricingPeriod = ({ children }: PropsWithChildren) => {
  return <Heading2>{children}</Heading2>;
};

Pricing.Period = PricingPeriod;

const PricingContainer = ({ children }: PropsWithChildren) => {
  return <div className="flex items-center gap-2">{children}</div>;
};

Pricing.Container = PricingContainer;

const PricingExplanation = ({ children }: PropsWithChildren) => {
  return <FocusSmoll className="block">{children}</FocusSmoll>;
};

Pricing.Explanation = PricingExplanation;

const PricingTitle = ({ children }: PropsWithChildren) => {
  return <Heading3>{children}</Heading3>;
};

Pricing.Title = PricingTitle;

const PricingPrice = ({ children }: PropsWithChildren) => {
  return <FocusDisplay>{children}</FocusDisplay>;
};

Pricing.Price = PricingPrice;

const PricingComparison = ({ children }: PropsWithChildren) => {
  return (
    <article className="space-y-2">
      <Heading5>Includes:</Heading5>
      <div className="space-y-3">{children}</div>
    </article>
  );
};

Pricing.Comparison = PricingComparison;

const PricingComparisonCell = ({
  children,
  special,
}: PropsWithChildren<{ special?: boolean }>) => {
  return (
    <div className="flex items-center gap-1 leading-5">
      <Icon name={special ? "new_releases" : "check_circle"} size={28} filled />
      <Span>{children}</Span>
    </div>
  );
};

Pricing.ComparisonCell = PricingComparisonCell;

export default Pricing;
