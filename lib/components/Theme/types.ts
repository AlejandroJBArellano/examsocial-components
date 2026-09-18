export type ThemeName =
  | "DEFAULT"
  | "INDUSTRIAL_EDGE"
  | "EARTHY_TONES"
  | "VIBRANT_ORCHID";

export interface ThemeInfo {
  name: ThemeName;
  label: string;
  description: string;
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
}

export const THEMES: ThemeInfo[] = [
  {
    name: "DEFAULT",
    label: "Default (Cyan)",
    description: "Tema clásico ExamSocial con acento cian brillante y magenta",
    primaryColor: "#077CA3",
    secondaryColor: "#9878ED",
    accentColor: "#D81159",
  },
  {
    name: "INDUSTRIAL_EDGE",
    label: "Industrial Edge",
    description: "Estética audaz con rojo óxido, azul cobalto y amarillo eléctrico",
    primaryColor: "#FF5733",
    secondaryColor: "#0066CC",
    accentColor: "#FFC300",
  },
  {
    name: "EARTHY_TONES",
    label: "Earthy Tones",
    description: "Paleta orgánica y sobria con terracota, pizarra y coral cálido",
    primaryColor: "#8D6E63",
    secondaryColor: "#546E7A",
    accentColor: "#FA8072",
  },
  {
    name: "VIBRANT_ORCHID",
    label: "Vibrant Orchid",
    description: "Contraste vibrante con orquídea púrpura, violeta y amarillo neón",
    primaryColor: "#9C27B0",
    secondaryColor: "#673AB7",
    accentColor: "#FFEB3B",
  },
];
