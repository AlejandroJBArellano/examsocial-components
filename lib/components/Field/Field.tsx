import { InputHTMLAttributes, ReactNode } from "react";
import { Input } from "../Input";
import { SwitchField } from "./Switch";
import { TextareaField } from "./Textarea";

interface FieldProps {
  label: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  inputProps?: InputHTMLAttributes<HTMLInputElement>;
}

const Field = ({ label, error, helperText, inputProps }: FieldProps) => {
  return (
    <article>
      <div className="grid grid-cols-2 items-center">
        <label className="font-medium xl:text-lg" htmlFor={inputProps?.id}>
          {label}
        </label>
        <label className="text-right text-xs xl:text-sm">{helperText}</label>
      </div>
      <div className={`rounded-b-md ${error ? "bg-feedback-error-tint" : ""}`}>
        <Input {...inputProps} error={!!error} />
        {error && (
          <div className="px-2 py-1 text-feedback-error">
            <label htmlFor={inputProps?.id}>{error}</label>
          </div>
        )}
      </div>
    </article>
  );
};

Field.Textarea = TextareaField;
Field.Switch = SwitchField;

export default Field;