type ThemeColor =
  | "default"
  | "cerulean"
  | "cosmo"
  | "cyborg"
  | "darkly"
  | "flatly"
  | "journal"
  | "litera"
  | "lumen"
  | "lux"
  | "materia"
  | "minty"
  | "pulse"
  | "nuclear"
  | "sandstone"
  | "simplex"
  | "slate"
  | "solar"
  | "spacelab"
  | "superhero"
  | "united"
  | "yeti"
  | "unicorn";

type Theme = {
  id: ThemeColor;
  name: string;
  dataTheme: string;
  description?: string;
};
