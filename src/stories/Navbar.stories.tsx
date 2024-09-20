import type { Meta, StoryObj } from "@storybook/react";
import { Block } from "../components/Block";
import { Button } from "../components/Button";
import { Navbar, NavbarDropdown, NavbarItem } from "../components/Navbar";
import { ThemeSelector } from "../components/ThemeSelector";

const colors = [
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
  "black",
  "dark",
  "light",
  "white",
];

const meta: Meta<typeof Navbar> = {
  title: "Bulma Components/Navbar",
  component: Navbar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    brand: {
      control: "text",
      description: "The brand element to display in the navbar",
    },
    color: {
      control: "select",
      options: colors,
      description: "The color of the navbar",
      table: {
        type: {
          summary: colors.join(" | "),
        },
      },
    },
    startItems: {
      description: "Items to display at the start of the navbar",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      control: { disable: true },
    },
    endItems: {
      description: "Items to display at the end of the navbar",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
      control: { disable: true },
    },
    isSpaced: {
      control: "boolean",
      description: "Whether the navbar should have more padding",
    },
    hasShadow: {
      control: "boolean",
      description: "Whether the navbar should have a shadow",
    },
    isFixedTop: {
      control: "boolean",
      description: "Whether the navbar should be fixed to the top of the page",
    },
    hideToggle: {
      control: "boolean",
      description: "Whether to hide the mobile toggle button",
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "0 0 16rem" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    brand: (
      <NavbarItem href="#">
        <img
          src="https://files.markdown.space/9836cef3-b4a8-4a8c-bf9f-7412f0042573/markdown-space-white-logo.svg"
          alt="Bulma: a modern CSS framework based on Flexbox"
          height="28"
        />
      </NavbarItem>
    ),
    startItems: (
      <>
        <NavbarItem href="#">Home</NavbarItem>
        <NavbarItem href="#">Documentation</NavbarItem>
        <NavbarDropdown
          label="More"
          items={
            <>
              <NavbarItem href="#">About</NavbarItem>
              <NavbarItem href="#" isSelected>
                Jobs
              </NavbarItem>
              <NavbarItem href="#">Contact</NavbarItem>
              <NavbarItem href="#">Report an issue</NavbarItem>
            </>
          }
        />
      </>
    ),
    endItems: (
      <>
        <NavbarDropdown
          label="More"
          isRight
          items={
            <>
              <NavbarItem href="#">About</NavbarItem>
              <NavbarItem href="#" isSelected>
                Jobs
              </NavbarItem>
              <NavbarItem href="#">Contact</NavbarItem>
              <NavbarItem href="#">Report an issue</NavbarItem>
            </>
          }
        />
        <Button>Sign In</Button>
      </>
    ),
  },
};

export const ColoredNavbar: Story = {
  args: {
    ...Default.args,
    color: "primary",
  },
};

export const SpacedNavbar: Story = {
  args: {
    ...Default.args,
    isSpaced: true,
    color: "warning",
    startItems: (
      <>
        <NavbarItem href="#">Home</NavbarItem>
        <NavbarItem href="#">Documentation</NavbarItem>
        <NavbarDropdown
          label="More"
          items={
            <>
              <NavbarItem href="#">About</NavbarItem>
              <NavbarItem href="#" isSelected>
                Jobs
              </NavbarItem>
              <NavbarItem href="#">Contact</NavbarItem>
              <NavbarItem href="#">Report an issue</NavbarItem>
            </>
          }
        />
      </>
    ),
    endItems: (
      <>
        <NavbarItem href="#">About</NavbarItem>
        <NavbarItem href="#">Contact</NavbarItem>
        <NavbarItem href="#">Report an issue</NavbarItem>
      </>
    ),
  },
};

export const WithFixedTop: Story = {
  args: {
    brand: (
      <NavbarItem href="#">
        <img
          src="https://files.markdown.space/9836cef3-b4a8-4a8c-bf9f-7412f0042573/markdown-space-white-logo.svg"
          alt="Bulma: a modern CSS framework based on Flexbox"
          height="28"
        />
      </NavbarItem>
    ),
    color: "white",
    isFixedTop: true,
    startItems: (
      <>
        <NavbarItem href="#">Home</NavbarItem>
        <NavbarItem href="#">Documentation</NavbarItem>
        <NavbarDropdown
          label="More"
          items={
            <>
              <NavbarItem href="#">About</NavbarItem>
              <NavbarItem href="#" isSelected>
                Jobs
              </NavbarItem>
              <NavbarItem href="#">Contact</NavbarItem>
              <NavbarItem href="#">Report an issue</NavbarItem>
            </>
          }
        />
      </>
    ),
    endItems: (
      <NavbarDropdown
        label="More"
        isRight
        items={
          <>
            <NavbarItem href="#">About</NavbarItem>
            <NavbarItem href="#" isSelected>
              Jobs
            </NavbarItem>
            <NavbarItem href="#">Contact</NavbarItem>
            <NavbarItem href="#">Report an issue</NavbarItem>
          </>
        }
      />
    ),
  },
  render: (args) => {
    return (
      <div>
        <Navbar {...args} />
        <Block
          style={{ height: "200vh", display: "flex", flexDirection: "column" }}
        >
          <div style={{ height: "100%", background: "#56a7d3" }} />
          <div style={{ height: "100%", background: "#297fae" }} />
        </Block>
      </div>
    );
  },
};

export const NavbarWithThemeSelector: Story = {
  args: {
    ...Default.args,
    endItems: <ThemeSelector />,
  },
};

export const CustomBrand: Story = {
  args: {
    ...Default.args,
    brand: (
      <NavbarItem href="#">
        <strong>CUSTOM BRAND</strong>
      </NavbarItem>
    ),
  },
};
