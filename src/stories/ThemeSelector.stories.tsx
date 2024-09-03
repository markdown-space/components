import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSelector } from '../components/ThemeSelector';
import { Hero, HeroTitle, HeroSubtitle } from '../components/Hero';

export default {
  title: 'Components/ThemeSelector',
  component: ThemeSelector,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A Theme Selector component that allows you to switch between different CSS themes dynamically, overriding Bulma styles.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSelector>;

type Story = StoryObj<typeof ThemeSelector>;

// Default story showcasing only the ThemeSelector without additional wrapping
export const Default: Story = {
  render: () => <ThemeSelector />,
};

// Story showcasing ThemeSelector within a Hero for Light themes
export const LightThemes: Story = {
  render: () => (
    <Hero color="light" size="halfheight">
      <HeroTitle color="primary">Light Themes</HeroTitle>
      <HeroSubtitle color="info">Select a light theme from the dropdown below</HeroSubtitle>
      <ThemeSelector filter={theme => theme.dataTheme === 'light'} />
    </Hero>
  ),
};

// Story showcasing ThemeSelector within a Hero for Dark themes
export const DarkThemes: Story = {
  render: () => (
    <Hero color="black" size="halfheight">
      <HeroTitle color="white">Dark Themes</HeroTitle>
      <HeroSubtitle color="info">Select a dark theme from the dropdown below</HeroSubtitle>
      <ThemeSelector filter={theme => theme.dataTheme === 'dark'} />
    </Hero>
  ),
};

// Default story showcasing all themes within a Hero
export const AllThemes: Story = {
  render: () => (
    <Hero color="primary" size="halfheight">
      <HeroTitle color="white">All Themes</HeroTitle>
      <HeroSubtitle color="light">Choose any theme from the dropdown below</HeroSubtitle>
      <ThemeSelector />
    </Hero>
  ),
};
