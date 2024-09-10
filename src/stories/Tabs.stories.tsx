import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Block } from "../components/Block";
import { Tabs } from "../components/Tabs";

const alignments = ["left", "centered", "right"] as const;
const sizes = ["small", "medium", "large"] as const;

export default {
  title: "Bulma Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A versatile Tabs component with various styles and alignments.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    alignment: {
      control: "select",
      options: alignments,
      description: "The alignment of the tabs",
      table: {
        type: { summary: alignments.join(" | ") },
        defaultValue: { summary: "left" },
      },
    },
    size: {
      control: "select",
      options: sizes,
      description: "The size of the tabs",
      table: {
        type: { summary: sizes.join(" | ") },
      },
    },
    isBoxed: {
      control: "boolean",
      description: "Applies a boxed style to the tabs",
      type: "boolean",
    },
    isToggle: {
      control: "boolean",
      description: "Applies a toggle style to the tabs",
      type: "boolean",
    },
    isToggleRounded: {
      control: "boolean",
      description: "Applies a rounded toggle style to the tabs",
      type: "boolean",
    },
    isFullWidth: {
      control: "boolean",
      description: "Makes the tabs full width",
      type: "boolean",
    },
    children: {
      description: "The content of the tabs (should be `<li />` elements)",
      control: "text",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    children: (
      <>
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </>
    ),
  },
};

export const Alignments: Story = {
  render: () => (
    <Block>
      <Tabs alignment="left" className="mb-4">
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </Tabs>
      <Tabs alignment="centered" className="mb-4">
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </Tabs>
      <Tabs alignment="right">
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </Tabs>
    </Block>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Block>
      <Tabs size="small" className="mb-4">
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </Tabs>
      <Tabs className="mb-4">
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </Tabs>
      <Tabs size="medium" className="mb-4">
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </Tabs>
      <Tabs size="large">
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </Tabs>
    </Block>
  ),
};

export const Boxed: Story = {
  args: {
    isBoxed: true,
    children: (
      <>
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </>
    ),
  },
};

export const Toggle: Story = {
  args: {
    isToggle: true,
    children: (
      <>
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </>
    ),
  },
};

export const ToggleRounded: Story = {
  args: {
    isToggle: true,
    isToggleRounded: true,
    children: (
      <>
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    isFullWidth: true,
    children: (
      <>
        <li className="is-active">
          <a>Pictures</a>
        </li>
        <li>
          <a>Downloads</a>
        </li>
        <li>
          <a>Videos</a>
        </li>
        <li>
          <a>Documents</a>
        </li>
      </>
    ),
  },
};
