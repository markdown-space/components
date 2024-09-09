import type { Meta, StoryObj } from "@storybook/react";
import { Message } from "../components/Message";

const meta: Meta<typeof Message> = {
  title: "Bulma Components/Message",
  component: Message,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "dark",
        "link",
        "primary",
        "info",
        "success",
        "warning",
        "danger",
      ],
      description: "The color of the message",
      table: {
        type: {
          summary: [
            "dark",
            "link",
            "primary",
            "info",
            "success",
            "warning",
            "danger",
          ].join(" | "),
        },
      },
    },
    size: {
      control: "radio",
      options: ["small", "medium", "large"],
      description: "The size of the message",
      table: {
        type: {
          summary: ["small", "medium", "large"].join(" | "),
        },
      },
    },
    header: {
      control: "text",
      description: "The header content of the message",
    },
    children: {
      control: "text",
      description: "The main content of the message",
      table: {
        type: {
          summary: "ReactNode",
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Message>;

export const Default: Story = {
  args: {
    children: "This is a default message.",
  },
};

export const WithHeader: Story = {
  args: {
    header: "Message Title",
    children: "This is a message with a header.",
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div>
      <Message color="dark" header="Dark" className="mb-3">
        This is a dark message.
      </Message>
      <Message color="primary" header="Primary" className="mb-3">
        This is a primary message.
      </Message>
      <Message color="link" header="Link" className="mb-3">
        This is a link message.
      </Message>
      <Message color="info" header="Info" className="mb-3">
        This is an info message.
      </Message>
      <Message color="success" header="Success" className="mb-3">
        This is a success message.
      </Message>
      <Message color="warning" header="Warning" className="mb-3">
        This is a warning message.
      </Message>
      <Message color="danger" header="Danger" className="mb-3">
        This is a danger message.
      </Message>
    </div>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <div>
      <Message size="small" header="Small Message" className="mb-3">
        This is a small message.
      </Message>
      <Message size="medium" header="Medium Message" className="mb-3">
        This is a medium message.
      </Message>
      <Message size="large" header="Large Message" className="mb-3">
        This is a large message.
      </Message>
    </div>
  ),
};

export const WithoutHeader: Story = {
  args: {
    header: "Long Message",
    color: "info",
    children:
      "Debugging is not just fixing errors; it’s an invitation to reflect, learn, and evolve the masterpiece of your creation. ",
  },
};

export const WithHTMLContent: Story = {
  args: {
    header: "HTML Content",
    children: (
      <>
        <h1>This is a heading</h1>
        <p>
          This is a paragraph with <strong>bold</strong> and <em>italic</em>{" "}
          text.
        </p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </>
    ),
  },
};
