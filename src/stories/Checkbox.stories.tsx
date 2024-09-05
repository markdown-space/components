import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Checkbox } from "../components/Checkbox";

export default {
  title: "Bulma Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A customizable Checkbox component with label support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isDisabled: {
      control: "boolean",
      description: "Disables the checkbox",
    },
    children: {
      control: "text",
      description: "The label text for the checkbox",
    },
    className: {
      control: "text",
      description: "Additional CSS classes for the input",
    },
    labelProps: {
      control: "object",
      description: "Additional props for the label element",
    },
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    children: "Default Checkbox",
  },
};

export const Checked: Story = {
  args: {
    children: "Checked Checkbox",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled Checkbox",
    isDisabled: true,
    labelProps: {
      style: {
        opacity: 0.5,
      },
    },
  },
};

export const DisabledChecked: Story = {
  args: {
    children: "Disabled Checked Checkbox",
    isDisabled: true,
    defaultChecked: true,
    labelProps: {
      style: {
        opacity: 0.5,
      },
    },
  },
};

export const WithLabelProps: Story = {
  args: {
    children: "Checkbox with Custom Label",
    labelProps: {
      className: "has-text-weight-bold has-text-primary",
    },
  },
};

export const WithHTMLInLabel: Story = {
  args: {
    children: (
      <span>
        I agree to the <a href="#"> terms and conditions</a>
      </span>
    ),
  },
};

export const Group: Story = {
  render: () => (
    <Block className="checkboxes">
      <Checkbox>Option 1</Checkbox>
      <Checkbox>Option 2</Checkbox>
      <Checkbox>Option 3</Checkbox>
    </Block>
  ),
};
