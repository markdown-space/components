import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Box } from "../../lib";

const meta = {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Box story
export const DefaultBox: Story = {
  render: () => <Box />,
};

// Box with custom content
export const CustomContentBox: Story = {
  render: () => (
    <div className="box">
      <h2 className="title is-4">Custom Box Content</h2>
      <p>This is a box with custom content.</p>
    </div>
  ),
};

// Box with different background color
export const ColoredBox: Story = {
  render: () => (
    <div className="box has-background-primary has-text-white">
      <h2 className="title is-4 has-text-white">Colored Box</h2>
      <p>This box has a primary background color.</p>
    </div>
  ),
};

// Box with custom size
export const LargeBox: Story = {
  render: () => (
    <div className="box" style={{ width: "500px", height: "300px" }}>
      <h2 className="title is-4">Large Box</h2>
      <p>This is a larger box with custom dimensions.</p>
    </div>
  ),
};

// Box with nested boxes
export const NestedBoxes: Story = {
  render: () => (
    <div className="box">
      <h2 className="title is-4">Outer Box</h2>
      <div className="box">
        <h3 className="title is-5">Inner Box 1</h3>
        <p>This is a nested box.</p>
      </div>
      <div className="box">
        <h3 className="title is-5">Inner Box 2</h3>
        <p>This is another nested box.</p>
      </div>
    </div>
  ),
};
