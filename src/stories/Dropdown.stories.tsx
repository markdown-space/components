import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Button } from "../components/Button";
import {
  Dropdown,
  DropdownDivider,
  DropdownItem,
} from "../components/Dropdown";

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
      description: "The content of the dropdown trigger",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      control: {
        disable: true,
      },
    },
    children: {
      description: "The content of the dropdown",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      control: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          padding: "10rem 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropdown>;

type Story = StoryObj<typeof Dropdown>;

const DefaultDropdownContent = () => (
  <>
    <DropdownItem onClick={() => console.log("Item 1 clicked")}>
      Item 1
    </DropdownItem>
    <DropdownItem onClick={() => console.log("Item 2 clicked")}>
      Item 2
    </DropdownItem>
    <DropdownDivider />
    <DropdownItem onClick={() => console.log("Item 3 clicked")}>
      Item 3
    </DropdownItem>
  </>
);

export const Default: Story = {
  args: {
    trigger: <Button>Dropdown</Button>,
    children: <DefaultDropdownContent />,
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
    children: (
      <>
        <DropdownItem onClick={() => console.log("Item 1 clicked")}>
          Item 1
        </DropdownItem>
        <DropdownItem onClick={() => console.log("Item 2 clicked")}>
          Item 2
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem
          isActive
          onClick={() => console.log("Active item clicked")}
        >
          Active Item
        </DropdownItem>
        <DropdownItem onClick={() => console.log("Item 3 clicked")}>
          Item 3
        </DropdownItem>
      </>
    ),
  },
};

export const NestedContent: Story = {
  args: {
    trigger: <Button>Nested Content</Button>,
    children: (
      <>
        <DropdownItem>Simple Item</DropdownItem>
        <DropdownItem>
          <div>
            <strong>Bold Item</strong>
            <p>With additional content</p>
          </div>
        </DropdownItem>
        <DropdownDivider />
        <DropdownItem>
          <div className="is-flex is-align-items-center">
            <span className="icon mr-2">
              <i className="fas fa-exclamation-triangle"></i>
            </span>
            <span>Item with Icon</span>
          </div>
        </DropdownItem>
      </>
    ),
  },
};
