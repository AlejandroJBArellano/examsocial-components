import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import Field from "./Field";

describe("Field Component", () => {
  it("renders the label", () => {
    render(<Field label="Test Label" />);
    const labelElement = screen.getByText(/Test Label/i);
    expect(labelElement).toBeDefined();
  });

  it("renders the helper text", () => {
    render(<Field label="Test Label" helperText="Helper Text" />);
    const helperTextElement = screen.getByText(/Helper Text/i);
    expect(helperTextElement).toBeDefined();
  });

  it("renders the error message", () => {
    render(<Field label="Test Label" error="Error Message" />);
    const errorElement = screen.getByText(/Error Message/i);
    expect(errorElement).toBeDefined();
  });

  it("passes inputProps to the Input component", () => {
    render(
      <Field
        label="Test Label"
        inputProps={{ id: "test-input", placeholder: "Enter text" }}
      />,
    );
    const inputElement = screen.getByPlaceholderText(/Enter text/i);
    expect(inputElement.getAttribute("id")).toBe("test-input");
  });

  it("applies error class to container when error is provided", () => {
    render(<Field label="Test Label" error="Error Message" />);
    const container = screen.getByText(/Error Message/i).parentElement;
    expect(container?.className).toContain("bg-feedback-error-tint");
  });

  it("does not apply error class when error is not provided", () => {
    render(<Field label="Test Label" />);
    const container = screen.getByTestId("input").parentElement;
    expect(container?.className).not.toContain("bg-feedback-error-tint");
  });

  it("handles user input correctly", () => {
    const handleChange = vi.fn();
    render(
      <Field label="Test Label" inputProps={{ onChange: handleChange }} />,
    );
    const inputElement = screen.getByTestId("input");

    fireEvent.change(inputElement, { target: { value: "test value" } });
    expect(handleChange).toHaveBeenCalled();
  });

  it("applies disabled style when inputProps.disabled is true", () => {
    render(<Field label="Test Label" inputProps={{ disabled: true }} />);
    const inputElement = screen.getByTestId("input");
    expect(inputElement).toBeDisabled();
  });

  it("renders ReactNode content in label and helperText", () => {
    render(
      <Field
        label={<span data-testid="react-label">React Label</span>}
        helperText={<span data-testid="react-helper">React Helper</span>}
      />,
    );
    expect(screen.getByTestId("react-label")).toBeDefined();
    expect(screen.getByTestId("react-helper")).toBeDefined();
  });
});

describe("Field.Textarea Component", () => {
  it("renders the textarea variant correctly", () => {
    render(<Field.Textarea label="Textarea Label" />);
    const labelElement = screen.getByText(/Textarea Label/i);
    expect(labelElement).toBeDefined();
  });

  it("passes textareaProps to the Textarea component", () => {
    render(
      <Field.Textarea
        label="Textarea Label"
        textareaProps={{
          placeholder: "Enter description",
          rows: 4,
        }}
      />,
    );
    const textareaElement = screen.getByPlaceholderText(/Enter description/i);
    expect(textareaElement).toBeDefined();
    expect(textareaElement.getAttribute("rows")).toBe("4");
  });
});

describe("Field.Switch Component", () => {
  it("renders the switch variant correctly", () => {
    render(<Field.Switch>Switch Label</Field.Switch>);
    const labelElement = screen.getByText(/Switch Label/i);
    expect(labelElement).toBeDefined();
  });

  it("passes props to the Switch component", () => {
    const handleChange = vi.fn();
    render(
      <Field.Switch defaultChecked={true} onCheckedChange={handleChange}>
        Switch Label
      </Field.Switch>,
    );
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeDefined();
    expect(switchElement.getAttribute("aria-checked")).toBe("true");
  });
});
