import {
  DetailedHTMLProps,
  LabelHTMLAttributes,
  PropsWithChildren,
} from "react";

export const CheckboxField = ({ children }: PropsWithChildren) => {
  return <div className="space-y-1">{children}</div>;
};

export const Label = (
  props: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >,
) => {
  return <label className="xl:text-lg" {...props} />;
};

export const Helper = (
  props: DetailedHTMLProps<
    LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >,
) => {
  return <label className="text-xs xl:text-base" {...props} />;
};
