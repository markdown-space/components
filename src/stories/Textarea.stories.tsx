import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Textarea } from "../components/Textarea";
import { Size } from "../types/shared";

const colors = [
  "link",
  "primary",
  "info",
  "success",
  "warning",
  "danger",
] as const;
const sizes: Size[] = ["small", "normal", "medium", "large"];
const states = ["hovered", "focused", "active"] as const;

export default {
  title: "Components/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Textarea component with various styles and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: colors,
      description: "The color of the textarea",
    },
    size: {
      control: "select",
      options: sizes,
      description: "The size of the textarea",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the textarea",
    },
    rows: {
      control: "number",
      description: "Number of rows for the textarea",
    },
    disabled: {
      control: "boolean",
      description: "Disables the textarea",
    },
    readOnly: {
      control: "boolean",
      description: "Makes the textarea read-only",
    },
    hasFixedSize: {
      control: "boolean",
      description: "Applies a fixed size to the textarea",
    },
    state: {
      control: "select",
      options: states,
      description: "The state of the textarea",
    },
  },
} satisfies Meta<typeof Textarea>;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {
  args: {
    placeholder: "Enter text here",
    rows: 3,
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className="field">
      {colors.map((color) => (
        <div key={color} className="control mb-2">
          <Textarea color={color} placeholder={`Color: ${color}`} rows={2} />
        </div>
      ))}
    </div>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <div className="field">
      {sizes.map((size) => (
        <div key={size} className="control mb-2">
          <Textarea size={size} placeholder={`Size: ${size}`} rows={2} />
        </div>
      ))}
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div className="field">
      {states.map((state) => (
        <div key={state} className="control mb-2">
          <Textarea state={state} placeholder={`State: ${state}`} rows={2} />
        </div>
      ))}
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    placeholder: "This textarea is disabled",
    disabled: true,
    rows: 3,
  },
};

export const ReadOnly: Story = {
  args: {
    value: "This textarea is read-only",
    readOnly: true,
    rows: 3,
  },
};

export const Skeleton: Story = {
  args: {
    placeholder: "This textarea is loading",
    hasFixedSize: true,
    rows: 5,
    isSkeleton: true,
  },
};

export const FixedSize: Story = {
  args: {
    placeholder: "This textarea has a fixed size",
    hasFixedSize: true,
    rows: 5,
  },
};

export const Combinations: Story = {
  render: () => (
    <div className="field">
      <div className="control mb-2">
        <Textarea
          color="primary"
          size="small"
          placeholder="Primary small"
          rows={2}
        />
      </div>
      <div className="control mb-2">
        <Textarea
          color="info"
          size="large"
          hasFixedSize
          placeholder="Info large fixed size"
          rows={4}
        />
      </div>
      <div className="control">
        <Textarea
          color="success"
          state="hovered"
          placeholder="Success hovered"
          rows={2}
        />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    placeholder: "Playground Textarea",
    rows: 3,
    color: "primary",
    size: "normal",
    disabled: false,
    readOnly: false,
    hasFixedSize: false,
    state: undefined,
  },
};
