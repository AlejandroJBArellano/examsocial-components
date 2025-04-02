import { ReactNode } from "react";
import { FocusSpan, Smoll } from "../FontFaces";
import { Helper } from "../Helper";
import { Select, SelectProps } from "../Select";

export interface SelectFieldProps {
  label: ReactNode;
  error?: ReactNode;
  helperText?: ReactNode;
  selectProps: SelectProps;
  children?: ReactNode;
}

export const SelectField = ({
  label,
  error,
  helperText,
  selectProps,
  children,
}: SelectFieldProps) => {
  return (
    <article className="space-y-1">
      <label className="flex items-center justify-between">
        <FocusSpan>{label}</FocusSpan>
        {helperText && (
          <Helper side="top" align="center">
            {helperText}
          </Helper>
        )}
      </label>
      <div className={`rounded-md ${error ? "bg-feedback-error-tint" : ""}`}>
        <Select {...selectProps}>{children}</Select>
        {error && (
          <Smoll className="px-2 py-1 text-feedback-error">{error}</Smoll>
        )}
      </div>
    </article>
  );
};
