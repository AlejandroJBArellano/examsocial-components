import { ReactNode } from "react";
import ProBadge from "../Badges/ProBadge";

export interface ProWrapperProps {
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
 * A wrapper component that blurs its children and displays a "Pro" badge
 * Use this to indicate features only available to Pro subscribers
 */
export const ProWrapper = ({
  children,
  show = true,
  badgeSize = "small",
}: ProWrapperProps) => {
  if (!show) {
    return <>{children}</>;
  }

  return (
    <div className="relative">
      <div className="pointer-events-none blur-sm">{children}</div>
      <div className="absolute inset-0 flex items-center justify-center">
        <ProBadge size={badgeSize} />
      </div>
    </div>
  );
};

export default ProWrapper;
