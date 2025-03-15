import { InputHTMLAttributes, ReactNode } from "react";
import { FocusSpan, Smoll } from "../FontFaces";
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
        <FocusSpan>{label}</FocusSpan>
        <Smoll>{helperText}</Smoll>
      </div>
      <div className={`rounded-b-md ${error ? "bg-feedback-error-tint" : ""}`}>
        <Input {...inputProps} error={!!error} />
        {error && (
          <Smoll className="px-2 py-1 text-feedback-error">{error}</Smoll>
        )}
      </div>
    </article>
  );
};

Field.Textarea = TextareaField;
Field.Switch = SwitchField;

export default Field;
