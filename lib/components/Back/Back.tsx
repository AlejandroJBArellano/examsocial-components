import { cn } from "@/utils";
import { FocusSpan } from "../FontFaces";
import { Icon } from "../Icon";

const Back = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
>) => {
  return (
    <a
      {...props}
      className={cn(
        "inline-flex cursor-pointer items-center justify-start gap-1 self-stretch text-accent-shadow xl:gap-2",
        props.className,
      )}
    >
      <Icon name="arrow_back" size={24} />
      <FocusSpan>{children}</FocusSpan>
    </a>
  );
};

export default Back;
