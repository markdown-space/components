import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Button } from "../components/Button";

export default {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "white",
        "light",
        "dark",
        "black",
        "link",
        "text",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
      ],
    },
    size: {
      control: "select",
      options: ["small", "normal", "medium", "large"],
    },
    isOutlined: { control: "boolean" },
    isInverted: { control: "boolean" },
    isRounded: { control: "boolean" },
    isLoading: { control: "boolean" },
    isActive: { control: "boolean" },
    isFocused: { control: "boolean" },
    isHovered: { control: "boolean" },
    fullWidth: { control: "boolean" },
  },
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const AllButtons: Story = {
  render: () => (
    <div className="buttons">
      <Button>Default Button</Button>
      <Button color="primary">Primary</Button>
      <Button color="link">Link</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  ),
};

export const BasicButtons: Story = {
  render: () => (
    <div className="buttons">
      <Button>Button</Button>
      <Button color="white">White</Button>
      <Button color="light">Light</Button>
      <Button color="dark">Dark</Button>
      <Button color="black">Black</Button>
      <Button color="link">Link</Button>
      <Button color="text">Text</Button>
    </div>
  ),
};

export const ColorButtons: Story = {
  render: () => (
    <div className="buttons">
      <Button color="primary">Primary</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </div>
  ),
};

export const StateButtons: Story = {
  render: () => (
    <div>
      <div className="buttons">
        <Button isFocused>Focused</Button>
        <Button color="primary" isFocused>
          Focused
        </Button>
      </div>
      <div className="buttons">
        <Button isHovered>Hovered</Button>
        <Button color="primary" isHovered>
          Hovered
        </Button>
      </div>
      <div className="buttons">
        <Button isActive>Active</Button>
        <Button color="primary" isActive>
          Active
        </Button>
      </div>
      <div className="buttons">
        <Button isLoading>Loading</Button>
        <Button color="primary" isLoading>
          Loading
        </Button>
      </div>
    </div>
  ),
};

export const RoundedButtons: Story = {
  render: () => (
    <div className="buttons">
      <Button isRounded>Rounded</Button>
      <Button color="primary" isRounded>
        Rounded
      </Button>
      <Button color="link" isRounded>
        Rounded
      </Button>
      <Button color="info" isRounded>
        Rounded
      </Button>
      <Button color="success" isRounded>
        Rounded
      </Button>
      <Button color="danger" isRounded>
        Rounded
      </Button>
    </div>
  ),
};

export const SizeButtons: Story = {
  render: () => (
    <div className="buttons">
      <Button size="small">Small</Button>
      <Button>Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </div>
  ),
};

export const OutlinedButtons: Story = {
  render: () => (
    <div className="buttons">
      <Button color="link" isOutlined>
        Outlined
      </Button>
      <Button color="primary" isOutlined>
        Outlined
      </Button>
      <Button color="info" isOutlined>
        Outlined
      </Button>
      <Button color="success" isOutlined>
        Outlined
      </Button>
      <Button color="danger" isOutlined>
        Outlined
      </Button>
    </div>
  ),
};

export const InvertedButtons: Story = {
  render: () => (
    <div className="notification is-primary">
      <div className="buttons">
        <Button color="primary" isInverted isOutlined>
          Invert Outlined
        </Button>
        <Button color="info" isInverted isOutlined>
          Invert Outlined
        </Button>
        <Button color="success" isInverted isOutlined>
          Invert Outlined
        </Button>
        <Button color="danger" isInverted isOutlined>
          Invert Outlined
        </Button>
      </div>
      <div className="buttons">
        <Button color="primary" isInverted>
          Inverted
        </Button>
        <Button color="info" isInverted>
          Inverted
        </Button>
        <Button color="success" isInverted>
          Inverted
        </Button>
        <Button color="danger" isInverted>
          Inverted
        </Button>
      </div>
    </div>
  ),
};
