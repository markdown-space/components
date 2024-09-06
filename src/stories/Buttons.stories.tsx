import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Button } from "../components/Button";
import { Icon, IconText } from "../components/Icon";
import { Color, Size } from "../types/shared";

const colors: Color[] = [
  "white",
  "black",
  "light",
  "dark",
  "text",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
];

const sizes: Size[] = ["small", "normal", "medium", "large"];

export default {
  title: "Bulma Components/Button",
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
    as: {
      options: ["button", "a", "input"],
      description:
        "The element type to render. Can be 'button', 'a', or 'input'.",
      table: {
        type: { summary: "button | a | input" },
        defaultValue: { summary: "button" },
      },
    },
    color: {
      control: "select",
      options: colors,
      description: "The color of the button",
      table: {
        type: {
          summary: colors.join(" | "),
        },
      },
    },
    size: {
      control: "select",
      options: sizes,
      description: "The size of the button",
      table: {
        type: {
          summary: sizes.join(" | "),
        },
      },
    },
    isOutlined: {
      control: "boolean",
      description: "Applies an outlined style",
      type: "boolean",
    },
    isInverted: {
      control: "boolean",
      description: "Inverts the button colors",
      type: "boolean",
    },
    isRounded: {
      control: "boolean",
      description: "Applies rounded corners",
      type: "boolean",
    },
    isLoading: {
      control: "boolean",
      description: "Shows a loading spinner",
      type: "boolean",
    },
    isActive: {
      control: "boolean",
      description: "Applies an active state",
      type: "boolean",
    },
    isFocused: {
      control: "boolean",
      description: "Applies a focused state",
      type: "boolean",
    },
    isHovered: {
      control: "boolean",
      description: "Applies a hover state",
      type: "boolean",
    },
    isLight: {
      control: "boolean",
      description: "Applies a light variant",
      type: "boolean",
    },
    isDark: {
      control: "boolean",
      description: "Applies a dark variant",
      type: "boolean",
    },
    fullWidth: {
      control: "boolean",
      description: "Makes the button full width",
      type: "boolean",
    },
    theme: {
      control: "radio",
      options: ["light", "dark"],
      description: "Sets the overall theme",
      table: {
        type: {
          summary: "light | dark",
        },
      },
    },
    children: {
      description: "The content of the button (not applicable for input type)",
      control: {
        type: "text",
      },
      table: {
        type: { summary: "ReactNode" },
      },
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
    <Block className="buttons">
      <Button>Default</Button>
      <Button color="white">White</Button>
      <Button color="black">Black</Button>
      <Button color="light">Light</Button>
      <Button color="dark">Dark</Button>
      <Button color="text">Text</Button>
      <Button color="primary">Primary</Button>
      <Button color="link">Link</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
    </Block>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <Block className="buttons">
      <Button size="small">Small</Button>
      <Button>Normal</Button>
      <Button size="medium">Medium</Button>
      <Button size="large">Large</Button>
    </Block>
  ),
};

export const Outlined: Story = {
  render: () => (
    <Block className="buttons">
      <Button isOutlined color="black">
        Black
      </Button>
      <Button isOutlined color="dark">
        Dark
      </Button>
      <Button isOutlined color="primary">
        Primary
      </Button>
      <Button isOutlined color="link">
        Link
      </Button>
      <Button isOutlined color="info">
        Info
      </Button>
      <Button isOutlined color="success">
        Success
      </Button>
      <Button isOutlined color="warning">
        Warning
      </Button>
      <Button isOutlined color="danger">
        Danger
      </Button>
    </Block>
  ),
};

export const Inverted: Story = {
  render: () => (
    <Block
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      <Button isInverted color="primary">
        Primary
      </Button>
      <Button isInverted color="link">
        Link
      </Button>
      <Button isInverted color="info">
        Info
      </Button>
      <Button isInverted color="success">
        Success
      </Button>
      <Button isInverted color="warning">
        Warning
      </Button>
      <Button isInverted color="danger">
        Danger
      </Button>
    </Block>
  ),
};

export const Rounded: Story = {
  render: () => (
    <Block className="buttons">
      <Button isRounded>Default</Button>
      <Button isRounded color="black">
        Black
      </Button>
      <Button isRounded color="light">
        Light
      </Button>
      <Button isRounded color="dark">
        Dark
      </Button>
      <Button isRounded color="primary">
        Primary
      </Button>
      <Button isRounded color="link">
        Link
      </Button>
      <Button isRounded color="info">
        Info
      </Button>
      <Button isRounded color="success">
        Success
      </Button>
      <Button isRounded color="warning">
        Warning
      </Button>
      <Button isRounded color="danger">
        Danger
      </Button>
    </Block>
  ),
};

export const Loading: Story = {
  render: () => (
    <Block className="buttons">
      <Button isLoading>Default</Button>
      <Button isLoading color="white">
        White
      </Button>
      <Button isLoading color="black">
        Black
      </Button>
      <Button isLoading color="light">
        Light
      </Button>
      <Button isLoading color="dark">
        Dark
      </Button>
      <Button isLoading color="primary">
        Primary
      </Button>
      <Button isLoading color="link">
        Link
      </Button>
      <Button isLoading color="info">
        Info
      </Button>
      <Button isLoading color="success">
        Success
      </Button>
      <Button isLoading color="warning">
        Warning
      </Button>
      <Button isLoading color="danger">
        Danger
      </Button>
    </Block>
  ),
};

export const Skeleton: Story = {
  render: () => (
    <Block className="buttons">
      <Button isSkeleton>Default</Button>
      <Button isSkeleton color="white">
        White
      </Button>
      <Button isSkeleton color="black">
        Black
      </Button>
      <Button isSkeleton color="light">
        Light
      </Button>
      <Button isSkeleton color="dark">
        Dark
      </Button>
      <Button isSkeleton color="primary">
        Primary
      </Button>
      <Button isSkeleton color="link">
        Link
      </Button>
      <Button isSkeleton color="info">
        Info
      </Button>
      <Button isSkeleton color="success">
        Success
      </Button>
      <Button isSkeleton color="warning">
        Warning
      </Button>
      <Button isSkeleton color="danger">
        Danger
      </Button>
    </Block>
  ),
};

export const States: Story = {
  render: () => (
    <Block>
      <Block className="buttons mb-4">
        <Button isActive>Active</Button>
        <Button isFocused>Focused</Button>
        <Button isHovered>Hovered</Button>
      </Block>
      <Block className="buttons">
        <Button color="primary" isActive>
          Active
        </Button>
        <Button color="primary" isFocused>
          Focused
        </Button>
        <Button color="primary" isHovered>
          Hovered
        </Button>
      </Block>
    </Block>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: "Full Width",
  },
};

export const WithIcons: Story = {
  render: () => (
    <Block className="buttons">
      <Button>
        <IconText>
          <Icon icon="fas fa-home" />
          <span>Home</span>
        </IconText>
      </Button>
      <Button color="success">
        <IconText>
          <Icon icon="fas fa-check" />
          <span>Save</span>
        </IconText>
      </Button>
      <Button color="danger">
        <IconText>
          <Icon icon="fas fa-times" />
          <span>Delete</span>
        </IconText>
      </Button>
    </Block>
  ),
};

export const GroupedButtons: Story = {
  render: () => (
    <Block>
      <Block className="buttons has-addons">
        <Button color="success">Save</Button>
        <Button>Cancel</Button>
        <Button color="danger">Delete</Button>
      </Block>
      <Block className="buttons has-addons">
        <Button color="info" isOutlined>
          Left
        </Button>
        <Button color="info" isOutlined>
          Center
        </Button>
        <Button color="info" isOutlined>
          Right
        </Button>
      </Block>
    </Block>
  ),
};

export const Link: Story = {
  render: () => {
    return (
      <Button as="a" href="https://markdown.space/" target="_blank">
        Visit Example
      </Button>
    );
  },
};

export const ResetInput: Story = {
  render: () => {
    return <Button as="input" type="reset" color="light" />;
  },
};

export const SubmitInput: Story = {
  render: () => {
    return <Button as="input" type="submit" color="info" />;
  },
};
