import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { HeroSection } from "../components/HeroSection";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: "Bulma Components/HeroSection",
  component: HeroSection,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof HeroSection>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Basic: Story = {
  args: {},
  render: () => (
    <HeroSection>
      <h1 className="title">Title</h1>
      <h2 className="subtitle">Subtitle</h2>
      <button className="button is-warning">Learn More</button>
    </HeroSection>
  ),
};
