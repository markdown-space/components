import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Notification } from "../components/Notification";

export default {
  title: "Components/Notification",
  component: Notification,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A versatile Notification component based on Bulma classes.",
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
        "ghost",
      ],
      description: "The color of the notification",
    },
    isLight: {
      control: "boolean",
      description: "Applies a lighter version of the color",
    },
    hasDelete: {
      control: "boolean",
      description: "Shows a delete button",
    },
    children: {
      control: "text",
      description: "The content of the notification",
    },
    onDelete: {
      action: "deleted",
      description: "Callback when delete button is clicked",
    },
  },
} satisfies Meta<typeof Notification>;

type Story = StoryObj<typeof Notification>;

// Default story
export const Default: Story = {
  args: {
    children:
      "I am enough of an artist to draw freely upon my imagination. Imagination is more important than knowledge. Knowledge is limited.",
  },
};

// Color variants story
export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Notification color="primary">Primary Notification</Notification>
      <Notification color="link">Link Notification</Notification>
      <Notification color="info">Info Notification</Notification>
      <Notification color="success">Success Notification</Notification>
      <Notification color="warning">Warning Notification</Notification>
      <Notification color="danger">Danger Notification</Notification>
      <Notification color="dark">Dark Notification</Notification>
      <Notification color="light">Light Notification</Notification>
    </div>
  ),
};

// Light variants story
export const LightVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <Notification color="primary" isLight>
        Primary Light Notification
      </Notification>
      <Notification color="link" isLight>
        Link Light Notification
      </Notification>
      <Notification color="info" isLight>
        Info Light Notification
      </Notification>
      <Notification color="success" isLight>
        Success Light Notification
      </Notification>
      <Notification color="warning" isLight>
        Warning Light Notification
      </Notification>
      <Notification color="danger" isLight>
        Danger Light Notification
      </Notification>
    </div>
  ),
};

// Without delete button story
export const WithoutDelete: Story = {
  args: {
    hasDelete: false,
    children: "This notification doesn't have a delete button.",
  },
};

// With custom content story
export const WithCustomContent: Story = {
  render: () => (
    <Notification color="info">
      <h4 className="title is-4">Info Notification</h4>
      <p>
        This is a notification with custom content, including a title and
        paragraph.
      </p>
    </Notification>
  ),
};

// Interactive delete story
export const InteractiveDelete: Story = {
  render: () => {
    const [isVisible, setIsVisible] = useState(true);
    if (!isVisible)
      return (
        <button onClick={() => setIsVisible(true)}>Show Notification</button>
      );
    return (
      <Notification color="warning" onDelete={() => setIsVisible(false)}>
        Click the delete button to hide this notification.
      </Notification>
    );
  },
};
