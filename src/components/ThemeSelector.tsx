import React, { useEffect, useState, FC, useMemo, useRef } from 'react';
import { Select } from './Select';
import Themes from '../config/themes';

const updateThemeStylesheet = (
  url: string,
  onLoad: () => void,
  id: string,
  context: Document = document
) => {
  const themeLinks = context.querySelectorAll(
    'link[href*="markdownswatch"]'
  );
  themeLinks.forEach((link) => link.remove());

  const newLink = context.createElement('link');
  newLink.id = id;
  newLink.rel = 'stylesheet';
  newLink.href = url;

  newLink.onload = onLoad;
  newLink.onerror = () => {
    console.error(`Failed to load theme stylesheet: ${url}`);
    newLink.remove();
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
  const filteredThemes = useMemo(() => Themes.filter(filter), [filter]);
  const defaultTheme = initialTheme || filteredThemes[0]?.id;
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [loading, setLoading] = useState(false);
  const uniqueId = useRef(`theme-stylesheet-${Math.random().toString(36).substr(2, 9)}`).current;
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const selectedTheme = filteredThemes.find(theme => theme.id === currentTheme);
    const dataTheme = selectedTheme?.dataTheme || 'user';
    const themeURL = `https://cdn.jsdelivr.net/npm/@markdownspace/markdownswatch/css/${currentTheme}.css`;

    setLoading(true);
    updateThemeStylesheet(themeURL, () => setLoading(false), uniqueId);
    document.documentElement.setAttribute('data-theme', dataTheme);
  }, [currentTheme, filteredThemes]);

  const selectOptions = filteredThemes.map(theme => ({
    value: theme.id,
    label: theme.name.charAt(0).toUpperCase() + theme.name.slice(1),
  }));

  return (
    <Select
      options={selectOptions}
      color="primary"
      value={currentTheme}
      loading={loading}
      onChange={(e) => setCurrentTheme(e.target.value)}
    />
  );
};

export default ThemeSelector;
