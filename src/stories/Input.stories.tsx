import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Input } from "../components/Input";
import { Color, Size } from "../types/shared";

const colors: Color[] = ["primary", "info", "success", "warning", "danger"];

const sizes: Size[] = ["small", "normal", "medium", "large"];

const types = ["text", "password", "email", "tel"] as const;

export default {
  title: "Bulma Components/Input",
  component: Input,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Input component with various styles and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: types,
      description: "The type of the input",
    },
    color: {
      control: "select",
      options: colors,
      description: "The color of the input",
    },
    size: {
      control: "select",
      options: sizes,
      description: "The size of the input",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    isRounded: { control: "boolean", description: "Applies rounded corners" },
    isStatic: { control: "boolean", description: "Makes the input static" },
  },
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    type: "text",
    placeholder: "Enter text",
  },
};

export const TypeVariants: Story = {
  render: () => (
    <div className="field">
      {types.map((type) => (
        <div key={type} className="control mb-2">
          <Input type={type} placeholder={`Type: ${type}`} />
        </div>
      ))}
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="field">
      {colors.map((color) => (
        <div key={color} className="control mb-2">
          <Input type="text" color={color} placeholder={`Color: ${color}`} />
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
          <Input type="text" size={size} placeholder={`Size: ${size}`} />
        </div>
      ))}
    </div>
  ),
};

export const Rounded: Story = {
  render: () => (
    <div className="field">
      {colors.map((color) => (
        <div key={color} className="control mb-2">
          <Input
            type="text"
            color={color}
            isRounded
            placeholder={`Rounded ${color}`}
          />
        </div>
      ))}
    </div>
  ),
};

export const Static: Story = {
  render: () => (
    <div className="field">
      <div className="control">
        <Input type="text" value="This is static text" isStatic />
      </div>
    </div>
  ),
};

export const Skeleton: Story = {
  render: () => (
    <div className="field">
      <div className="control">
        <Input type="text" value="This is static text" isSkeleton />
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="field">
      <div className="control has-icons-left has-icons-right mb-2">
        <Input type="email" placeholder="Email" />
        <span className="icon is-small is-left">
          <i className="fas fa-envelope"></i>
        </span>
        <span className="icon is-small is-right">
          <i className="fas fa-check"></i>
        </span>
      </div>
      <div className="control has-icons-left">
        <Input type="password" placeholder="Password" />
        <span className="icon is-small is-left">
          <i className="fas fa-lock"></i>
        </span>
      </div>
    </div>
  ),
};

export const Combinations: Story = {
  render: () => (
    <div className="field">
      <div className="control mb-2">
        <Input
          type="text"
          color="primary"
          size="small"
          isRounded
          placeholder="Primary small rounded"
        />
      </div>
      <div className="control mb-2">
        <Input
          type="email"
          color="info"
          size="large"
          placeholder="Info large"
        />
      </div>
      <div className="control">
        <Input
          type="tel"
          color="success"
          isRounded
          placeholder="Success rounded"
        />
      </div>
    </div>
  ),
};

export const Playground: Story = {
  args: {
    type: "text",
    placeholder: "Playground Input",
    color: "primary",
    size: "normal",
    isRounded: false,
    isStatic: false,
  },
};
