// ThemeSelector.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import ThemeSelector from '../components/ThemeSelector';
import Themes from '../src/config/themes';

// Define your themes data or import it from a central place

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

// Filter themes for light mode
export const LightThemes: Story = {
    render: () => (
        <ThemeSelector
            themes={Themes.filter((theme) => theme.dataTheme === 'light')}
        />
    ),
};

// Filter themes for dark mode
export const DarkThemes: Story = {
    render: () => (
        <ThemeSelector
            themes={Themes.filter((theme) => theme.dataTheme === 'dark')}
        />
    ),
};

// Default story showing all themes
export const AllThemes: Story = {
    render: () => <ThemeSelector themes={Themes} />,
};