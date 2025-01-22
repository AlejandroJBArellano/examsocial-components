import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbOnIcon from "@mui/icons-material/DoNotDisturbOn";
import { cn } from "../../utils";

const PricingComparisonCell = ({ contains }: { contains?: boolean }) => {
  const className = cn(
    "w-8 h-8 xl:w-[70px] xl:h-[70px]",
    contains ? "text-feedback-success" : "text-zinc-500",
  );
  return contains ? (
    <CheckCircleIcon data-testid="CheckCircleIcon" className={className} />
  ) : (
    <DoNotDisturbOnIcon data-testid="DoNotDisturbOnIcon" className={className} />
  );
};

export default PricingComparisonCell;