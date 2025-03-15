import type { Meta, StoryObj } from "@storybook/react";
import Field from "./Field";

const meta: Meta<typeof Field> = {
  title: "Components/Field",
  component: Field,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Field is a component that provides a labeled input field with optional helper text and error states.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Field>;

export const Default: Story = {
  args: {
    label: "Username",
    inputProps: {
      placeholder: "Enter your username",
    },
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    helperText: "Must be at least 8 characters",
    inputProps: {
      type: "password",
      placeholder: "Enter your password",
    },
  },
};

export const WithError: Story = {
  args: {
    label: "Email",
    error: "Invalid email address",
    inputProps: {
      type: "email",
      placeholder: "example@email.com",
      value: "invalid-email",
    },
  },
};

export const WithIconsAndError: Story = {
  render: () => (
    <Field
      label="Email Address"
      error="Invalid email format"
      inputProps={{
        placeholder: "example@email.com",
        type: "email",
      }}
    />
  ),
};

export const TextareaVariant: Story = {
  render: () => (
    <Field.Textarea
      label="Comments"
      helperText="Optional feedback"
      textareaProps={{
        placeholder: "Enter your comments here...",
        rows: 4,
      }}
      error="This is an error"
    />
  ),
};

export const SwitchVariant: Story = {
  render: () => <Field.Switch>Enable notifications</Field.Switch>,
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex w-96 flex-col gap-6">
      <div>
        <Field
          label="Username"
          inputProps={{ placeholder: "Enter your username" }}
        />
      </div>
      <div>
        <Field
          label="Password"
          helperText="Must be at least 8 characters"
          inputProps={{ type: "password", placeholder: "Enter your password" }}
        />
      </div>
      <div>
        <Field
          label="Email"
          error="Invalid email address"
          inputProps={{
            type: "email",
            placeholder: "example@email.com",
            value: "invalid-email",
          }}
        />
      </div>
      <div>
        <Field.Textarea
          label="Comments"
          helperText="Optional feedback"
          textareaProps={{
            placeholder: "Enter your comments here...",
            rows: 4,
          }}
          error="This is an error"
        />
      </div>
      <div>
        <Field.Switch>Enable notifications</Field.Switch>
      </div>
    </div>
  ),
};
