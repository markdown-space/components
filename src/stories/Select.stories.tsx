import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Select } from "../components/Select";
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

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export default {
  title: "Bulma Components/Select",
  component: Select,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Select component with various styles and states.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: colors,
      description: "The color of the select",
    },
    size: {
      control: "select",
      options: sizes,
      description: "The size of the select",
    },
    isRounded: {
      control: "boolean",
      description: "Applies rounded corners",
    },
    isMultiple: {
      control: "boolean",
      description: "Allows multiple selections",
    },
    isLoading: {
      control: "boolean",
      description: "Shows a loading state",
    },
    state: {
      control: "select",
      options: states,
      description: "The state of the select",
    },
    options: {
      control: "object",
      description: "The options for the select",
    },
  },
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    options: defaultOptions,
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {colors.map((color) => (
        <Select key={color} options={defaultOptions} color={color} />
      ))}
    </div>
  ),
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {sizes.map((size) => (
        <Select key={size} options={defaultOptions} size={size} />
      ))}
    </div>
  ),
};

export const Rounded: Story = {
  args: {
    options: defaultOptions,
    isRounded: true,
  },
};

export const Multiple: Story = {
  args: {
    options: defaultOptions,
    isMultiple: true,
  },
};

export const Loading: Story = {
  args: {
    options: defaultOptions,
    isLoading: true,
  },
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {states.map((state) => (
        <Select key={state} options={defaultOptions} state={state} />
      ))}
    </div>
  ),
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      ...defaultOptions,
      { value: "option4", label: "Disabled Option", disabled: true },
    ],
  },
};

export const WithSelectedOption: Story = {
  args: {
    options: [
      ...defaultOptions,
      { value: "option4", label: "Selected Option", selected: true },
    ],
  },
};

export const WithCustomStyle: Story = {
  args: {
    options: defaultOptions,
    style: { backgroundColor: "#f0f0f0", border: "2px solid #333" },
  },
};

export const Playground: Story = {
  args: {
    options: defaultOptions,
    color: "primary",
    size: "normal",
    isRounded: false,
    isMultiple: false,
    isLoading: false,
    state: undefined,
  },
};
