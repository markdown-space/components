import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Tag } from "../components/Tag";
import { Color, Size } from "../types/shared";

export default {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile Tag component based on Bulma classes with various colors, sizes, and modifiers.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "link",
        "info",
        "success",
        "warning",
        "danger",
        "dark",
        "light",
      ],
      description: "The color of the tag",
    },
    size: {
      control: "select",
      options: ["normal", "medium", "large"],
      description: "The size of the tag",
    },
    isLight: {
      control: "boolean",
      description: "Applies a lighter version of the color",
    },
    isHoverable: {
      control: "boolean",
      description: "Adds a hover effect to the tag",
    },
    isRounded: {
      control: "boolean",
      description: "Applies rounded corners to the tag",
    },
    isDelete: {
      control: "boolean",
      description: "Renders the tag as a delete button",
    },
    children: {
      control: "text",
      description: "The content of the tag",
    },
  },
} satisfies Meta<typeof Tag>;

type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  args: {
    children: "Tag",
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {[
        "primary",
        "link",
        "info",
        "success",
        "warning",
        "danger",
        "dark",
        "light",
      ].map((color) => (
        <Tag key={color} color={color as Color}>
          {color}
        </Tag>
      ))}
    </div>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      {["normal", "medium", "large"].map((size) => (
        <Tag key={size} size={size as Exclude<Size, "small">} color="primary">
          {size}
        </Tag>
      ))}
    </div>
  ),
};

export const LightTags: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {["primary", "link", "info", "success", "warning", "danger"].map(
        (color) => (
          <Tag key={color} color={color as Color} isLight>
            {color}
          </Tag>
        ),
      )}
    </div>
  ),
};

export const RoundedTags: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <Tag color="primary" isRounded>
        Rounded
      </Tag>
      <Tag color="info" isRounded>
        Rounded
      </Tag>
      <Tag color="success" isRounded>
        Rounded
      </Tag>
    </div>
  ),
};

export const HoverableTags: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <Tag color="primary" isHoverable>
        Hoverable
      </Tag>
      <Tag color="info" isHoverable>
        Hover me
      </Tag>
      <Tag color="success" isHoverable>
        Hover effect
      </Tag>
    </div>
  ),
};

export const SkeletonTag: Story = {
  args: {
    isSkeleton: true,
    children: "Loading",
  },
};

export const DeleteTags: Story = {
  render: () => (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <Tag>Tag</Tag>
      <Tag isDelete />
    </div>
  ),
};

export const CombinedFeatures: Story = {
  render: () => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      <Tag color="primary" isLight isRounded>
        Light & Rounded
      </Tag>
      <Tag color="info" isHoverable isRounded>
        Hoverable & Rounded
      </Tag>
      <Tag color="success" size="medium" isLight>
        Medium & Light
      </Tag>
      <Tag color="warning" size="large" isRounded>
        Large & Rounded
      </Tag>
    </div>
  ),
};

export const TagGroup: Story = {
  render: () => (
    <div className="tags">
      <Tag color="primary">First</Tag>
      <Tag color="info">Second</Tag>
      <Tag color="success">Third</Tag>
      <Tag color="warning">Fourth</Tag>
      <Tag color="danger">Fifth</Tag>
    </div>
  ),
};

export const TagWithDelete: Story = {
  render: () => (
    <div className="tags has-addons">
      <Tag color="info">Package</Tag>
      <Tag isDelete />
    </div>
  ),
};
