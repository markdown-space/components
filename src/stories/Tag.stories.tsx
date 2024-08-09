import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Tag } from "../components/Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultTag: Story = {
  render: () => <Tag />,
};

export const SingleTag: Story = {
  render: () => <span className="tag">Tag</span>,
};

export const ColoredTags: Story = {
  render: () => (
    <div className="tags">
      <span className="tag is-primary">Primary</span>
      <span className="tag is-link">Link</span>
      <span className="tag is-info">Info</span>
      <span className="tag is-success">Success</span>
      <span className="tag is-warning">Warning</span>
      <span className="tag is-danger">Danger</span>
      <span className="tag is-dark">Dark</span>
    </div>
  ),
};

export const SizedTags: Story = {
  render: () => (
    <div className="tags">
      <span className="tag">Normal</span>
      <span className="tag is-medium">Medium</span>
      <span className="tag is-large">Large</span>
    </div>
  ),
};

export const TagsWithDelete: Story = {
  render: () => (
    <div className="tags">
      <span className="tag is-success">
        Success
        <button className="delete is-small"></button>
      </span>
      <span className="tag is-warning is-medium">
        Warning
        <button className="delete is-small"></button>
      </span>
      <span className="tag is-danger is-large">
        Danger
        <button className="delete"></button>
      </span>
    </div>
  ),
};

export const TagsWithAddons: Story = {
  render: () => (
    <div className="field is-grouped is-grouped-multiline">
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-dark">npm</span>
          <span className="tag is-info">0.5.0</span>
        </div>
      </div>
      <div className="control">
        <div className="tags has-addons">
          <span className="tag is-dark">build</span>
          <span className="tag is-success">passing</span>
        </div>
      </div>
    </div>
  ),
};

export const TagsWithLinks: Story = {
  render: () => (
    <div className="field is-grouped is-grouped-multiline">
      {["Technology", "CSS", "Flexbox"].map((tag, index) => (
        <div key={index} className="control">
          <div className="tags has-addons">
            <a className="tag is-link">{tag}</a>
            <a className="tag is-delete"></a>
          </div>
        </div>
      ))}
    </div>
  ),
};
