import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Breadcrumb } from "../components/Breadcrumb";
import { Icon, IconText } from "../components/Icon";

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
          <IconText color="grey-dark">
            <Icon icon="fas fa-home" />
            <span>Home</span>
          </IconText>
        </a>
      </li>
      <li>
        <a href="#">
          <IconText color="grey-dark">
            <Icon icon="fas fa-book" />
            <span>Documentation</span>
          </IconText>
        </a>
      </li>
      <li className="is-active">
        <a href="#">
          <IconText color="grey-dark">
            <Icon icon="fas fa-puzzle-piece" />
            <span>Components</span>
          </IconText>
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
