import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import React from "react";
import { Title, TitleProps } from "../components/Title";

export default {
  title: "Components/Title",
  component: Title,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile Title component that supports both titles and subtitles with various sizes and HTML tags.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["title", "subtitle"],
      description: "Determines if it's a title or subtitle",
    },
    size: {
      control: "select",
      options: [1, 2, 3, 4, 5, 6],
      description: "The size of the title (1-6)",
    },
    tag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6", "p", "div", "span"],
      description: "The HTML tag to use",
    },
    isSpaced: {
      control: "boolean",
      description: "Adds extra margin to the bottom",
    },
    children: {
      control: "text",
      description: "The content of the title",
    },
  },
} satisfies Meta<typeof Title>;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    type: "title",
    size: 1,
    children: "Default Title",
  },
};

export const Subtitle: Story = {
  args: {
    type: "subtitle",
    size: 3,
    children: "This is a subtitle",
  },
};

export const CustomTag: Story = {
  args: {
    type: "title",
    size: 2,
    tag: "p",
    children: "Title styled paragraph",
  },
};

export const SpacedTitle: Story = {
  args: {
    type: "title",
    size: 3,
    isSpaced: true,
    children: "Spaced Title",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div>
      {[1, 2, 3, 4, 5, 6].map((size) => (
        <Title key={size} type="title" size={size as TitleProps["size"]}>
          Title {size}
        </Title>
      ))}
    </div>
  ),
};

export const TitleWithSubtitle: Story = {
  render: () => (
    <div>
      <Title type="title" size={2} isSpaced>
        Main Title
      </Title>
      <Title type="subtitle" size={4}>
        Supporting subtitle
      </Title>
    </div>
  ),
};

export const DifferentTags: Story = {
  render: () => (
    <div>
      <Title type="title" size={3} tag="h3">
        H3 Tag
      </Title>
      <Title type="title" size={3} tag="p">
        Paragraph Tag
      </Title>
      <Title type="title" size={3} tag="div">
        Div Tag
      </Title>
      <Title type="title" size={3} tag="span">
        Span Tag
      </Title>
    </div>
  ),
};

export const StyledTitle: Story = {
  args: {
    type: "title",
    size: 1,
    children: "Styled Title",
    className: "has-text-primary has-background-light p-3",
  },
};

export const InteractiveTitle: Story = {
  render: () => {
    const [clicks, setClicks] = React.useState(0);
    return (
      <Title
        type="title"
        size={2}
        onClick={() => setClicks((c) => c + 1)}
        style={{ cursor: "pointer" }}
      >
        Clickable Title (Clicks: {clicks})
      </Title>
    );
  },
};
