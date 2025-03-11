import { PropsWithChildren } from "react";
import { cn } from "../../utils";
import {
  FocusDisplay,
  FocusSmoll,
  FocusSpan,
  Heading2,
  Heading3,
  Heading5,
  Span,
} from "../FontFaces";
import { Helper } from "../Helper";
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

const PricingFeature = ({
  children,
  special,
}: PropsWithChildren<{ special?: boolean }>) => {
  return (
    <article className="flex items-center gap-1 xl:gap-2">
      <Icon name={special ? "new_releases" : "check_circle"} size={24} filled />
      <Span>{children}</Span>
    </article>
  );
};

Pricing.Feature = PricingFeature;

const PricingComparisonCellWrapper = ({ includes }: { includes: boolean }) => {
  return (
    <Icon
      name={includes ? "check_circle" : "do_not_disturb_on"}
      size={32}
      className={cn(
        includes ? "bg-feedback-success text-white" : "bg-gray-500 text-white",
      )}
      filled
    />
  );
};

Pricing.ComparisonCellWrapper = PricingComparisonCellWrapper;

interface PricingFeatureRowProps extends PropsWithChildren {
  feature: string;
  includes: boolean[];
}

const PricingFeatureRow = ({
  children,
  feature,
  includes,
}: PricingFeatureRowProps) => {
  return (
    <article className="flex justify-between gap-4 py-2 md:gap-5 xl:gap-6">
      <div className="flex items-center justify-between gap-2 md:justify-start">
        <FocusSpan>{feature}</FocusSpan>
        <Helper align="center" side="top">
          {children}
        </Helper>
      </div>
      <div className="flex items-center gap-2">
        {includes.map((include) => (
          <Pricing.ComparisonCellWrapper includes={include} />
        ))}
      </div>
    </article>
  );
};

Pricing.FeatureRow = PricingFeatureRow;

export default Pricing;
