import { cn } from "@/utils";
import { ReactNode } from "react";
import { FocusSpan, Smoll } from "../FontFaces";
import { Input, InputProps } from "../Input";
import { CheckboxField } from "./Checkbox";
import { RadioField } from "./Radio";
import { SelectField } from "./Select";
import { SwitchField } from "./Switch";
import { TextareaField } from "./Textarea";

interface FieldProps {
  label: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  inputProps?: InputProps;
}

const Field = ({ label, error, helperText, inputProps }: FieldProps) => {
  return (
    <article className="space-y-1">
      <label
        htmlFor={inputProps?.id}
        className="flex items-center justify-between"
      >
        <FocusSpan>{label}</FocusSpan>
        <Smoll>{helperText}</Smoll>
      </label>

      <div className={`rounded-md ${error ? "bg-feedback-error-tint" : ""}`}>
        <Input
          {...inputProps}
          error={!!error}
          className={cn("w-full", inputProps?.className)}
        />
        {error && (
          <Smoll className="px-2 py-1 text-feedback-error">{error}</Smoll>
        )}
      </div>
    </article>
  );
};

Field.Textarea = TextareaField;
Field.Switch = SwitchField;
Field.Select = SelectField;
Field.Checkbox = CheckboxField;
Field.Radio = RadioField;
export default Field;
