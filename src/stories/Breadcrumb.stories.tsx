import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Breadcrumb } from "../components/Breadcrumb";
import { Icon, IconText } from "../components/Icon";

export default {
  title: "Bulma Components/Breadcrumb",
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
      options: [undefined, "centered", "right"],
      description: "The alignment of the breadcrumb",
    },
    separator: {
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
    <Block style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Breadcrumb separator="arrow">
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
      <Breadcrumb separator="bullet">
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
      <Breadcrumb separator="dot">
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
      <Breadcrumb separator="succeeds">
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

export const Sizes: Story = {
  render: () => (
    <Block style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
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
    </Block>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Breadcrumb>
      <li>
        <a href="#">
          <IconText>
            <Icon icon="fas fa-home" />
            <span>Home</span>
          </IconText>
        </a>
      </li>
      <li>
        <a href="#">
          <IconText>
            <Icon icon="fas fa-book" />
            <span>Documentation</span>
          </IconText>
        </a>
      </li>
      <li className="is-active">
        <a href="#">
          <IconText>
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
