import React, { useEffect, useState, useMemo, useRef } from 'react';
import { Select } from './Select';
import Themes from '../config/themes';
import { updateThemeStylesheet, fetchThemes } from '../utils/themeUtils';



interface ThemeSelectorProps {
  filter?: (theme: Theme) => boolean;
  initialTheme?: string;
}

export const ThemeSelector = ({ filter = () => true, initialTheme }: ThemeSelectorProps) => {
  const [syncedThemes, setSyncedThemes] = useState(false); // Ensures filter doesn't change
  const [themes, setThemes] = useState<Theme[]>(Themes);
  const [currentTheme, setCurrentTheme] = useState(initialTheme || themes[0]?.id);
  const [loading, setLoading] = useState(false);
  const uniqueId = useRef(`theme-stylesheet-${Math.random().toString(36).slice(2, 11)}`).current;
  const isFirstRender = useRef(true);
  const filteredThemes = useMemo(() => themes.filter(filter), [themes, filter]);
  const selectedTheme = useMemo(() => filteredThemes.find((theme) => theme.id === currentTheme) || filteredThemes[0], [currentTheme, filteredThemes]);
  const stableUniqueId = useRef(uniqueId).current;

  useEffect(() => {
    if (syncedThemes) return;
    fetchThemes().then(setThemes).then(() => setSyncedThemes(true));
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
      isLoading={loading}
      onChange={(e) => setCurrentTheme(e.target.value)}
    />
  );
};

