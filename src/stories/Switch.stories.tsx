import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "../components/Switch";

export default {
  title: "Markdown Space Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A simple Switch component.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Switch>;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  render: () => <Switch />,
};
