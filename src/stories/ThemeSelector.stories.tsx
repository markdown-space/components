import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Hero, HeroSubtitle, HeroTitle } from "../components/Hero";
import { ThemeSelector } from "../components/ThemeSelector";
import Themes from "../config/themes";

export default {
  title: "Markdown Space Components/ThemeSelector",
  component: ThemeSelector,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A Theme Selector component that allows you to switch between different CSS themes dynamically, overriding Bulma styles.",
      },
    },
  },
  argTypes: {
    initialTheme: {
      control: "select",
      description: "Initial theme to apply",
      options: Themes.map((theme) => theme.id),
      table: {
        type: {
          summary: Themes.map((theme) => theme.id).join(" | "),
        },
      },
    },
    filter: {
      control: false,
      description: "Filter themes based on a condition",
    },
    saveTheme: {
      control: "boolean",
      description: "Save theme to local storage",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ThemeSelector>;

type Story = StoryObj<typeof ThemeSelector>;

export const Default: Story = {
  render: () => <ThemeSelector />,
};

export const LightThemes: Story = {
  render: () => (
    <Hero color="light" size="halfheight">
      <HeroTitle color="primary">Light Themes</HeroTitle>
      <HeroSubtitle color="info">
        Select a light theme from the dropdown below
      </HeroSubtitle>
      <ThemeSelector
        filter={(theme) => theme.dataTheme === "light"}
        saveTheme
      />
    </Hero>
  ),
};

export const DarkThemes: Story = {
  render: () => (
    <Hero color="black" size="halfheight">
      <HeroTitle color="white">Dark Themes</HeroTitle>
      <HeroSubtitle color="info">
        Select a dark theme from the dropdown below
      </HeroSubtitle>
      <ThemeSelector filter={(theme) => theme.dataTheme === "dark"} />
    </Hero>
  ),
};

export const AllThemes: Story = {
  render: () => (
    <Hero color="primary" size="halfheight">
      <HeroTitle color="white">All Themes</HeroTitle>
      <HeroSubtitle color="light">
        Choose any theme from the dropdown below
      </HeroSubtitle>
      <ThemeSelector />
    </Hero>
  ),
};

export const SaveThemes: Story = {
  render: () => (
    <Hero color="primary" size="halfheight">
      <HeroTitle color="white">Save Theme</HeroTitle>
      <HeroSubtitle color="light">
        Choose any theme from the dropdown below
      </HeroSubtitle>
      <ThemeSelector saveTheme />
      <Button
        onClick={() => {
          localStorage.removeItem("theme");
        }}
        style={{ display: "block", marginTop: "1rem" }}
      >
        Unsave Theme
      </Button>
    </Hero>
  ),
};
