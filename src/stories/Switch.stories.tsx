import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { FormField } from "../components/FormField";
import { Switch } from "../components/Switch";

export default {
  title: "Markdown Space Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A customizable Switch component with styled-components.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "The checked state of the switch",
    },
    onCheckedChange: {
      action: "checked changed",
      description: "Callback function when the switch state changes",
    },
  },
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

const SwitchTemplate: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <Switch
        {...args}
        checked={checked}
        onCheckedChange={(newChecked) => {
          setChecked(newChecked);
          args.onCheckedChange(newChecked);
        }}
      />
    );
  },
};

export const Default: Story = {
  ...SwitchTemplate,
  args: {
    checked: false,
  },
};

export const Checked: Story = {
  ...SwitchTemplate,
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  ...SwitchTemplate,
  render: (args) => {
    const [checked, setChecked] = useState(args.checked);
    return (
      <FormField
        label="Enable feature"
        customInput={
          <Switch
            {...args}
            checked={checked}
            onCheckedChange={(newChecked) => {
              setChecked(newChecked);
              args.onCheckedChange(newChecked);
            }}
          />
        }
      ></FormField>
    );
  },
  args: {
    checked: false,
  },
};

export const Disabled: Story = {
  ...SwitchTemplate,
  args: {
    checked: false,
    disabled: true,
  },
};
