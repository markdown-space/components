import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown, DropdownItem } from "../components/Dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile Dropdown component based on Bulma classes.",
      },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const defaultItems: DropdownItem[] = [
  { type: "item", label: "Dropdown item" },
  { type: "item", label: "Other dropdown item" },
  { type: "item", label: "Active dropdown item", isActive: true },
  { type: "item", label: "Other dropdown item" },
  { type: "divider" },
  { type: "item", label: "With a divider" },
];

export const Default: Story = {
  args: {
    trigger: (
      <button
        className="button"
        aria-haspopup="true"
        aria-controls="dropdown-menu"
      >
        <span>Dropdown button</span>
        <span className="icon is-small">
          <i className="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    ),
    items: defaultItems,
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
    trigger: (
      <button className="button is-primary">
        <span>Custom Trigger</span>
        <span className="icon">
          <i className="fas fa-caret-down"></i>
        </span>
      </button>
    ),
  },
};

export const WithClickHandlers: Story = {
  args: {
    ...Default.args,
    items: [
      {
        type: "item",
        label: "Click me",
        onClick: () => alert("Item clicked!"),
      },
      {
        type: "item",
        label: "Also clickable",
        onClick: () => console.log("Clicked!"),
      },
      { type: "divider" },
      {
        type: "item",
        label: "Another action",
        onClick: () => alert("Another action!"),
      },
    ],
  },
};

export const NestedContent: Story = {
  args: {
    trigger: <button className="button">Dropdown</button>,
    items: [
      {
        type: "item",
        label: (
          <div>
            <p className="has-text-weight-bold">Heading</p>
            <p>This is a paragraph inside a dropdown item.</p>
          </div>
        ) as unknown as string, // Type assertion to satisfy TS
      },
      { type: "divider" },
      { type: "item", label: "Normal item" },
    ],
  },
};
