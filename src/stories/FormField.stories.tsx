import { Meta, StoryObj } from "@storybook/react";
import {
  FormField,
  FormFieldColor,
  FormFieldSize,
  FormFieldState,
} from "../components/FormField";

const meta: Meta<typeof FormField> = {
  title: "Bulma Components/FormField",
  component: FormField,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["small", "normal", "medium", "large"],
    },
    color: {
      control: "select",
      options: ["primary", "info", "success", "warning", "danger"],
    },
    state: {
      control: "select",
      options: ["hovered", "focused", "loading"],
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    isHorizontal: {
      control: "boolean",
    },
    isGrouped: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: "Username",
    helperText: "Enter your username",
    inputProps: { placeholder: "e.g. alexsmith" },
  },
};

export const WithIcon: Story = {
  args: {
    ...Default.args,
    icon: <i className="fas fa-user"></i>,
    iconPosition: "left",
  },
};

export const Colored: Story = {
  args: {
    ...Default.args,
    color: "primary",
  },
};

export const Sized: Story = {
  args: {
    ...Default.args,
    size: "large",
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    state: "loading",
  },
};

export const Horizontal: Story = {
  args: {
    ...Default.args,
    isHorizontal: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    helperText: "Enter your username",
    inputProps: { placeholder: "e.g. alexsmith" },
  },
};

export const WithoutHelperText: Story = {
  args: {
    label: "Username",
    inputProps: { placeholder: "e.g. alexsmith" },
  },
};

export const AllSizes: Story = {
  render: () => (
    <>
      {(["small", "normal", "medium", "large"] as FormFieldSize[]).map(
        (size) => (
          <FormField
            key={size}
            label={`${size.charAt(0).toUpperCase() + size.slice(1)} Input`}
            size={size}
            inputProps={{ placeholder: `${size} input` }}
          />
        ),
      )}
    </>
  ),
};

export const AllColors: Story = {
  render: () => (
    <>
      {(
        ["primary", "info", "success", "warning", "danger"] as FormFieldColor[]
      ).map((color) => (
        <FormField
          key={color}
          label={`${color.charAt(0).toUpperCase() + color.slice(1)} Input`}
          color={color}
          inputProps={{ placeholder: `${color} input` }}
        />
      ))}
    </>
  ),
};

export const AllStates: Story = {
  render: () => (
    <>
      {(["hovered", "focused", "loading"] as FormFieldState[]).map((state) => (
        <FormField
          key={state}
          label={`${state.charAt(0).toUpperCase() + state.slice(1)} Input`}
          state={state}
          inputProps={{ placeholder: `${state} input` }}
        />
      ))}
    </>
  ),
};

export const IconPositions: Story = {
  render: () => (
    <>
      <FormField
        label="Left Icon"
        icon={<i className="fas fa-user"></i>}
        iconPosition="left"
        inputProps={{ placeholder: "Left icon input" }}
      />
      <FormField
        label="Right Icon"
        icon={<i className="fas fa-envelope"></i>}
        iconPosition="right"
        inputProps={{ placeholder: "Right icon input" }}
      />
    </>
  ),
};

export const GroupedFields: Story = {
  render: () => (
    <div className="field is-grouped">
      <FormField inputProps={{ placeholder: "Input" }} isGrouped />
      <FormField inputProps={{ placeholder: "Input" }} isGrouped />
      <FormField inputProps={{ value: "Submit", type: "submit" }} isGrouped />
    </div>
  ),
};

export const Playground: Story = {
  args: {
    label: "Playground",
    helperText: "Experiment with different props",
    inputProps: { placeholder: "Enter text" },
    size: "normal",
    color: "primary",
    state: "focused",
    icon: <i className="fas fa-star"></i>,
    iconPosition: "left",
    isHorizontal: false,
  },
};
