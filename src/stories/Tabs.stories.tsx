import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { useState } from "react";
import { Block } from "../components/Block";
import { TabItemProps, Tabs } from "../components/Tabs";

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
      options: ["left", "centered", "right"],
      description: "The alignment of the tabs",
      table: {
        type: { summary: alignments.join(" | ") },
        defaultValue: { summary: "left" },
      },
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
      description: "The size of the tabs",
      table: {
        type: { summary: sizes.join(" | ") },
      },
    },
    isBoxed: {
      control: "boolean",
      description: "Applies a boxed style to the tabs",
    },
    isToggle: {
      control: "boolean",
      description: "Applies a toggle style to the tabs",
    },
    isToggleRounded: {
      control: "boolean",
      description: "Applies a rounded toggle style to the tabs",
    },
    isFullWidth: {
      control: "boolean",
      description: "Makes the tabs full width",
    },
    items: {
      description: "The tab items to display",
    },
  },
} satisfies Meta<typeof Tabs>;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("1");

    const items: TabItemProps[] = [
      { id: "1", label: "Pictures", isActive: activeTab === "1" },
      { id: "2", label: "Downloads", isActive: activeTab === "2" },
      { id: "3", label: "Videos", isActive: activeTab === "3" },
      { id: "4", label: "Documents", isActive: activeTab === "4" },
    ];

    return (
      <Tabs
        items={items.map((item) => ({
          ...item,
          onClick: () => setActiveTab(item.id),
        }))}
      />
    );
  },
};

export const Alignments: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("1");

    const items: TabItemProps[] = [
      { id: "1", label: "Documentation", isActive: activeTab === "1" },
      { id: "2", label: "Examples", isActive: activeTab === "2" },
      { id: "3", label: "Playground", isActive: activeTab === "3" },
    ];

    return (
      <Block>
        <Tabs
          alignment="left"
          className="mb-4"
          items={items.map((item) => ({
            ...item,
            onClick: () => setActiveTab(item.id),
          }))}
        />
        <Tabs
          alignment="centered"
          className="mb-4"
          items={items.map((item) => ({
            ...item,
            onClick: () => setActiveTab(item.id),
          }))}
        />
        <Tabs
          alignment="right"
          items={items.map((item) => ({
            ...item,
            onClick: () => setActiveTab(item.id),
          }))}
        />
      </Block>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("1");

    const items: TabItemProps[] = [
      { id: "1", label: "My Feed", isActive: activeTab === "1" },
      { id: "2", label: "Subscriptions", isActive: activeTab === "2" },
      { id: "3", label: "Account", isActive: activeTab === "3" },
    ];

    return (
      <Block>
        <Tabs
          size="small"
          className="mb-4"
          items={items.map((item) => ({
            ...item,
            onClick: () => setActiveTab(item.id),
          }))}
        />
        <Tabs
          className="mb-4"
          items={items.map((item) => ({
            ...item,
            onClick: () => setActiveTab(item.id),
          }))}
        />
        <Tabs
          size="medium"
          className="mb-4"
          items={items.map((item) => ({
            ...item,
            onClick: () => setActiveTab(item.id),
          }))}
        />
        <Tabs
          size="large"
          items={items.map((item) => ({
            ...item,
            onClick: () => setActiveTab(item.id),
          }))}
        />
      </Block>
    );
  },
};

export const Boxed: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("1");

    const items: TabItemProps[] = [
      { id: "1", label: "Projects", isActive: activeTab === "1" },
      { id: "2", label: "Settings", isActive: activeTab === "2" },
      { id: "3", label: "Account", isActive: activeTab === "3" },
    ];

    return (
      <Tabs
        isBoxed
        items={items.map((item) => ({
          ...item,
          onClick: () => setActiveTab(item.id),
        }))}
      />
    );
  },
};

export const Toggle: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("1");

    const items: TabItemProps[] = [
      { id: "1", label: "Home", isActive: activeTab === "1" },
      { id: "2", label: "Products", isActive: activeTab === "2" },
      { id: "3", label: "About Us", isActive: activeTab === "3" },
      { id: "4", label: "Contact", isActive: activeTab === "4" },
    ];

    return (
      <Tabs
        isToggle
        items={items.map((item) => ({
          ...item,
          onClick: () => setActiveTab(item.id),
        }))}
      />
    );
  },
};

export const ToggleRounded: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("1");

    const items: TabItemProps[] = [
      { id: "1", label: "All", isActive: activeTab === "1" },
      { id: "2", label: "Articles", isActive: activeTab === "2" },
      { id: "3", label: "Videos", isActive: activeTab === "3" },
      { id: "4", label: "Podcasts", isActive: activeTab === "4" },
    ];
    return (
      <Tabs
        isToggle
        isToggleRounded
        items={items.map((item) => ({
          ...item,
          onClick: () => setActiveTab(item.id),
        }))}
      />
    );
  },
};

export const FullWidth: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState("1");

    const items: TabItemProps[] = [
      { id: "1", label: "General", isActive: activeTab === "1" },
      { id: "2", label: "Privacy", isActive: activeTab === "2" },
      { id: "3", label: "Notifications", isActive: activeTab === "3" },
      { id: "4", label: "Security", isActive: activeTab === "4" },
    ];

    return (
      <Tabs
        isFullWidth
        items={items.map((item) => ({
          ...item,
          onClick: () => setActiveTab(item.id),
        }))}
      />
    );
  },
};

export const WithLinks: Story = {
  render: () => {
    const items: TabItemProps[] = [
      {
        id: "1",
        label: "Components",
        href: "https://components.markdown.space/",
        target: "_blank",
      },
      {
        id: "2",
        label: "Markdown Space",
        href: "https://markdown.space",
        target: "_blank",
      },
      {
        id: "3",
        label: "Vali Ventures",
        href: "https://vali.ventures",
        target: "_blank",
      },
    ];

    return <Tabs items={items} />;
  },
};
