import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import React from "react";
import { Block } from "../components/Block";

export default {
  title: "Bulma Components/Block",
  component: Block,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile Block component based on Bulma classes with additional customization options.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "The content of the block",
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
    },
    style: {
      control: "object",
      description: "Custom styles for the block",
    },
    marginBottom: {
      control: "text",
      description: "Custom margin bottom for the block",
    },
  },
} satisfies Meta<typeof Block>;

type Story = StoryObj<typeof Block>;

export const Default: Story = {
  args: {
    children: "This is a default Block component.",
  },
};

export const WithCustomMargin: Story = {
  args: {
    children: "This Block has a custom margin bottom.",
    marginBottom: "2rem",
  },
};

export const WithCustomStyle: Story = {
  args: {
    children: "This Block has custom styles.",
    style: {
      backgroundColor: "#f0f0f0",
      padding: "1rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
  },
};

export const WithCustomClass: Story = {
  args: {
    children: "This Block has a custom class.",
    className: "has-text-centered has-background-primary has-text-white",
  },
};

export const NestedBlocks: Story = {
  render: () => (
    <Block>
      <p>This is an outer Block.</p>
      <Block style={{ backgroundColor: "#f0f0f0", padding: "1rem" }}>
        <p>This is a nested Block with custom styling.</p>
      </Block>
    </Block>
  ),
};

export const BlocksWithDifferentContent: Story = {
  render: () => (
    <>
      <Block>
        <h2 className="title is-4">Block with a Title</h2>
        <p>This Block contains a title and some text.</p>
      </Block>
      <Block>
        <button className="button is-primary">Block with a Button</button>
      </Block>
      <Block>
        <div className="notification is-info">
          This Block contains a Bulma notification.
        </div>
      </Block>
    </>
  ),
};

export const InteractiveBlock: Story = {
  render: () => {
    const [clickCount, setClickCount] = React.useState(0);
    return (
      <Block
        onClick={() => setClickCount((prev) => prev + 1)}
        style={{
          cursor: "pointer",
          backgroundColor: "#f0f0f0",
          padding: "1rem",
        }}
      >
        <p>This is an interactive Block. Click me!</p>
        <p>Click count: {clickCount}</p>
      </Block>
    );
  },
};

export const ResponsiveBlocks: Story = {
  render: () => (
    <div className="columns is-mobile">
      <div className="column">
        <Block className="has-background-primary has-text-white">Block 1</Block>
      </div>
      <div className="column">
        <Block className="has-background-info has-text-white">Block 2</Block>
      </div>
      <div className="column">
        <Block className="has-background-success has-text-white">Block 3</Block>
      </div>
    </div>
  ),
};
