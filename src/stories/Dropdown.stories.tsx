import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { ReactNode } from "react";
import { Button } from "../components/Button";
import { Dropdown, DropdownItem } from "../components/Dropdown";

const defaultItems: DropdownItem[] = [
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
];

const StoryContainer = ({ children }: { children: ReactNode }) => (
  <div
    style={{
      padding: "10rem 0",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
    }}
  >
    {children}
  </div>
);

export default {
  title: "Components/Dropdown",
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
    (Story) => (
      <StoryContainer>
        <Story />
      </StoryContainer>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    trigger: <Button>Dropdown</Button>,
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
    trigger: <Button color="primary">Custom Trigger</Button>,
  },
};

export const WithActiveItem: Story = {
  args: {
    ...Default.args,
    items: [
      ...defaultItems.slice(0, 2),
      {
        type: "item",
        label: "Active Item",
        isActive: true,
        onClick: () => console.log("Active item clicked"),
      },
      ...defaultItems.slice(2),
    ],
  },
};

export const MultipleDropdowns: Story = {
  render: () => (
    <StoryContainer>
      <Dropdown
        trigger={<button className="button is-info">Info Dropdown</button>}
        items={defaultItems}
      />
      <Dropdown
        trigger={
          <button className="button is-success">Success Dropdown</button>
        }
        items={defaultItems}
        isRight
      />
      <Dropdown
        trigger={
          <button className="button is-warning">Warning Dropdown</button>
        }
        items={defaultItems}
        isUp
      />
    </StoryContainer>
  ),
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

export const Playground: Story = {
  args: {
    trigger: <Button>Playground Dropdown</Button>,
    items: defaultItems,
    isRight: false,
    isUp: false,
    isHoverable: false,
    className: "",
  },
};
