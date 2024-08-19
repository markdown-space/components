import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import React from "react";
import { Breadcrumb } from "../components/Breadcrumb";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  parameters: {
    layout: "centered",
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
      options: [undefined, "centered", "right"],
      description: "The alignment of the breadcrumb",
    },
    seperator: {
      control: "select",
      options: [undefined, "arrow", "bullet", "dot", "succeeds"],
      description: "The separator style between breadcrumb items",
    },
    size: {
      control: "select",
      options: [undefined, "small", "medium", "large"],
      description: "The size of the breadcrumb",
    },
    children: {
      control: "text",
      description: "The content of the breadcrumb (should be li elements)",
    },
  },
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof Breadcrumb>;

const DefaultBreadcrumbItems = (
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
);

export const Default: Story = {
  args: {
    children: DefaultBreadcrumbItems,
  },
};

export const Alignments: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        width: "100%",
      }}
    >
      <Breadcrumb>{DefaultBreadcrumbItems}</Breadcrumb>
      <Breadcrumb alignment="centered">{DefaultBreadcrumbItems}</Breadcrumb>
      <Breadcrumb alignment="right">{DefaultBreadcrumbItems}</Breadcrumb>
    </div>
  ),
};

export const Separators: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Breadcrumb seperator="arrow">{DefaultBreadcrumbItems}</Breadcrumb>
      <Breadcrumb seperator="bullet">{DefaultBreadcrumbItems}</Breadcrumb>
      <Breadcrumb seperator="dot">{DefaultBreadcrumbItems}</Breadcrumb>
      <Breadcrumb seperator="succeeds">{DefaultBreadcrumbItems}</Breadcrumb>
    </div>
  ),
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Breadcrumb size="small">{DefaultBreadcrumbItems}</Breadcrumb>
      <Breadcrumb>{DefaultBreadcrumbItems}</Breadcrumb>
      <Breadcrumb size="medium">{DefaultBreadcrumbItems}</Breadcrumb>
      <Breadcrumb size="large">{DefaultBreadcrumbItems}</Breadcrumb>
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
      {DefaultBreadcrumbItems}
    </Breadcrumb>
  ),
};

export const InteractiveBreadcrumb: Story = {
  render: function Render() {
    const [activeIndex, setActiveIndex] = React.useState(2);
    const items = ["Home", "Products", "Categories", "Items"];

    return (
      <Breadcrumb>
        {items.map((item, index) => (
          <li key={item} className={index === activeIndex ? "is-active" : ""}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
              }}
              aria-current={index === activeIndex ? "page" : undefined}
            >
              {item}
            </a>
          </li>
        ))}
      </Breadcrumb>
    );
  },
};
