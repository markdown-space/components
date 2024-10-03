// Tooltip.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Block } from "../components/Block";
import { Button } from "../components/Button";
import { ThemeSelector } from "../components/ThemeSelector";
import { Tooltip } from "../components/Tooltip";

export default {
  title: "Markdown Space Components/Tooltip",
  component: Tooltip,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A Tooltip component built with Radix UI Tooltip primitive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    trigger: {
      control: false,
      description: "The element that triggers the tooltip",
    },
    children: {
      control: "text",
      description: "The content of the tooltip",
    },
  },
} satisfies Meta<typeof Tooltip>;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  args: {
    trigger: <Button>Hover me</Button>,
    children: "This is a tooltip",
  },
};

export const LongContent: Story = {
  args: {
    trigger: <Button>Hover for more info</Button>,
    children:
      "This is a tooltip with longer content that might wrap to multiple lines.",
  },
};

export const CustomTrigger: Story = {
  args: {
    trigger: (
      <span style={{ textDecoration: "underline", cursor: "help" }}>
        Hover for definition
      </span>
    ),
    children:
      "A tooltip is a brief, informative message that appears when a user interacts with an element.",
  },
};

export const WithHTML: Story = {
  args: {
    trigger: <Button>Hover for formatted content</Button>,
    children: (
      <div>
        <h4 style={{ margin: "0 0 5px", fontWeight: "bold" }}>Tooltip Title</h4>
        <p style={{ margin: 0 }}>
          This tooltip contains formatted HTML content.
        </p>
      </div>
    ),
  },
};

export const Theme: Story = {
  render: () => {
    return (
      <Block style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
        <ThemeSelector />
        <Tooltip
          trigger={<Button>Look at Themes</Button>}
          children={
            <div>
              <h4 style={{ margin: "0 0 5px", fontWeight: "bold" }}>
                Many themes to choose from
              </h4>
              <p style={{ margin: 0 }}>
                Change the theme to suit your preferences.
              </p>
            </div>
          }
        />
      </Block>
    );
  },
};
