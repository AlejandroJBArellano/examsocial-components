import { ReactNode } from "react";
import PremiumBadge from "../Badges/PremiumBadge";

export interface PremiumWrapperProps {
  /**
   * The content to be wrapped
   */
  children: ReactNode;
  /**
   * Whether to show the wrapper (enables conditional rendering)
   */
  show?: boolean;
  /**
   * Size of the badge
   */
  badgeSize?: "small" | "big";
}

/**
 * A wrapper component that blurs its children and displays a "Premium" badge
 * Use this to indicate features only available to Premium subscribers
 */
export const PremiumWrapper = ({
  children,
  show = true,
  badgeSize = "small",
}: PremiumWrapperProps) => {
  if (!show) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="pointer-events-none select-none blur-sm">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <PremiumBadge size={badgeSize} />
      </div>
    </div>
  );
};

export default PremiumWrapper;
