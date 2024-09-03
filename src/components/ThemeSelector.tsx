import React, { useEffect, useState, FC, useMemo, useRef } from 'react';
import { Select } from './Select';
import Themes from '../config/themes';

const updateThemeStylesheet = (
  theme: Theme,
  onLoad: () => void,
  id: string,
  context: Document = document
) => {
  const url = `https://cdn.jsdelivr.net/npm/@markdownspace/markdownswatch/css/${theme.id}.css`
  const themeLinks = context.querySelectorAll('link[href*="markdownswatch"]');
  themeLinks.forEach((link) => link.remove());

  const newLink = context.createElement('link');
  newLink.id = id;
  newLink.rel = 'stylesheet';
  newLink.href = url;

  newLink.onload = () => {
    context.documentElement.setAttribute('data-theme', theme.dataTheme);
    onLoad();
  };
  newLink.onerror = () => {
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



interface ThemeSelectorProps {
  filter?: (theme: Theme) => boolean;
  initialTheme?: string;
}

const ThemeSelector: FC<ThemeSelectorProps> = ({ filter = () => true, initialTheme }) => {
  const [syncedThemes, setSyncedThemes] = useState(false); // Ensures filter doesn't change
  const [themes, setThemes] = useState<Theme[]>(Themes);
  const [currentTheme, setCurrentTheme] = useState(initialTheme || themes[0]?.id);
  const [loading, setLoading] = useState(false);
  const uniqueId = useRef(`theme-stylesheet-${Math.random().toString(36).substr(2, 9)}`).current;
  const isFirstRender = useRef(true);
  const filteredThemes = useMemo(() => themes.filter(filter), [themes, filter]);
  const selectedTheme = useMemo(() => filteredThemes.find((theme) => theme.id === currentTheme) || filteredThemes[0], [currentTheme, filteredThemes]);
  const stableUniqueId = useRef(uniqueId).current;

  useEffect(() => {
    if (syncedThemes) return;

    const fetchThemes = async () => {
      try {
        const response = await fetch('https://cdn.jsdelivr.net/npm/@markdownspace/markdownswatch/themes.json');
        const data: { themes: Theme[] } = await response.json();
        setThemes(data.themes);
        setSyncedThemes(true);
      } catch (error) {
        console.error('Failed to fetch themes:', error);
      }
    };

    fetchThemes();
  }, [syncedThemes]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setLoading(true);
    updateThemeStylesheet(selectedTheme, () => setLoading(false), stableUniqueId);
  }, [selectedTheme, stableUniqueId]);

  const selectOptions = filteredThemes.map((theme) => ({
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
