import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "../Icon";
import { Select } from "../Select";
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
      helperText="Enter your email address"
      inputProps={{
        placeholder: "example@email.com",
        type: "email",
        id: "email",
        LeftIcon: <Icon name="mail" size={24} />,
        RightIcon: <Icon name="visibility" size={24} />,
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
  parameters: {
    layout: "fullscreen",
  },
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
          helperText="Enter your email address"
          inputProps={{
            id: "email",
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
            id: "comments",
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

export const SelectVariant: Story = {
  render: () => (
    <Field.Select
      label="Select an option"
      selectProps={{
        text: "Select an option",
      }}
    >
      <Select.Option>Option 1</Select.Option>
      <Select.Option>Option 2</Select.Option>
      <Select.Option>Option 3</Select.Option>
    </Field.Select>
  ),
};

export const SelectWithError: Story = {
  render: () => (
    <Field.Select
      label="Select an option"
      error="This is an error"
      selectProps={{
        text: "Select an option",
        error: true,
      }}
    >
      <Select.Option>Option 1</Select.Option>
    </Field.Select>
  ),
};
