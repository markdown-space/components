import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Form } from "../components/Form";

const meta = {
  title: "Components/Form",
  component: Form,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

export const DefaultForm: Story = {
  render: () => <Form />,
};

export const BasicInputs: Story = {
  render: () => (
    <div>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" placeholder="Text input" />
        </div>
      </div>
      <div className="field">
        <label className="label">Email</label>
        <div className="control">
          <input className="input" type="email" placeholder="Email input" />
        </div>
      </div>
    </div>
  ),
};

export const Select: Story = {
  render: () => (
    <div className="field">
      <label className="label">Subject</label>
      <div className="control">
        <div className="select">
          <select>
            <option>Select dropdown</option>
            <option>With options</option>
          </select>
        </div>
      </div>
    </div>
  ),
};

export const Textarea: Story = {
  render: () => (
    <div className="field">
      <label className="label">Message</label>
      <div className="control">
        <textarea className="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>
  ),
};

export const Checkbox: Story = {
  render: () => (
    <div className="field">
      <div className="control">
        <label className="checkbox">
          <input type="checkbox" /> I agree to the{" "}
          <a href="#">terms and conditions</a>
        </label>
      </div>
    </div>
  ),
};

export const Radio: Story = {
  render: () => (
    <div className="field">
      <div className="control">
        <label className="radio" style={{ marginRight: "1rem" }}>
          <input type="radio" name="question" /> Yes
        </label>
        <label className="radio">
          <input type="radio" name="question" /> No
        </label>
      </div>
    </div>
  ),
};

export const File: Story = {
  render: () => (
    <div className="field">
      <div className="file">
        <label className="file-label">
          <input className="file-input" type="file" name="resume" />
          <span className="file-cta">
            <span className="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </div>
  ),
};

export const HorizontalForm: Story = {
  render: () => (
    <div className="field is-horizontal">
      <div className="field-label is-normal">
        <label className="label">From</label>
      </div>
      <div className="field-body">
        <div className="field">
          <p className="control">
            <input className="input" type="text" placeholder="Name" />
          </p>
        </div>
        <div className="field">
          <p className="control">
            <input className="input" type="email" placeholder="Email" />
          </p>
        </div>
      </div>
    </div>
  ),
};
