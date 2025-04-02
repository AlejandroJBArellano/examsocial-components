import { ReactNode } from "react";
import { Checkbox, CheckboxProps } from "../Checkbox";
import { FocusSpan, Smoll, Span } from "../FontFaces";

export interface CheckboxFieldProps {
  children: ReactNode;
  helperText?: string;
  checkboxProps?: Partial<CheckboxProps>;
  option?: string;
}

export const CheckboxField = ({
  children,
  helperText,
  checkboxProps,
  option,
}: CheckboxFieldProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor={checkboxProps?.id}>
        <FocusSpan>{children}</FocusSpan>
      </label>
      <div className="flex items-center gap-2">
        <Checkbox {...checkboxProps} />
        <label htmlFor={checkboxProps?.id}>
          <Span>{option}</Span>
        </label>
      </div>
      {helperText && <Smoll>{helperText}</Smoll>}
    </div>
  );
};
