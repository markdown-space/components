import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Message } from "../components/Message";

const meta = {
  title: "Bulma Components/Message",
  component: Message,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Message>;

export default meta;
type Story = StoryObj<typeof Message>;

export const DefaultMessage: Story = {
  render: () => <Message />,
};

const colors = [
  "",
  "primary",
  "link",
  "info",
  "success",
  "warning",
  "danger",
] as const;
type ColorType = (typeof colors)[number];

const createMessageStory = (color: ColorType): Story => ({
  render: () => (
    <article className={`message ${color ? `is-${color}` : ""}`}>
      <div className="message-header">
        <p>
          {color ? color.charAt(0).toUpperCase() + color.slice(1) : "Message"}
        </p>
        <button className="delete"></button>
      </div>
      <div className="message-body">
        In the tapestry of life, each thread weaves a unique story.{" "}
        <strong>Our choices, big and small</strong>, color the fabric of our
        journey. With every step, we paint our path forward, leaving behind a
        trail of memories. It's in the quiet moments that we find{" "}
        <a>our true selves</a>, reflecting on the past and dreaming of{" "}
        <em>future adventures</em>.
      </div>
    </article>
  ),
});

export const DefaultColorMessage = createMessageStory("");
export const PrimaryMessage = createMessageStory("primary");
export const LinkMessage = createMessageStory("link");
export const InfoMessage = createMessageStory("info");
export const SuccessMessage = createMessageStory("success");
export const WarningMessage = createMessageStory("warning");
export const DangerMessage = createMessageStory("danger");

export const MessageWithoutHeader: Story = {
  render: () => (
    <article className="message">
      <div className="message-body">
        This is a message without a header. It contains only the message body.
      </div>
    </article>
  ),
};

export const MessageWithCustomContent: Story = {
  render: () => (
    <article className="message is-info">
      <div className="message-header">
        <p>Custom Message</p>
        <button className="delete"></button>
      </div>
      <div className="message-body">
        <h1 className="title is-4">This is a custom message</h1>
        <p>It can contain any HTML content you want.</p>
        <ul>
          <li>List item 1</li>
          <li>List item 2</li>
          <li>List item 3</li>
        </ul>
      </div>
    </article>
  ),
};
