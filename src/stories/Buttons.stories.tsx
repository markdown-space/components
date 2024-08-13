import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import React from "react";
import { Button } from "../components/Button";
import { Color, Size } from "../types";

const colors: Color[] = [
  "white",
  "light",
  "dark",
  "black",
  "text",
  "ghost",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
];

const sizes: Size[] = ["small", "normal", "medium", "large"];

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Button component with various styles and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: colors,
      description: "The color of the button",
    },
    size: {
      control: "select",
      options: sizes,
      description: "The size of the button",
    },
    isOutlined: {
      control: "boolean",
      description: "Applies an outlined style",
    },
    isInverted: {
      control: "boolean",
      description: "Inverts the button colors",
    },
    isRounded: { control: "boolean", description: "Applies rounded corners" },
    isLoading: { control: "boolean", description: "Shows a loading spinner" },
    isActive: { control: "boolean", description: "Applies an active state" },
    isFocused: { control: "boolean", description: "Applies a focused state" },
    isHovered: { control: "boolean", description: "Applies a hover state" },
    isLight: { control: "boolean", description: "Applies a light variant" },
    isDark: { control: "boolean", description: "Applies a dark variant" },
    fullWidth: {
      control: "boolean",
      description: "Makes the button full width",
    },
    theme: {
      control: "radio",
      options: ["light", "dark"],
      description: "Sets the overall theme",
    },
    children: {
      control: { type: "text" },
      description: "The content of the button",
    },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className="buttons">
      {colors.map((color) => (
        <Button key={color} color={color}>
          {color.charAt(0).toUpperCase() + color.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <div className="buttons">
      {sizes.map((size) => (
        <Button key={size} size={size}>
          {size.charAt(0).toUpperCase() + size.slice(1)}
        </Button>
      ))}
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div className="buttons">
      {colors.map((color) => (
        <Button key={color} color={color} isOutlined>
          Outlined
        </Button>
      ))}
    </div>
  ),
};

export const Inverted: Story = {
  render: () => (
    <div className="notification is-primary p-5">
      {colors.map((color) => (
        <Button key={color} color={color} isInverted className="mr-2 mb-2">
          Inverted
        </Button>
      ))}
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="buttons">
      {colors.map((color) => (
        <Button key={color} color={color} isRounded>
          Rounded
        </Button>
      ))}
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="buttons">
      {colors.map((color) => (
        <Button key={color} color={color} isLoading>
          Loading
        </Button>
      ))}
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div>
      <div className="buttons mb-4">
        <Button isActive>Active</Button>
        <Button isFocused>Focused</Button>
        <Button isHovered>Hovered</Button>
      </div>
      <div className="buttons">
        <Button color="primary" isActive>
          Active
        </Button>
        <Button color="primary" isFocused>
          Focused
        </Button>
        <Button color="primary" isHovered>
          Hovered
        </Button>
      </div>
    </div>
  ),
};

export const FullWidth: Story = {
  render: () => (
    <div className="buttons is-direction-vertical">
      <Button fullWidth>Full Width</Button>
      <Button color="primary" fullWidth>
        Full Width Primary
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="buttons">
      <Button>
        <span className="icon">
          <i className="fas fa-home"></i>
        </span>
        <span>Home</span>
      </Button>
      <Button color="success">
        <span className="icon">
          <i className="fas fa-check"></i>
        </span>
        <span>Save</span>
      </Button>
      <Button color="danger">
        <span>Delete</span>
        <span className="icon">
          <i className="fas fa-times"></i>
        </span>
      </Button>
    </div>
  ),
};

export const Combinations: Story = {
  render: () => (
    <div>
      <div className="buttons mb-4">
        <Button color="primary" isOutlined isRounded>
          Primary Outlined Rounded
        </Button>
        <Button color="success" isInverted isRounded>
          Success Inverted Rounded
        </Button>
        <Button color="info" isOutlined isLoading>
          Info Outlined Loading
        </Button>
      </div>
      <div className="buttons">
        <Button color="warning" size="small" isRounded>
          Warning Small Rounded
        </Button>
        <Button color="danger" size="large" isOutlined>
          Danger Large Outlined
        </Button>
        <Button color="dark" isLight isInverted>
          Dark Light Inverted
        </Button>
      </div>
    </div>
  ),
};

const ButtonGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="buttons has-addons">{children}</div>
);

export const GroupedButtons: Story = {
  render: () => (
    <div>
      <ButtonGroup>
        <Button color="success">Save</Button>
        <Button>Cancel</Button>
        <Button color="danger">Delete</Button>
      </ButtonGroup>
      <ButtonGroup>
        <Button color="info" isOutlined>
          Left
        </Button>
        <Button color="info" isOutlined>
          Center
        </Button>
        <Button color="info" isOutlined>
          Right
        </Button>
      </ButtonGroup>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    children: "Playground Button",
    color: "primary",
    size: "normal",
    isOutlined: false,
    isRounded: false,
    isLoading: false,
    fullWidth: false,
  },
};
