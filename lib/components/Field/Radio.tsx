import { ReactNode } from "react";
import { FocusSpan, Smoll, Span } from "../FontFaces";
import { RadioGroup, RadioGroupProps } from "../RadioGroup";

export interface RadioFieldProps {
  children: ReactNode;
  helperText?: string;
  radioProps: RadioGroupProps;
  option?: string;
}

export const RadioField = ({
  children,
  helperText,
  radioProps,
  option,
}: RadioFieldProps) => {
  return (
    <div className="space-y-1">
      <label htmlFor={radioProps?.id}>
        <FocusSpan>{children}</FocusSpan>
      </label>
      <div className="flex items-center gap-2">
        <RadioGroup {...radioProps} />
        <label htmlFor={radioProps?.id}>
          <Span>{option}</Span>
        </label>
      </div>
      {helperText && <Smoll>{helperText}</Smoll>}
    </div>
  );
};
