import React, { useEffect, useState } from 'react';
import { Select } from './Select';
import Themes from '../config/themes';


const updateThemeStylesheet = (
    url: string,
    onLoad: () => void,
    context: Document = document
) => {
    const bulmaLink = context.querySelector('link[href*="bulma"]');
    let themeLink = context.getElementById('theme-stylesheet') as HTMLLinkElement;

    if (themeLink) {
        // Check if the theme is already loaded
        if (themeLink.href === url) {
            onLoad();
            return;
        }
        themeLink.href = url;
    } else {
        themeLink = context.createElement('link');
        themeLink.id = 'theme-stylesheet';
        themeLink.rel = 'stylesheet';
        themeLink.href = url;
        themeLink.onload = onLoad;

        if (bulmaLink) {
            bulmaLink.parentNode?.insertBefore(themeLink, bulmaLink.nextSibling);
        } else {
            context.head.appendChild(themeLink);
        }
    }

    // Ensure onLoad fires after changing href if the link is already present
    themeLink.onload = onLoad;
};

interface ThemeSelectorProps {
    themes?: Theme[];
    isPersistent?: boolean;
}

const ThemeSelector: React.FC<ThemeSelectorProps> = ({
    themes = Themes,
    isPersistent = true,
}) => {
    const initialTheme = isPersistent ? localStorage.getItem('selectedTheme') || themes[0].id : themes[0].id;
    const [currentTheme, setCurrentTheme] = useState(initialTheme);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const selectedTheme = themes.find((theme) => theme.id === currentTheme);
        const dataTheme = selectedTheme?.dataTheme || 'user';
        const themeURL = `https://cdn.jsdelivr.net/npm/@markdownspace/markdownswatch/css/${currentTheme}.css`;

        setLoading(true);
        updateThemeStylesheet(themeURL, () => {
            setLoading(false);
        });

        document.documentElement.setAttribute('data-theme', dataTheme);

        // Store the selected theme in local storage
        if (isPersistent) {
            console.log('Setting theme in local storage');
            localStorage.setItem('selectedTheme', currentTheme);
        }
    }, [currentTheme, themes, isPersistent]);

    useEffect(() => {
        console.log('ThemeSelector mounted');
        const handleStorageChange = (event: StorageEvent) => {
            console.log(event);
            if (event.key === 'selectedTheme' && event.newValue) {
                setCurrentTheme(event.newValue);
            }
        };

        // Listen for changes to localStorage
        window.addEventListener('storage', handleStorageChange);

        // Cleanup listener on unmount
        return () => {
            console.log('ThemeSelector unmounted');
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const handleThemeChange = (value: string) => {
        setCurrentTheme(value);
    };

    const isThemeInList = themes.some((theme) => theme.id === currentTheme);

    const selectOptions = [
        ...(!isThemeInList ? [{
            value: currentTheme,
            label: currentTheme.charAt(0).toUpperCase() + currentTheme.slice(1),
            disabled: true,
        }] : []),
        ...themes.map((theme) => ({
            value: theme.id,
            label: theme.name.charAt(0).toUpperCase() + theme.name.slice(1),
            disabled: false
        })),
    ];

    return (
        <Select
            options={selectOptions}
            color="primary"
            value={currentTheme}
            loading={loading}
            onChange={(e) => handleThemeChange(e.target.value)}
        />
    );
};

export default ThemeSelector;


