import { PropsWithChildren } from "react";
import { cn } from "../../utils";
import { Icon } from "../Icon";

type PricingMode = "monthly" | "yearly" | "lifetime" | "basic";

type PricingProps = PropsWithChildren<{
  mode?: PricingMode;
}>;

const Pricing = ({ children, mode = "basic" }: PricingProps) => {
  const modes: Record<PricingMode, string> = {
    basic: "rounded-t-xl border-x border-t",
    monthly: "rounded-t-xl border-y bg-secondary-tint text-secondary",
    yearly: "rounded-t-xl border-y bg-accent-tint text-accent",
    lifetime: "rounded-b-xl border-x border-b",
  };

  return (
    <section
      className={cn(
        "space-y-6 rounded-xl border-black px-4 py-5 xl:space-y-8 xl:rounded-xl xl:p-6",
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
  return (
    <span className="text-xl font-normal leading-6 tracking-[0.4px]">
      {children}
    </span>
  );
};

Pricing.Period = PricingPeriod;

const PricingTitle = ({ children }: PropsWithChildren) => {
  return (
    <h3 className="sentient text-[28px] font-bold leading-8 tracking-[0.56px]">
      {children}
    </h3>
  );
};

Pricing.Title = PricingTitle;

const PricingPrice = ({ children }: PropsWithChildren) => {
  return (
    <p className="sentient text-[56px] font-bold leading-[64px] tracking-[1.12px]">
      {children}
    </p>
  );
};

Pricing.Price = PricingPrice;

const PricingComparison = ({ children }: PropsWithChildren) => {
  return (
    <article className="space-y-2">
      <p className="text-xl font-normal leading-6 tracking-[0.4px]">
        Includes:
      </p>
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
      {special ? (
        <Icon name="new_releases" className="h-7 w-7" />
      ) : (
        <Icon name="check_circle" className="h-7 w-7" />
      )}
      {children}
    </div>
  );
};

Pricing.ComparisonCell = PricingComparisonCell;

export default Pricing;
