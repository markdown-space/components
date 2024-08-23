import type { Meta, StoryObj } from "@storybook/react";
import { Table, TD, TH, TR } from "../components/Table";

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
    isStriped: { control: "boolean" },
    isNarrow: { control: "boolean" },
    isHoverable: { control: "boolean" },
    isFullwidth: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const SampleTableContent = () => (
  <>
    <thead>
      <TR>
        <TH>ID</TH>
        <TH>Name</TH>
        <TH>Email</TH>
        <TH>Phone</TH>
        <TH>City</TH>
        <TH>State</TH>
      </TR>
    </thead>
    <tbody>
      {[...Array(10)].map((_, index) => (
        <TR key={index}>
          <TD>{index + 1}</TD>
          <TD>{`User ${index + 1}`}</TD>
          <TD>{`user${index + 1}@example.com`}</TD>
          <TD>{`+1 555-${100 + index}`}</TD>
          <TD>{`City ${index + 1}`}</TD>
          <TD>{`State ${(index % 50) + 1}`}</TD>
        </TR>
      ))}
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

export const Striped: Story = {
  args: {
    ...Default.args,
    isStriped: true,
  },
};

export const Narrow: Story = {
  args: {
    ...Default.args,
    isNarrow: true,
  },
};

export const Hoverable: Story = {
  args: {
    ...Default.args,
    isHoverable: true,
  },
};

export const Fullwidth: Story = {
  args: {
    ...Default.args,
    isFullwidth: true,
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
          <TR>
            <TH>Header 1</TH>
            <TH>Header 2</TH>
            <TH>Header 3</TH>
          </TR>
        </thead>
        <tbody>
          <TR>
            <TD>Row 1, Cell 1</TD>
            <TD>Row 1, Cell 2</TD>
            <TD>Row 1, Cell 3</TD>
          </TR>
          <TR isSelected>
            <TD>Row 2, Cell 1 (Selected)</TD>
            <TD>Row 2, Cell 2</TD>
            <TD>Row 2, Cell 3</TD>
          </TR>
          <TR>
            <TD>Row 3, Cell 1</TD>
            <TD>Row 3, Cell 2</TD>
            <TD>Row 3, Cell 3</TD>
          </TR>
        </tbody>
      </>
    ),
  },
};

export const WithColoredCells: Story = {
  args: {
    children: (
      <>
        <thead>
          <TR>
            <TH color="primary">Header 1</TH>
            <TH color="link">Header 2</TH>
            <TH color="info">Header 3</TH>
          </TR>
        </thead>
        <tbody>
          <TR>
            <TD color="success">Row 1, Cell 1</TD>
            <TD color="warning">Row 1, Cell 2</TD>
            <TD color="danger">Row 1, Cell 3</TD>
          </TR>
          <TR>
            <TD>Row 2, Cell 1</TD>
            <TD>Row 2, Cell 2</TD>
            <TD>Row 2, Cell 3</TD>
          </TR>
        </tbody>
      </>
    ),
  },
};

export const ComplexTable: Story = {
  args: {
    isBordered: true,
    isStriped: true,
    isHoverable: true,
    isScrollable: true,
    children: (
      <>
        <thead>
          <TR>
            <TH>Name</TH>
            <TH>Age</TH>
            <TH>Status</TH>
            <TH>Notes</TH>
          </TR>
        </thead>
        <tbody>
          <TR>
            <TD>John Doe</TD>
            <TD>32</TD>
            <TD color="success">Active</TD>
            <TD>Regular customer</TD>
          </TR>
          <TR>
            <TD>Jane Smith</TD>
            <TD>28</TD>
            <TD color="success">Active</TD>
            <TD>New promotion candidate</TD>
          </TR>
          <TR isSelected>
            <TD>Bob Johnson</TD>
            <TD>45</TD>
            <TD color="warning">Inactive</TD>
            <TD>Requires follow-up</TD>
          </TR>
          <TR>
            <TD>Alice Brown</TD>
            <TD>52</TD>
            <TD color="danger">Suspended</TD>
            <TD>Account under review</TD>
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
