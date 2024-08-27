import type { Meta, StoryObj } from "@storybook/react";
import { EndButtonProps, Navbar } from "../components/Navbar";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    brand: { control: "text" },
    color: {
      control: "select",
      options: [
        "primary",
        "link",
        "info",
        "success",
        "warning",
        "danger",
        "light",
        "dark",
      ],
    },
    startItems: { control: "object" },
    endButtons: { control: "object" },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

const defaultBrand = (
  <span className="navbar-item">
    <img
      src="/public/markdown-space-logo.svg"
      alt="Bulma: a modern CSS framework based on Flexbox"
      height="28"
    />
  </span>
);

const defaultStartItems = [
  { label: "Home" },
  { label: "Documentation" },
  {
    label: "More",
    items: [
      { label: "About" },
      { label: "Jobs", isSelected: true },
      { label: "Contact" },
      { label: "Report an issue" },
    ],
  },
];

const defaultEndButtons: EndButtonProps[] = [
  { label: "Sign up", color: "primary" },
  { label: "Log in", color: "light" },
];

export const Default: Story = {
  args: {
    brand: defaultBrand,
    startItems: defaultStartItems,
    endButtons: defaultEndButtons,
  },
};

export const ColoredNavbar: Story = {
  args: {
    ...Default.args,
    color: "primary",
  },
};

export const WithoutDropdown: Story = {
  args: {
    ...Default.args,
    startItems: [
      { label: "Home" },
      { label: "Documentation" },
      { label: "About" },
      { label: "Contact" },
    ],
  },
};

export const WithoutEndButtons: Story = {
  args: {
    ...Default.args,
    endButtons: undefined,
  },
};

export const WithoutStartItems: Story = {
  args: {
    ...Default.args,
    startItems: undefined,
  },
};

export const CustomBrand: Story = {
  args: {
    ...Default.args,
    brand: (
      <a className="navbar-item" href="#">
        <strong>CUSTOM BRAND</strong>
      </a>
    ),
  },
};

export const ManyItems: Story = {
  args: {
    ...Default.args,
    startItems: [
      { label: "Home" },
      { label: "Products" },
      { label: "Services" },
      { label: "About" },
      { label: "Contact" },
      {
        label: "More",
        items: [
          { label: "Team" },
          { label: "Careers" },
          { label: "Blog" },
          { label: "FAQ" },
        ],
      },
    ],
  },
};

export const MinimalNavbar: Story = {
  args: {
    ...Default.args,
    hideToggle: true,
  },
};

export const Playground: Story = {
  args: {
    ...Default.args,
  },
};
