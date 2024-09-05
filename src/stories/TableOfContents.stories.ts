import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { TableOfContents } from "../components/TableOfContents";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Markdown Space Components/TableOfContents",
  component: TableOfContents,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    pageLength: {
      control: {
        type: "range",
        min: 2,
        default: 10,
      },
    },
  },
} satisfies Meta<typeof TableOfContents>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {
    projectSlug: "home",
    order: "published_at.desc",
    pageLength: 10,
    filter: "metadata->>category=eq.documentation",
  },
};
