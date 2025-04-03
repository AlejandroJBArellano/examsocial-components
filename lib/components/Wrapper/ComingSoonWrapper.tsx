import { ReactNode } from "react";
import SoonBadge from "../Badges/SoonBadge";

export interface ComingSoonWrapperProps {
  /**
   * The content to be wrapped
   */
  children: ReactNode;
  /**
   * Size of the badge
   */
  badgeSize?: "small" | "big";
}

/**
 * A wrapper component that blurs its children and displays a "Coming Soon" badge
 */
export const ComingSoonWrapper = ({
  children,
  badgeSize = "small",
}: ComingSoonWrapperProps) => {
  return (
    <div className="relative">
      <div className="pointer-events-none blur-sm">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <SoonBadge size={badgeSize} />
      </div>
    </div>
  );
};

export default ComingSoonWrapper;
