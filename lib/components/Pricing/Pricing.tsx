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
        "space-y-6 border-black px-4 py-5 md:flex md:h-full md:flex-col md:justify-between md:rounded-xl md:border xl:space-y-8 xl:p-6",
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
    <article className="space-y-2 md:flex md:flex-1 md:flex-col">
      <Heading5>Includes:</Heading5>
      <div className="space-y-3 md:flex-1">{children}</div>
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
      className={cn(includes ? "text-feedback-success" : "text-gray-500")}
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
    <tr className="flex w-full gap-6 border-b-sm border-gray-300 px-4 py-2 md:px-5 xl:px-6">
      <td className="my-auto flex w-1/2 items-center justify-between gap-2 py-2 md:justify-start">
        <FocusSpan>{feature}</FocusSpan>
        {children && (
          <Helper align="center" side="top">
            {children}
          </Helper>
        )}
      </td>
      {includes.map((include, index) => (
        <td
          key={index}
          className="flex flex-1 items-center justify-center py-2 text-center"
        >
          <Pricing.ComparisonCellWrapper includes={include} />
        </td>
      ))}
    </tr>
  );
};

Pricing.FeatureRow = PricingFeatureRow;

export default Pricing;
