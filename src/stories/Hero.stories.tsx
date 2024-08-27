import { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import { Color } from "../types/shared";

const meta: Meta<typeof Hero> = {
  title: "Components/Hero",
  component: Hero,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "link",
        "info",
        "success",
        "warning",
        "danger",
        "light",
        "dark",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Hero>;

export const Default: Story = {
  args: {
    color: "primary",
    children: (
      <>
        <HeroTitle>Hero Title</HeroTitle>
        <HeroSubtitle>Hero Subtitle</HeroSubtitle>
      </>
    ),
  },
};

export const ColorVariants: Story = {
  render: () => (
    <>
      {(
        [
          "primary",
          "link",
          "info",
          "success",
          "warning",
          "danger",
          "light",
          "dark",
        ] as Color[]
      ).map((color) => (
        <Hero key={color} color={color}>
          <HeroTitle>
            {color.charAt(0).toUpperCase() + color.slice(1)} Hero
          </HeroTitle>
          <HeroSubtitle>This is a {color} hero</HeroSubtitle>
        </Hero>
      ))}
    </>
  ),
};

export const CustomContent: Story = {
  args: {
    color: "info",
    children: (
      <>
        <HeroTitle>Custom Content Hero</HeroTitle>
        <HeroSubtitle>This hero has custom content</HeroSubtitle>
        <Button color="primary">Click me!</Button>
      </>
    ),
  },
};

export const StyledTitle: Story = {
  args: {
    color: "success",
    children: (
      <>
        <HeroTitle style={{ color: "white", textTransform: "uppercase" }}>
          Styled Title
        </HeroTitle>
        <HeroSubtitle>This hero has a styled title</HeroSubtitle>
      </>
    ),
  },
};

export const StyledSubtitle: Story = {
  args: {
    color: "warning",
    children: (
      <>
        <HeroTitle>Styled Subtitle</HeroTitle>
        <HeroSubtitle style={{ fontStyle: "italic", color: "darkred" }}>
          This hero has a styled subtitle
        </HeroSubtitle>
      </>
    ),
  },
};

export const LongContent: Story = {
  args: {
    color: "light",
    children: (
      <>
        <HeroTitle>Long Content Hero</HeroTitle>
        <HeroSubtitle>
          This hero has a long subtitle to demonstrate how it handles larger
          amounts of text. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
          nunc, vitae aliquam nisl nunc vitae nisl.
        </HeroSubtitle>
      </>
    ),
  },
};

export const WithoutSubtitle: Story = {
  args: {
    color: "dark",
    children: <HeroTitle>Hero Without Subtitle</HeroTitle>,
  },
};

export const WithoutTitle: Story = {
  args: {
    color: "primary",
    children: <HeroSubtitle>Hero Without Title</HeroSubtitle>,
  },
};

export const NestedHeroes: Story = {
  render: () => (
    <Hero color="primary">
      <HeroTitle>Outer Hero</HeroTitle>
      <HeroSubtitle>This hero contains another hero</HeroSubtitle>
      <Hero color="info">
        <HeroTitle>Inner Hero</HeroTitle>
        <HeroSubtitle>This is a nested hero</HeroSubtitle>
      </Hero>
    </Hero>
  ),
};
