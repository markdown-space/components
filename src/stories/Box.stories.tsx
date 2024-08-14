import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import React from "react";
import { Box } from "../components/Box";

export default {
  title: "Components/Box",
  component: Box,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile Box component based on Bulma classes with additional features.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The content of the box",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    style: {
      control: "object",
      description: "Custom styles for the box",
    },
  },
} satisfies Meta<typeof Box>;

type Story = StoryObj<typeof Box>;

export const Default: Story = {
  args: {
    children: "This is a default Box component.",
  },
};

export const CustomStyle: Story = {
  args: {
    children: "This Box has custom styles.",
    style: {
      backgroundColor: "#f0f0f0",
      border: "2px solid #333",
      color: "#333",
    },
  },
};

export const NestedBoxes: Story = {
  render: () => (
    <Box>
      <h2 className="title is-4">Outer Box</h2>
      <Box style={{ backgroundColor: "#f0f0f0" }}>
        <h3 className="title is-5">Inner Box</h3>
        <p>This is a nested box with custom styling.</p>
      </Box>
    </Box>
  ),
};

export const InteractiveBox: Story = {
  render: () => {
    const [clickCount, setClickCount] = React.useState(0);
    return (
      <Box
        onClick={() => setClickCount((prev) => prev + 1)}
        style={{ cursor: "pointer" }}
      >
        <p>This is an interactive box. Click me!</p>
        <p>Click count: {clickCount}</p>
      </Box>
    );
  },
};

export const BoxWithContent: Story = {
  render: () => (
    <Box>
      <h2 className="title is-4">Box Title</h2>
      <p className="subtitle">A subtitle for the box</p>
      <div className="content">
        <p>
          This is some content inside the box. It can include various elements:
        </p>
        <ul>
          <li>List items</li>
          <li>Paragraphs</li>
          <li>Images</li>
        </ul>
      </div>
      <button className="button is-primary">A Button</button>
    </Box>
  ),
};
