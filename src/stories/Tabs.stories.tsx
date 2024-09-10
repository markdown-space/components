import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Tabs } from "../components/Tabs";

const meta = {
  title: "Bulma Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = () => (
  <Tabs>
    <li className="is-active">
      <a>Tab 1</a>
    </li>
    <li>
      <a>Tab 2</a>
    </li>
    <li>
      <a>Tab 3</a>
    </li>
  </Tabs>
);
