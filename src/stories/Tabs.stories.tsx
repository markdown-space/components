import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { useState } from "react";
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
  render: () => {
    const [activeTab, setActiveTab] = useState("Pictures");
    const tabs = ["Pictures", "Downloads", "Videos", "Documents"];

    return (
      <Tabs>
        {tabs.map((tab) => (
          <li key={tab} className={activeTab === tab ? "is-active" : ""}>
            <a onClick={() => setActiveTab(tab)}>{tab}</a>
          </li>
        ))}
      </Tabs>
    );
  },
};

export const Alignments: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("Pictures");
    const tabs = ["Pictures", "Downloads", "Videos", "Documents"];

    return (
      <Block>
        <Tabs alignment="left" className="mb-4">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab)}>{tab}</a>
            </li>
          ))}
        </Tabs>
        <Tabs alignment="centered" className="mb-4">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab)}>{tab}</a>
            </li>
          ))}
        </Tabs>
        <Tabs alignment="right">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab)}>{tab}</a>
            </li>
          ))}
        </Tabs>
      </Block>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("Pictures");
    const tabs = ["Pictures", "Downloads", "Videos", "Documents"];

    return (
      <Block>
        <Tabs size="small" className="mb-4">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab)}>{tab}</a>
            </li>
          ))}
        </Tabs>
        <Tabs className="mb-4">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab)}>{tab}</a>
            </li>
          ))}
        </Tabs>
        <Tabs size="medium" className="mb-4">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab)}>{tab}</a>
            </li>
          ))}
        </Tabs>
        <Tabs size="large">
          {tabs.map((tab) => (
            <li key={tab} className={activeTab === tab ? "is-active" : ""}>
              <a onClick={() => setActiveTab(tab)}>{tab}</a>
            </li>
          ))}
        </Tabs>
      </Block>
    );
  },
};

export const Boxed: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("Pictures");
    const tabs = ["Pictures", "Downloads", "Videos", "Documents"];

    return (
      <Tabs isBoxed>
        {tabs.map((tab) => (
          <li key={tab} className={activeTab === tab ? "is-active" : ""}>
            <a onClick={() => setActiveTab(tab)}>{tab}</a>
          </li>
        ))}
      </Tabs>
    );
  },
};

export const Toggle: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("Pictures");
    const tabs = ["Pictures", "Downloads", "Videos", "Documents"];

    return (
      <Tabs isToggle>
        {tabs.map((tab) => (
          <li key={tab} className={activeTab === tab ? "is-active" : ""}>
            <a onClick={() => setActiveTab(tab)}>{tab}</a>
          </li>
        ))}
      </Tabs>
    );
  },
};

export const ToggleRounded: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("Pictures");
    const tabs = ["Pictures", "Downloads", "Videos", "Documents"];

    return (
      <Tabs isToggle isToggleRounded>
        {tabs.map((tab) => (
          <li key={tab} className={activeTab === tab ? "is-active" : ""}>
            <a onClick={() => setActiveTab(tab)}>{tab}</a>
          </li>
        ))}
      </Tabs>
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("Pictures");
    const tabs = ["Pictures", "Downloads", "Videos", "Documents"];

    return (
      <Tabs isFullWidth>
        {tabs.map((tab) => (
          <li key={tab} className={activeTab === tab ? "is-active" : ""}>
            <a onClick={() => setActiveTab(tab)}>{tab}</a>
          </li>
        ))}
      </Tabs>
    );
  },
};
