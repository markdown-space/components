import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Dropdown } from "../components/Dropdown";

const meta = {
  title: "Components/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const DefaultDropdown: Story = {
  render: () => <Dropdown />,
};

export const SimpleDropdown: Story = {
  render: () => (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu"
        >
          <span>Dropdown button</span>
          <span className="icon is-small">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Dropdown item
          </a>
          <a className="dropdown-item">Other dropdown item</a>
          <a href="#" className="dropdown-item is-active">
            Active dropdown item
          </a>
          <a href="#" className="dropdown-item">
            Other dropdown item
          </a>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            With a divider
          </a>
        </div>
      </div>
    </div>
  ),
};

export const DropdownWithContent: Story = {
  render: () => (
    <div className="dropdown is-active">
      <div className="dropdown-trigger">
        <button
          className="button is-info"
          aria-haspopup="true"
          aria-controls="dropdown-menu2"
        >
          <span>Content</span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu2" role="menu">
        <div className="dropdown-content">
          <div className="dropdown-item">
            <p>
              You can insert <strong>any type of content</strong> within the
              dropdown menu.
            </p>
          </div>
          <hr className="dropdown-divider" />
          <div className="dropdown-item">
            <p>
              You simply need to use a <code>&lt;div&gt;</code> instead.
            </p>
          </div>
          <hr className="dropdown-divider" />
          <a href="#" className="dropdown-item">
            This is a link
          </a>
        </div>
      </div>
    </div>
  ),
};

export const DropdownWithHover: Story = {
  render: () => (
    <div className="dropdown is-hoverable">
      <div className="dropdown-trigger">
        <button
          className="button"
          aria-haspopup="true"
          aria-controls="dropdown-menu3"
        >
          <span>Hover me</span>
          <span className="icon is-small">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </span>
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu3" role="menu">
        <div className="dropdown-content">
          <a href="#" className="dropdown-item">
            Overview
          </a>
          <a href="#" className="dropdown-item">
            Elements
          </a>
          <a href="#" className="dropdown-item">
            Components
          </a>
        </div>
      </div>
    </div>
  ),
};

export const DropdownWithDifferentAlignments: Story = {
  render: () => (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div className="dropdown is-active">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu4"
          >
            <span>Aligned left</span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu4" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Dropdown item
            </a>
          </div>
        </div>
      </div>
      <div className="dropdown is-active is-right">
        <div className="dropdown-trigger">
          <button
            className="button"
            aria-haspopup="true"
            aria-controls="dropdown-menu5"
          >
            <span>Aligned right</span>
          </button>
        </div>
        <div className="dropdown-menu" id="dropdown-menu5" role="menu">
          <div className="dropdown-content">
            <a href="#" className="dropdown-item">
              Dropdown item
            </a>
          </div>
        </div>
      </div>
    </div>
  ),
};
