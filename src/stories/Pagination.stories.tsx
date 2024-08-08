import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Pagination } from "../components/Pagination";

const meta = {
  title: "Components/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Pagination story
export const DefaultPagination: Story = {
  render: () => <Pagination />,
};

// Basic Pagination
export const BasicPagination: Story = {
  render: () => (
    <nav className="pagination">
      <a className="pagination-previous is-disabled">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link">1</a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link">45</a>
        </li>
        <li>
          <a className="pagination-link is-current">46</a>
        </li>
        <li>
          <a className="pagination-link">47</a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link">86</a>
        </li>
      </ul>
    </nav>
  ),
};

// Rounded Pagination
export const RoundedPagination: Story = {
  render: () => (
    <nav
      className="pagination is-rounded"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 45">
            45
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 47">
            47
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 86">
            86
          </a>
        </li>
      </ul>
    </nav>
  ),
};

// Pagination with disabled previous button
export const DisabledPreviousPagination: Story = {
  render: () => (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a className="pagination-previous is-disabled">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 1"
            aria-current="page"
          >
            1
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 2">
            2
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 3">
            3
          </a>
        </li>
      </ul>
    </nav>
  ),
};

// Pagination with disabled next button
export const DisabledNextPagination: Story = {
  render: () => (
    <nav className="pagination" role="navigation" aria-label="pagination">
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next is-disabled">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 98">
            98
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 99">
            99
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 100"
            aria-current="page"
          >
            100
          </a>
        </li>
      </ul>
    </nav>
  ),
};

// Centered Pagination
export const CenteredPagination: Story = {
  render: () => (
    <nav
      className="pagination is-centered"
      role="navigation"
      aria-label="pagination"
    >
      <a className="pagination-previous">Previous</a>
      <a className="pagination-next">Next page</a>
      <ul className="pagination-list">
        <li>
          <a className="pagination-link" aria-label="Goto page 1">
            1
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 45">
            45
          </a>
        </li>
        <li>
          <a
            className="pagination-link is-current"
            aria-label="Page 46"
            aria-current="page"
          >
            46
          </a>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 47">
            47
          </a>
        </li>
        <li>
          <span className="pagination-ellipsis">&hellip;</span>
        </li>
        <li>
          <a className="pagination-link" aria-label="Goto page 86">
            86
          </a>
        </li>
      </ul>
    </nav>
  ),
};
