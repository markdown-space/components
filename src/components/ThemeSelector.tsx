import React, { useEffect, useState, FC } from 'react';
import { Select } from './Select';
import Themes from '../config/themes';

const updateThemeStylesheet = (url: string, onLoad: () => void, context: Document = document) => {
  const existingLink = context.getElementById('theme-stylesheet') as HTMLLinkElement;
  const newLink = context.createElement('link');
  newLink.id = 'theme-stylesheet-temp';
  newLink.rel = 'stylesheet';
  newLink.href = url;

  newLink.onload = () => {
    if (existingLink) {
      existingLink.remove();
    }
    newLink.id = 'theme-stylesheet';
    onLoad();
  };

  const bulmaLink = context.querySelector('link[href*="bulma"]');
  if (bulmaLink) {
    bulmaLink.parentNode?.insertBefore(newLink, bulmaLink.nextSibling);
  } else {
    context.head.appendChild(newLink);
  }
};

interface Theme {
  id: string;
  name: string;
  dataTheme?: string;
}

interface ThemeSelectorProps {
  filter?: (theme: Theme) => boolean;
  initialTheme?: string; 
}

const ThemeSelector: FC<ThemeSelectorProps> = ({ filter = () => true, initialTheme }) => {
  const filteredThemes = Themes.filter(filter);
  const defaultTheme = initialTheme || filteredThemes[0].id;
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const selectedTheme = filteredThemes.find(theme => theme.id === currentTheme);
    const dataTheme = selectedTheme?.dataTheme || 'user';
    const themeURL = `https://cdn.jsdelivr.net/npm/@markdownspace/markdownswatch/css/${currentTheme}.css`;

    setLoading(true);
    updateThemeStylesheet(themeURL, () => setLoading(false));
    document.documentElement.setAttribute('data-theme', dataTheme);
  }, [currentTheme, filteredThemes]);

  const handleThemeChange = (value: string) => setCurrentTheme(value);

  const selectOptions = filteredThemes.map(theme => ({
    value: theme.id, 
    label: theme.name.charAt(0).toUpperCase() + theme.name.slice(1),
    disabled: false
  }));

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
