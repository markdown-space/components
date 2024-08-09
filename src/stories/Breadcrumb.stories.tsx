import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Breadcrumb } from "../components/Breadcrumb";

const meta = {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Breadcrumb story
export const DefaultBreadcrumb: Story = {
  render: () => <Breadcrumb />,
};

// Basic Breadcrumb
export const BasicBreadcrumb: Story = {
  render: () => (
    <nav className="breadcrumb">
      <ul>
        <li>
          <a>Bulma</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <li>
          <a>Components</a>
        </li>
        <li className="is-active">
          <a>Breadcrumb</a>
        </li>
      </ul>
    </nav>
  ),
};

// Centered Breadcrumb
export const CenteredBreadcrumb: Story = {
  render: () => (
    <nav className="breadcrumb is-centered">
      <ul>
        <li>
          <a>Bulma</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <li>
          <a>Components</a>
        </li>
        <li className="is-active">
          <a>Breadcrumb</a>
        </li>
      </ul>
    </nav>
  ),
};

// Right-aligned Breadcrumb
export const RightAlignedBreadcrumb: Story = {
  render: () => (
    <nav className="breadcrumb is-right">
      <ul>
        <li>
          <a>Bulma</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <li>
          <a>Components</a>
        </li>
        <li className="is-active">
          <a>Breadcrumb</a>
        </li>
      </ul>
    </nav>
  ),
};

// Breadcrumb with Icons
export const BreadcrumbWithIcons: Story = {
  render: () => (
    <nav className="breadcrumb">
      <ul>
        <li>
          <a>
            <span className="icon is-small">
              <i className="fas fa-home" aria-hidden="true"></i>
            </span>
            <span>Bulma</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <i className="fas fa-book" aria-hidden="true"></i>
            </span>
            <span>Documentation</span>
          </a>
        </li>
        <li>
          <a>
            <span className="icon is-small">
              <i className="fas fa-puzzle-piece" aria-hidden="true"></i>
            </span>
            <span>Components</span>
          </a>
        </li>
        <li className="is-active">
          <a>
            <span className="icon is-small">
              <i className="fas fa-thumbs-up" aria-hidden="true"></i>
            </span>
            <span>Breadcrumb</span>
          </a>
        </li>
      </ul>
    </nav>
  ),
};

// Large Breadcrumb
export const LargeBreadcrumb: Story = {
  render: () => (
    <nav className="breadcrumb is-large">
      <ul>
        <li>
          <a>Bulma</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <li>
          <a>Components</a>
        </li>
        <li className="is-active">
          <a>Breadcrumb</a>
        </li>
      </ul>
    </nav>
  ),
};

// Breadcrumb with Custom Separator
export const BreadcrumbWithCustomSeparator: Story = {
  render: () => (
    <nav className="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li>
          <a>Bulma</a>
        </li>
        <li>
          <a>Documentation</a>
        </li>
        <li>
          <a>Components</a>
        </li>
        <li className="is-active">
          <a aria-current="page">Breadcrumb</a>
        </li>
      </ul>
    </nav>
  ),
};

BreadcrumbWithCustomSeparator.parameters = {
  docs: {
    description: {
      story:
        'To change the separator, you need to add CSS. For example: `.breadcrumb li+li::before { content: ">" }`',
    },
  },
};
