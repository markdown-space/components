import { useEffect, useMemo, useRef, useState } from "react";
import Themes from "../config/themes";
import { fetchThemes, updateThemeStylesheet } from "../utils/themeUtils";
import { Select } from "./Select";

export interface ThemeSelectorProps {
  filter?: (theme: Theme) => boolean;
  initialTheme?: ThemeColor;
  /** Save theme to local storage */
  saveTheme?: boolean;
}

export const ThemeSelector = ({
  filter = () => true,
  initialTheme,
  saveTheme = false,
}: ThemeSelectorProps) => {
  const storedTheme = localStorage.getItem("theme") || "default";

  // Ensures filter doesn't change
  const [syncedThemes, setSyncedThemes] = useState(false);
  const [themes, setThemes] = useState<Theme[]>(Themes);
  const [loading, setLoading] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    saveTheme ? storedTheme : initialTheme || themes[0]?.id,
  );

  const uniqueId = useRef(
    `theme-stylesheet-${Math.random().toString(36).slice(2, 11)}`,
  ).current;

  const stableUniqueId = useRef(uniqueId).current;

  const filteredThemes = useMemo(() => themes.filter(filter), [themes, filter]);

  useEffect(() => {
    if (syncedThemes) return;
    console.log("fetching themes");

    fetchThemes()
      .then(setThemes)
      .then(() => setSyncedThemes(true));
  }, [syncedThemes]);

  useEffect(() => {
    if (!syncedThemes) return;

    const theme =
      filteredThemes.find((theme) => theme.id === currentTheme) ||
      filteredThemes[0];

    setLoading(true);

    updateThemeStylesheet(theme, () => setLoading(false), stableUniqueId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [syncedThemes, stableUniqueId]);

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
      onChange={({ target: { value } }) => {
        if (saveTheme) {
          localStorage.setItem("theme", value);
        }

        setCurrentTheme(value);

        setLoading(true);

        const theme =
          filteredThemes.find((theme) => theme.id === value) ||
          filteredThemes[0];

        updateThemeStylesheet(theme, () => setLoading(false), stableUniqueId);
      }}
    />
  );
};
