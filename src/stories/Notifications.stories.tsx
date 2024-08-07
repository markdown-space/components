import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Notifications } from "../../lib";

const meta = {
  title: "Components/Notifications",
  component: Notifications,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Notifications>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Notifications story
export const AllNotifications: Story = {
  render: () => <Notifications />,
};

// Individual Notification stories
export const Default: Story = {
  render: () => (
    <div className="notification">
      <button className="delete"></button>I am enough of an artist to draw
      freely upon my imagination. Imagination is more important than knowledge.
      Knowledge is limited.
    </div>
  ),
};

export const Primary: Story = {
  render: () => (
    <div className="notification is-primary">
      <button className="delete"></button>I am enough of an artist to draw
      freely upon my imagination. Imagination is more important than knowledge.
      Knowledge is limited.
    </div>
  ),
};

export const Link: Story = {
  render: () => (
    <div className="notification is-link">
      <button className="delete"></button>I am enough of an artist to draw
      freely upon my imagination. Imagination is more important than knowledge.
      Knowledge is limited.
    </div>
  ),
};

export const Info: Story = {
  render: () => (
    <div className="notification is-info">
      <button className="delete"></button>I am enough of an artist to draw
      freely upon my imagination. Imagination is more important than knowledge.
      Knowledge is limited.
    </div>
  ),
};

export const Success: Story = {
  render: () => (
    <div className="notification is-success">
      <button className="delete"></button>I am enough of an artist to draw
      freely upon my imagination. Imagination is more important than knowledge.
      Knowledge is limited.
    </div>
  ),
};

export const Warning: Story = {
  render: () => (
    <div className="notification is-warning">
      <button className="delete"></button>I am enough of an artist to draw
      freely upon my imagination. Imagination is more important than knowledge.
      Knowledge is limited.
    </div>
  ),
};

export const Danger: Story = {
  render: () => (
    <div className="notification is-danger">
      <button className="delete"></button>I am enough of an artist to draw
      freely upon my imagination. Imagination is more important than knowledge.
      Knowledge is limited.
    </div>
  ),
};

// Notification with custom content
export const CustomContentNotification: Story = {
  render: () => (
    <div className="notification is-info">
      <button className="delete"></button>
      <h3 className="title is-4">Custom Notification</h3>
      <p>This is a notification with custom content.</p>
    </div>
  ),
};

// Notification without delete button
export const NotificationWithoutDelete: Story = {
  render: () => (
    <div className="notification is-warning">
      This notification does not have a delete button.
    </div>
  ),
};

// Notification with action buttons
export const NotificationWithActions: Story = {
  render: () => (
    <div className="notification is-danger">
      <button className="delete"></button>
      <p>This is an important notification.</p>
      <div className="buttons mt-3">
        <button className="button is-small is-light">Dismiss</button>
        <button className="button is-small is-danger">Take Action</button>
      </div>
    </div>
  ),
};
