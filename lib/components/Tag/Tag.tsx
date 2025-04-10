import { PropsWithChildren } from "react";

const themes = {
  light: "border-black bg-light text-black",
  accent: "border-accent bg-accent-tint text-accent",
  extra: "border-extra bg-extra-tint text-extra",
  primary: "border-primary bg-primary-tint text-primary",
  secondary: "border-secondary bg-secondary-tint text-secondary",
  "feedback-error":
    "border-feedback-error bg-feedback-error-tint text-feedback-error",
  "feedback-success":
    "border-feedback-success bg-feedback-success-tint text-feedback-success",
};

const Tag = ({
  children,
  theme = "light",
}: PropsWithChildren<{ theme?: keyof typeof themes }>) => {
  return (
    <div
      className={
        "rounded-full border px-2 py-1 text-xs xl:text-sm " + themes[theme]
      }
    >
      {children}
    </div>
  );
};

export default Tag;
