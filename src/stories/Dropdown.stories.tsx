import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Button } from "../components/Button";
import { Dropdown } from "../components/Dropdown";

export default {
  title: "Bulma Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Dropdown component with various configurations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    isRight: {
      control: "boolean",
      description: "Aligns the dropdown to the right",
    },
    isUp: {
      control: "boolean",
      description: "Opens the dropdown upwards",
    },
    isHoverable: {
      control: "boolean",
      description: "Makes the dropdown open on hover",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
    trigger: {
      control: { type: "text" },
      description: "The content of the dropdown trigger",
    },
  },
  decorators: [
    (story) => (
      <div
        style={{
          padding: "10rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        {story()}
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <Button>Dropdown</Button>,
    items: [
      {
        type: "item",
        label: "Item 1",
        onClick: () => console.log("Item 1 clicked"),
      },
      {
        type: "item",
        label: "Item 2",
        onClick: () => console.log("Item 2 clicked"),
      },
      { type: "divider" },
      {
        type: "item",
        label: "Item 3",
        href: "https://example.com",
        onClick: () => console.log("Item 3 clicked"),
      },
    ],
  },
};

export const RightAligned: Story = {
  args: {
    ...Default.args,
    isRight: true,
  },
};

export const UpwardOpening: Story = {
  args: {
    ...Default.args,
    isUp: true,
  },
};

export const Hoverable: Story = {
  args: {
    ...Default.args,
    isHoverable: true,
  },
};

export const CustomTrigger: Story = {
  args: {
    ...Default.args,
    trigger: <Button color="primary">Custom Trigger</Button>,
  },
};

export const WithActiveItem: Story = {
  args: {
    ...Default.args,
    items: [
      {
        type: "item",
        label: "Item 1",
        onClick: () => console.log("Item 1 clicked"),
      },
      {
        type: "item",
        label: "Item 2",
        onClick: () => console.log("Item 2 clicked"),
      },
      { type: "divider" },
      {
        type: "item",
        label: "Active Item",
        isActive: true,
        onClick: () => console.log("Active item clicked"),
      },
      {
        type: "item",
        label: "Item 3",
        href: "https://example.com",
        onClick: () => console.log("Item 3 clicked"),
      },
    ],
  },
};

export const NestedContent: Story = {
  args: {
    trigger: <Button>Nested Content</Button>,
    items: [
      { type: "item", label: "Simple Item" },
      {
        type: "item",
        label: (
          <div>
            <strong>Bold Item</strong>
            <p>With additional content</p>
          </div>
        ),
      },
      { type: "divider" },
      {
        type: "item",
        label: (
          <div className="is-flex is-align-items-center">
            <span className="icon mr-2">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            <span>Item with Icon</span>
          </div>
        ),
      },
    ],
  },
};
