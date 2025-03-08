import { cn } from "../../utils";
import { Icon } from "../Icon";

const PricingComparisonCell = ({ contains }: { contains?: boolean }) => {
  const className = cn(
    "w-8 h-8 xl:w-[70px] xl:h-[70px]",
    contains ? "text-feedback-success" : "text-zinc-500",
  );
  return contains ? (
    <Icon
      name="check_circle"
      data-testid="CheckCircleIcon"
      className={className}
    />
  ) : (
    <Icon
      name="do_not_disturb_on"
      data-testid="DoNotDisturbOnIcon"
      className={className}
    />
  );
};

export default PricingComparisonCell;
