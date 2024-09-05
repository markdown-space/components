import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Tab } from "../components/Tab";

const meta = {
  title: "Bulma Components/Tabs",
  component: Tab,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Tab story
export const AllTabs: Story = {
  render: () => <Tab />,
};

// Basic Tabs
export const BasicTabs: Story = {
  render: () => (
    <div className="tabs">
      <ul>
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Music</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </ul>
    </div>
  ),
};

// Centered Tabs with Icons
export const CenteredTabsWithIcons: Story = {
  render: () => (
    <div className="tabs is-centered">
      <ul>
        <li className="is-active">
          <a>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span>Videos</span>
          </a>
        </li>
        <li>
          <a>
            <span>Documents</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};

// Tabs Sizes
export const TabsSizes: Story = {
  render: () => (
    <div>
      <div className="tabs is-small">
        <ul>
          <li className="is-active">
            <a>Small</a>
          </li>
          <li>
            <a>Size</a>
          </li>
        </ul>
      </div>
      <div className="tabs">
        <ul>
          <li className="is-active">
            <a>Normal</a>
          </li>
          <li>
            <a>Size</a>
          </li>
        </ul>
      </div>
      <div className="tabs is-medium">
        <ul>
          <li className="is-active">
            <a>Medium</a>
          </li>
          <li>
            <a>Size</a>
          </li>
        </ul>
      </div>
      <div className="tabs is-large">
        <ul>
          <li className="is-active">
            <a>Large</a>
          </li>
          <li>
            <a>Size</a>
          </li>
        </ul>
      </div>
    </div>
  ),
};

// Boxed Tabs
export const BoxedTabs: Story = {
  render: () => (
    <div className="tabs is-boxed">
      <ul>
        <li className="is-active">
          <a>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span>Videos</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};

// Toggle Tabs
export const ToggleTabs: Story = {
  render: () => (
    <div className="tabs is-toggle">
      <ul>
        <li className="is-active">
          <a>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span>Videos</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};

// Rounded Toggle Tabs
export const RoundedToggleTabs: Story = {
  render: () => (
    <div className="tabs is-toggle is-toggle-rounded">
      <ul>
        <li className="is-active">
          <a>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span>Videos</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};

// Fullwidth Tabs
export const FullwidthTabs: Story = {
  render: () => (
    <div className="tabs is-fullwidth">
      <ul>
        <li>
          <a>
            <span>Left</span>
          </a>
        </li>
        <li>
          <a>
            <span>Up</span>
          </a>
        </li>
        <li>
          <a>
            <span>Right</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};

// Centered Boxed Tabs
export const CenteredBoxedTabs: Story = {
  render: () => (
    <div className="tabs is-centered is-boxed">
      <ul>
        <li className="is-active">
          <a>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span>Videos</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};

// Large Toggle Fullwidth Tabs
export const LargeToggleFullwidthTabs: Story = {
  render: () => (
    <div className="tabs is-toggle is-fullwidth is-large">
      <ul>
        <li className="is-active">
          <a>
            <span>Pictures</span>
          </a>
        </li>
        <li>
          <a>
            <span>Music</span>
          </a>
        </li>
        <li>
          <a>
            <span>Videos</span>
          </a>
        </li>
      </ul>
    </div>
  ),
};
