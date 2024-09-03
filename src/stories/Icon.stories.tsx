import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Icon, IconColor, IconText } from "../components/Icon";

const meta: Meta<typeof Icon> = {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Icon and IconText components for displaying icons and icon-text combinations.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type IconStory = StoryObj<typeof Icon>;
type IconTextStory = StoryObj<typeof IconText>;

const colors: IconColor[] = [
  "white",
  "black",
  "light",
  "dark",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
  "black-bis",
  "black-ter",
  "grey-darker",
  "grey-dark",
  "grey",
  "grey-light",
  "grey-lighter",
  "white-ter",
  "white-bis",
];

const sizes = ["small", "medium", "large"] as const;

export const BasicIcon: IconStory = {
  args: {
    icon: "fas fa-home",
  },
};

export const ColoredIcon: IconStory = {
  args: {
    icon: "fas fa-star",
    color: "primary",
  },
};

export const SizedIcon: IconStory = {
  args: {
    icon: "fas fa-user",
    size: "large",
  },
};

export const IconGallery: IconStory = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {["home", "star", "user", "cog", "envelope", "bell"].map((iconName) => (
        <Icon key={iconName} icon={`fas fa-${iconName}`} />
      ))}
    </div>
  ),
};

export const IconColors: IconStory = {
  render: () => (
    <Block style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {colors.map((color) => (
        <Icon key={color} icon="fas fa-square" color={color} />
      ))}
    </Block>
  ),
};

export const BasicIconText: IconTextStory = {
  render: () => (
    <IconText>
      <Icon icon="fas fa-home" />
      <span>Home</span>
    </IconText>
  ),
};

// Helper function to get Font Awesome size class
const getFaSize = (size: (typeof sizes)[number]) => {
  switch (size) {
    case "small":
      return "fa-sm";
    case "medium":
      return "fa-lg";
    case "large":
      return "fa-2x";
    default:
      return "";
  }
};

export const IconSizes: IconStory = {
  render: () => (
    <Block style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      {sizes.map((size) => (
        <Icon key={size} icon={`fas fa-user ${getFaSize(size)}`} size={size} />
      ))}
    </Block>
  ),
};

export const IconSizesWithText: IconStory = {
  render: () => (
    <Block style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {sizes.map((size) => (
        <div
          key={size}
          style={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          <Icon icon={`fas fa-star ${getFaSize(size)}`} size={size} />
          <span>{size}</span>
        </div>
      ))}
    </Block>
  ),
};

export const IconTextSizes: IconTextStory = {
  render: () => (
    <Block style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {sizes.map((size) => (
        <IconText key={size} style={{ display: "flex", alignItems: "center" }}>
          <Icon icon={`fas fa-home ${getFaSize(size)}`} size={size} />
          <span
            className={`is-size-${size === "small" ? 6 : size === "medium" ? 4 : 3}`}
          >
            Home
          </span>
        </IconText>
      ))}
    </Block>
  ),
};

export const IconTextSizesComparison: IconTextStory = {
  render: () => (
    <Block style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {sizes.map((size) => (
        <Block
          key={size}
          style={{ display: "flex", alignItems: "center", gap: "20px" }}
        >
          <IconText style={{ display: "flex", alignItems: "center" }}>
            <Icon icon={`fas fa-home ${getFaSize(size)}`} size={size} />
            <span
              className={`is-size-${size === "small" ? 6 : size === "medium" ? 4 : 3}`}
            >
              Home
            </span>
          </IconText>
          <span>{size}</span>
        </Block>
      ))}
    </Block>
  ),
};

export const MixedSizesIconText: IconTextStory = {
  render: () => (
    <IconText style={{ display: "flex", alignItems: "center" }}>
      <Icon icon="fas fa-cloud fa-2x" size="large" />
      <Icon icon="fas fa-arrow-right fa-sm" size="small" />
      <Icon icon="fas fa-server fa-lg" size="medium" />
      <span>Cloud Services</span>
    </IconText>
  ),
};

export const ColoredIconText: IconTextStory = {
  render: () => (
    <IconText color="primary">
      <Icon icon="fas fa-info-circle" />
      <span>Information</span>
    </IconText>
  ),
};

export const IconTextAsDiv: IconTextStory = {
  render: () => (
    <IconText as="div">
      <Icon icon="fas fa-exclamation-triangle" color="warning" />
      <span>Warning: This is important!</span>
    </IconText>
  ),
};

export const MultipleIconsText: IconTextStory = {
  render: () => (
    <IconText>
      <Icon icon="fas fa-train" />
      <span>to</span>
      <Icon icon="fas fa-plane" />
      <span>Transfer</span>
    </IconText>
  ),
};

export const IconTextPlayground: IconTextStory = {
  render: (args) => (
    <IconText {...args}>
      <Icon icon="fas fa-rocket" />
      <span>Customizable IconText</span>
    </IconText>
  ),
  args: {
    as: "span",
    color: "info",
  },
  argTypes: {
    as: {
      control: "select",
      options: ["span", "div"],
      description: "Element type to render",
    },
    color: {
      control: "select",
      options: colors,
      description: "Text color of the IconText",
    },
  },
};

export const IconPlayground: IconStory = {
  args: {
    icon: "fas fa-star fa-lg",
    color: "primary",
    size: "medium",
  },
  argTypes: {
    icon: {
      control: "text",
      description: "Font Awesome icon class (include size class if needed)",
    },
    color: {
      control: "select",
      options: colors,
      description: "Color of the icon",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "Size of the icon (affects container, not icon itself)",
    },
  },
};
