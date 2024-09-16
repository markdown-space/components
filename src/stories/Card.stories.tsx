import type { StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Card } from "../components/Card";

const meta = {
  title: "Bulma Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile Card component with optional header, image, and footer.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    header: {
      control: "text",
      description: "Content for the card header",
    },
    image: {
      control: "text",
      description: "Image element or component for the card",
    },
    footer: {
      control: "text",
      description: "Content for the card footer",
    },
    children: {
      control: "text",
      description: "Main content of the card",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    style: { width: "400px" },
    children:
      "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.",
  },
};

export const WithHeader: Story = {
  args: {
    header: <p className="card-header-title">Card Header</p>,
    style: { width: "400px" },
    children: "This card has a header.",
  },
};

export const WithImage: Story = {
  args: {
    image: (
      <figure className="image is-4by3">
        <img
          src="https://bulma.io/assets/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    ),
    style: { width: "400px" },
    children: "This card includes an image.",
  },
};

export const WithFooter: Story = {
  args: {
    children:
      "Storybook is a frontend workshop for building UI components and pages in isolation. Thousands of teams use it for UI development, testing, and documentation. It's open source and free.",
    style: { width: "400px" },
    footer: (
      <>
        <a
          href="https://storybook.js.org/docs/react/writing-stories/introduction"
          className="card-footer-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook Docs
        </a>
        <a
          href="https://react.dev/reference/react-dom/components"
          className="card-footer-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Components
        </a>
      </>
    ),
  },
};

export const FullCard: Story = {
  args: {
    style: { width: "400px" },
    header: <p className="card-header-title">Full Card Example</p>,
    image: (
      <figure className="image is-4by3">
        <img
          src="https://bulma.io/assets/images/placeholders/1280x960.png"
          alt="Placeholder image"
        />
      </figure>
    ),
    children: (
      <div className="content">
        <h2>Card Content</h2>
        <p>
          Storybook is a frontend workshop for building UI components and pages
          in isolation. Thousands of teams use it for UI development, testing,
          and documentation. It's open source and free.
        </p>
      </div>
    ),
    footer: (
      <>
        <a
          href="https://storybook.js.org/docs/react/writing-stories/introduction"
          className="card-footer-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          Storybook Docs
        </a>
        <a
          href="https://react.dev/reference/react-dom/components"
          className="card-footer-item"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Components
        </a>
      </>
    ),
  },
};
