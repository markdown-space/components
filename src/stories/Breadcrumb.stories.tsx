import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Breadcrumb } from "../components/Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Breadcrumb component based on Bulma classes with various alignments, separators, and sizes.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      control: "select",
      options: ["centered", "right"],
      description: "The alignment of the breadcrumb",
    },
    seperator: {
      control: "select",
      options: ["arrow", "bullet", "dot", "succeeds"],
      description: "The separator style between breadcrumb items",
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the breadcrumb",
    },
    children: {
      control: "text",
      description: "The content of the breadcrumb (should be li elements)",
    },
  },
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    children: (
      <>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </>
    ),
  },
};

export const Alignments: Story = {
  parameters: {
    layout: "padded",
  },
  render: () => (
    <Block
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
      }}
    >
      <Breadcrumb>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
      <Breadcrumb alignment="centered">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
      <Breadcrumb alignment="right">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
    </Block>
  ),
};

export const Separators: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Breadcrumb seperator="arrow">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
      <Breadcrumb seperator="bullet">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
      <Breadcrumb seperator="dot">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
      <Breadcrumb seperator="succeeds">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Breadcrumb size="small">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
      <Breadcrumb>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
      <Breadcrumb size="medium">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
      <Breadcrumb size="large">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li className="is-active">
          <a href="#" aria-current="page">
            Breadcrumb
          </a>
        </li>
      </Breadcrumb>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumb>
      <li>
        <a href="#">
          <span className="icon is-small">
            <i className="fas fa-home"></i>
          </span>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="#">
          <span className="icon is-small">
            <i className="fas fa-book"></i>
          </span>
          <span>Documentation</span>
        </a>
      </li>
      <li className="is-active">
        <a href="#" aria-current="page">
          <span className="icon is-small">
            <i className="fas fa-puzzle-piece"></i>
          </span>
          <span>Components</span>
        </a>
      </li>
    </Breadcrumb>
  ),
};

export const LongBreadcrumb: Story = {
  render: () => (
    <Breadcrumb>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Categories</a>
      </li>
      <li>
        <a href="#">Subcategories</a>
      </li>
      <li>
        <a href="#">Items</a>
      </li>
      <li>
        <a href="#">Variations</a>
      </li>
      <li className="is-active">
        <a href="#" aria-current="page">
          Final Product
        </a>
      </li>
    </Breadcrumb>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <Breadcrumb
      className="has-background-light p-2"
      ulProps={{ className: "has-text-weight-semibold" }}
    >
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Products</a>
      </li>
      <li className="is-active">
        <a href="#" aria-current="page">
          Breadcrumb
        </a>
      </li>
    </Breadcrumb>
  ),
};
