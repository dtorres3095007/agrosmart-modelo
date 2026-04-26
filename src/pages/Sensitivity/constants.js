import {
  BarChart3,
  Info,
  Leaf,
  LineChart,
  ShieldCheck,
  Sprout,
  Target,
  TrendingUp
} from "lucide-react";

export const sensitivityIcons = {
  barChart: BarChart3,
  info: Info,
  leaf: Leaf,
  lineChart: LineChart,
  shield: ShieldCheck,
  sprout: Sprout,
  target: Target,
  trending: TrendingUp
};

export const defaultPriceRangeId = "base";

export const priceRanges = [
  { id: "minus20", label: "-20%" },
  { id: "base", label: "Precio base" },
  { id: "plus20", label: "+20%" }
];

export const sensitivityChartRows = [
  { id: "minus20", label: "-20%", scenario1: 10.08, scenario2: 11.47608, scenario3: 14.08704 },
  { id: "base", label: "Precio base", scenario1: 12.6, scenario2: 14.3451, scenario3: 17.6088 },
  { id: "plus20", label: "+20%", scenario1: 15.12, scenario2: 17.21412, scenario3: 21.13056 }
];

export const chartBars = [
  ["scenario1", "bg-agro-700"],
  ["scenario2", "bg-sky-500"],
  ["scenario3", "bg-violet-500"]
];

export const chartLegendClasses = {
  scenario1: "bg-agro-700",
  scenario2: "bg-sky-500",
  scenario3: "bg-violet-500"
};

export const baselineSensitivityRows = [
  { id: "minus20", cells: ["-20%", "$10.080.000", "$11.476.080", "$14.087.040"] },
  { id: "base", cells: ["Precio base", "$12.600.000", "$14.345.100", "$17.608.800"] },
  { id: "plus20", cells: ["+20%", "$15.120.000", "$17.214.120", "$21.130.560"] }
];

export const riskRows = [
  ["Variabilidad climática", 80, "Alto", "bg-red-500", "text-red-700 bg-red-50 border-red-200"],
  ["Plagas y enfermedades", 48, "Medio", "bg-orange-400", "text-orange-700 bg-orange-50 border-orange-200"],
  ["Variación de precios", 64, "Alto", "bg-red-500", "text-red-700 bg-red-50 border-red-200"],
  ["Fallas en sistema de riego", 32, "Medio", "bg-orange-400", "text-orange-700 bg-orange-50 border-orange-200"],
  ["Fallas tecnológicas", 24, "Bajo", "bg-agro-600", "text-agro-700 bg-agro-50 border-agro-200"],
  ["Baja adopción tecnológica", 36, "Medio", "bg-orange-400", "text-orange-700 bg-orange-50 border-orange-200"],
  ["Uso ineficiente del agua", 64, "Alto", "bg-red-500", "text-red-700 bg-red-50 border-red-200"]
];
