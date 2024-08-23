import type { Meta, StoryObj } from "@storybook/react";
import { Table, TR } from "../components/Table";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    isScrollable: { control: "boolean" },
    isBordered: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const SampleTableContent = () => (
  <>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Row 1, Cell 1</td>
        <td>Row 1, Cell 2</td>
        <td>Row 1, Cell 3</td>
      </tr>
      <tr>
        <td>Row 2, Cell 1</td>
        <td>Row 2, Cell 2</td>
        <td>Row 2, Cell 3</td>
      </tr>
      <tr>
        <td>Row 3, Cell 1</td>
        <td>Row 3, Cell 2</td>
        <td>Row 3, Cell 3</td>
      </tr>
    </tbody>
  </>
);

export const Default: Story = {
  args: {
    children: <SampleTableContent />,
  },
};

export const Bordered: Story = {
  args: {
    ...Default.args,
    isBordered: true,
  },
};

export const Scrollable: Story = {
  args: {
    ...Default.args,
    isScrollable: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export const WithSelectedRow: Story = {
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <TR>
            <td>Row 1, Cell 1</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </TR>
          <TR isSelected>
            <td>Row 2, Cell 1 (Selected)</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
          </TR>
          <TR>
            <td>Row 3, Cell 1</td>
            <td>Row 3, Cell 2</td>
            <td>Row 3, Cell 3</td>
          </TR>
        </tbody>
      </>
    ),
  },
};

export const WithColoredRows: Story = {
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          <TR color="primary">
            <td>Row 1, Cell 1 (Primary)</td>
            <td>Row 1, Cell 2</td>
            <td>Row 1, Cell 3</td>
          </TR>
          <TR color="link">
            <td>Row 2, Cell 1 (Link)</td>
            <td>Row 2, Cell 2</td>
            <td>Row 2, Cell 3</td>
          </TR>
          <TR color="info">
            <td>Row 3, Cell 1 (Info)</td>
            <td>Row 3, Cell 2</td>
            <td>Row 3, Cell 3</td>
          </TR>
          <TR color="success">
            <td>Row 4, Cell 1 (Success)</td>
            <td>Row 4, Cell 2</td>
            <td>Row 4, Cell 3</td>
          </TR>
          <TR color="warning">
            <td>Row 5, Cell 1 (Warning)</td>
            <td>Row 5, Cell 2</td>
            <td>Row 5, Cell 3</td>
          </TR>
          <TR color="danger">
            <td>Row 6, Cell 1 (Danger)</td>
            <td>Row 6, Cell 2</td>
            <td>Row 6, Cell 3</td>
          </TR>
        </tbody>
      </>
    ),
  },
};

export const ComplexTable: Story = {
  args: {
    isBordered: true,
    isScrollable: true,
    children: (
      <>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Status</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <TR>
            <td>John Doe</td>
            <td>32</td>
            <td>Active</td>
            <td>Regular customer</td>
          </TR>
          <TR color="success">
            <td>Jane Smith</td>
            <td>28</td>
            <td>Active</td>
            <td>New promotion candidate</td>
          </TR>
          <TR color="warning" isSelected>
            <td>Bob Johnson</td>
            <td>45</td>
            <td>Inactive</td>
            <td>Requires follow-up</td>
          </TR>
          <TR color="danger">
            <td>Alice Brown</td>
            <td>52</td>
            <td>Suspended</td>
            <td>Account under review</td>
          </TR>
        </tbody>
      </>
    ),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "500px" }}>
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  args: {
    ...Default.args,
  },
};
