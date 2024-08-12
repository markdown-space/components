import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Table } from "../components/Table";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof Table>;

export const DefaultTable: Story = {
  render: () => <Table />,
};

export const SimpleTable: Story = {
  render: () => (
    <table className="table">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
      </tbody>
    </table>
  ),
};

export const StripedTable: Story = {
  render: () => (
    <table className="table is-striped">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
      </tbody>
    </table>
  ),
};

export const BorderedTable: Story = {
  render: () => (
    <table className="table is-bordered">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
      </tbody>
    </table>
  ),
};

export const NarrowTable: Story = {
  render: () => (
    <table className="table is-narrow">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
      </tbody>
    </table>
  ),
};

export const CombinedStylesTable: Story = {
  render: () => (
    <table className="table is-bordered is-striped is-narrow">
      <thead>
        <tr>
          <th>One</th>
          <th>Two</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Three</td>
          <td>Four</td>
        </tr>
        <tr>
          <td>Five</td>
          <td>Six</td>
        </tr>
        <tr>
          <td>Seven</td>
          <td>Eight</td>
        </tr>
      </tbody>
    </table>
  ),
};
