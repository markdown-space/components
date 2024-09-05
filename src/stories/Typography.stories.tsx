import type { Meta, StoryObj } from "@storybook/react";
import "bulma/css/bulma.min.css";
import { Typography } from "../components/Typography";

const meta = {
  title: "Bulma Components/Typography",
  component: Typography,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Typography>;

export default meta;
type Story = StoryObj<typeof Typography>;

export const DefaultTypography: Story = {
  render: () => <Typography />,
};

export const Titles: Story = {
  render: () => (
    <div>
      <h1 className="title is-1">Title 1</h1>
      <h2 className="title is-2">Title 2</h2>
      <h3 className="title is-3">Title 3</h3>
      <h4 className="title is-4">Title 4</h4>
      <h5 className="title is-5">Title 5</h5>
      <h6 className="title is-6">Title 6</h6>
    </div>
  ),
};

export const Subtitles: Story = {
  render: () => (
    <div>
      <h1 className="subtitle is-1">Subtitle 1</h1>
      <h2 className="subtitle is-2">Subtitle 2</h2>
      <h3 className="subtitle is-3">Subtitle 3</h3>
      <h4 className="subtitle is-4">Subtitle 4</h4>
      <h5 className="subtitle is-5">Subtitle 5</h5>
      <h6 className="subtitle is-6">Subtitle 6</h6>
    </div>
  ),
};

export const TitleSubtitleCombination: Story = {
  render: () => (
    <div>
      <h1 className="title">Title</h1>
      <h2 className="subtitle">Subtitle</h2>
      <p className="title is-1">Title 1</p>
      <p className="subtitle is-3">Subtitle 3</p>
      <p className="title is-2">Title 2</p>
      <p className="subtitle is-4">Subtitle 4</p>
      <p className="title is-3">Title 3</p>
      <p className="subtitle is-5">Subtitle 5</p>
    </div>
  ),
};

export const Paragraph: Story = {
  render: () => (
    <div>
      <p>
        This is a normal paragraph. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Nulla accumsan, metus ultrices eleifend gravida, nulla
        nunc varius lectus, nec rutrum justo nibh eu lectus.
      </p>
      <p className="is-size-5">
        This is a larger paragraph (size 5). Praesent tristique magna sit amet
        purus gravida quis.
      </p>
      <p className="is-size-6">
        This is a smaller paragraph (size 6). Praesent tristique magna sit amet
        purus gravida quis.
      </p>
    </div>
  ),
};

export const TextAlignment: Story = {
  render: () => (
    <div>
      <p className="has-text-left">Left aligned text.</p>
      <p className="has-text-centered">Centered text.</p>
      <p className="has-text-right">Right aligned text.</p>
      <p className="has-text-justified">
        Justified text: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
        lectus, nec rutrum justo nibh eu lectus.
      </p>
    </div>
  ),
};
