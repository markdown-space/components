import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import LinkPage from "../components/LinkPage";

const meta: Meta = {
  component: LinkPage,
  title: "Markdown Space Components/LinkPage",
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "A Link Page component.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
    style: {
      control: {
        type: "object",
      },
    },
    buttonClass: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "danger",
        "dark",
        "light",
      ],
    },
    buttonClasses: {
      control: "object",
      table: {
        summary: [],
      },
    },
  },
} satisfies Meta<typeof LinkPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultLinkPage: Story = {
  args: {
    children: (
      <>
        <h1 className="title">Hello, world!</h1>
        <h2 className="subtitle">Welcome to the LinkPage component.</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr />
        <p>
          <a href="/test">😎 External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
      </>
    ),
  },
};

export const PrimaryButtonLinkPage: Story = {
  args: {
    buttonClass: "primary",
    children: (
      <>
        <h1 className="title">Hello, world!</h1>
        <h2 className="subtitle">Welcome to the LinkPage component.</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr />
        <p>
          <a href="/test">😎 External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
      </>
    ),
  },
};

export const MultiColorButtonLinkPage: Story = {
  args: {
    buttonClass: "primary",
    buttonClasses: [
      "secondary",
      "success",
      "warning",
      "danger",
      "dark",
      "light",
    ],
    children: (
      <>
        <h1 className="title">Hello, world!</h1>
        <h2 className="subtitle">Welcome to the LinkPage component.</h2>
        <p>
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured content or information.
        </p>
        <hr />
        <p>
          <a href="/test">😎 External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
        <p>
          <a href="/test">External Link.</a>
        </p>
      </>
    ),
  },
};
