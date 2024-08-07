import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Buttons } from "../../lib";

export default {
  title: "Components/Buttons",
  component: Buttons,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Buttons>;

type Story = StoryObj<typeof Buttons>;

// Main story showing all buttons
export const AllButtons: Story = {
  render: () => <Buttons />,
};

// Basic button variations
export const BasicButtons: Story = {
  render: () => (
    <div className="buttons">
      <a className="button">Button</a>
      <a className="button is-white">White</a>
      <a className="button is-light">Light</a>
      <a className="button is-dark">Dark</a>
      <a className="button is-black">Black</a>
      <a className="button is-link">Link</a>
      <a className="button is-text">Text</a>
    </div>
  ),
};

// Color variations
export const ColorButtons: Story = {
  render: () => (
    <div className="buttons">
      <a className="button is-primary">Primary</a>
      <a className="button is-info">Info</a>
      <a className="button is-success">Success</a>
      <a className="button is-warning">Warning</a>
      <a className="button is-danger">Danger</a>
    </div>
  ),
};

// State variations
export const StateButtons: Story = {
  render: () => (
    <div>
      <div className="buttons">
        <a className="button is-focused">Focused</a>
        <a className="button is-primary is-focused">Focused</a>
      </div>
      <div className="buttons">
        <a className="button is-hovered">Hovered</a>
        <a className="button is-primary is-hovered">Hovered</a>
      </div>
      <div className="buttons">
        <a className="button is-active">Active</a>
        <a className="button is-primary is-active">Active</a>
      </div>
      <div className="buttons">
        <a className="button is-loading">Loading</a>
        <a className="button is-primary is-loading">Loading</a>
      </div>
    </div>
  ),
};

// Rounded buttons
export const RoundedButtons: Story = {
  render: () => (
    <div className="buttons">
      <a className="button is-rounded">Rounded</a>
      <a className="button is-primary is-rounded">Rounded</a>
      <a className="button is-link is-rounded">Rounded</a>
      <a className="button is-info is-rounded">Rounded</a>
      <a className="button is-success is-rounded">Rounded</a>
      <a className="button is-danger is-rounded">Rounded</a>
    </div>
  ),
};

// Size variations
export const SizeButtons: Story = {
  render: () => (
    <div className="buttons">
      <a className="button is-small">Small</a>
      <a className="button">Normal</a>
      <a className="button is-medium">Medium</a>
      <a className="button is-large">Large</a>
    </div>
  ),
};

// Outlined buttons
export const OutlinedButtons: Story = {
  render: () => (
    <div className="buttons">
      <a className="button is-link is-outlined">Outlined</a>
      <a className="button is-primary is-outlined">Outlined</a>
      <a className="button is-info is-outlined">Outlined</a>
      <a className="button is-success is-outlined">Outlined</a>
      <a className="button is-danger is-outlined">Outlined</a>
    </div>
  ),
};

// Inverted and Inverted Outlined buttons
export const InvertedButtons: Story = {
  render: () => (
    <div className="notification is-primary">
      <div className="buttons">
        <a className="button is-primary is-inverted is-outlined">
          Invert Outlined
        </a>
        <a className="button is-info is-inverted is-outlined">
          Invert Outlined
        </a>
        <a className="button is-success is-inverted is-outlined">
          Invert Outlined
        </a>
        <a className="button is-danger is-inverted is-outlined">
          Invert Outlined
        </a>
      </div>
      <div className="buttons">
        <a className="button is-primary is-inverted">Inverted</a>
        <a className="button is-info is-inverted">Inverted</a>
        <a className="button is-success is-inverted">Inverted</a>
        <a className="button is-danger is-inverted">Inverted</a>
      </div>
    </div>
  ),
};
