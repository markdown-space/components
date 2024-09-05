import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Button } from "../components/Button";
import { Menu } from "../components/Menu";

const defaultMenuData = [
  {
    label: "General",
    items: [
      { label: "Dashboard", href: "#" },
      { label: "Customers", href: "#" },
    ],
  },
  {
    label: "Administration",
    items: [
      { label: "Team Settings", href: "#" },
      {
        label: "Manage Your Team",
        href: "#",
        isActive: true,
        subItems: [
          { label: "Members", href: "#" },
          { label: "Plugins", href: "#" },
          { label: "Add a member", href: "#" },
        ],
      },
      { label: "Invitations", href: "#" },
      { label: "Cloud Storage Environment Settings", href: "#" },
      { label: "Authentication", href: "#" },
    ],
  },
  {
    label: "Transactions",
    items: [
      { label: "Payments", href: "#" },
      { label: "Transfers", href: "#" },
      { label: "Balance", href: "#" },
    ],
  },
];

export default {
  title: "Bulma Components/Menu",
  component: Menu,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Bulma menu component with various configurations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
} satisfies Meta<typeof Menu>;

type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  args: {
    sections: defaultMenuData,
  },
};

export const CustomActiveItem: Story = {
  args: {
    ...Default.args,
    activeItemId: "Customers",
  },
};

export const WithClickHandler: Story = {
  args: {
    ...Default.args,
    onItemClick: (item) => alert(`Clicked: ${item.label}`),
  },
};

export const CustomItemRenderer: Story = {
  args: {
    ...Default.args,
    renderItem: (item) => (
      <a href={item.href} className={item.isActive ? "is-active" : ""}>
        <span className="icon">
          <i className="fas fa-star"></i>
        </span>
        <span>{item.label}</span>
      </a>
    ),
  },
};

export const CustomLabelRenderer: Story = {
  args: {
    ...Default.args,
    renderLabel: (label: string) => (
      <p className="menu-label has-text-weight-bold has-text-primary">
        {label.toUpperCase()}
      </p>
    ),
  },
};

export const DynamicMenu: Story = {
  render: () => {
    const [menuData, setMenuData] = React.useState(defaultMenuData);

    const addMenuItem = () => {
      const newItem = { label: `New Item ${Date.now()}`, href: "#" };
      const updatedMenuData = [...menuData];
      updatedMenuData[0].items.push(newItem);
      setMenuData(updatedMenuData);
    };

    return (
      <div>
        <Button className="mb-4" color="success" onClick={addMenuItem}>
          Add Menu Item
        </Button>
        <Menu sections={menuData} />
      </div>
    );
  },
};

export const Playground: Story = {
  args: {
    sections: defaultMenuData,
    className: "",
  },
};
