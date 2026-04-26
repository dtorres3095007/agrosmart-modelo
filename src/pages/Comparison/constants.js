import { CheckCircle2, Info, Leaf, Settings, Sprout } from "lucide-react";
import { formatCurrency } from "../../utils/financialCalculations.js";

export const comparisonIcons = {
  check: CheckCircle2,
  info: Info,
  leaf: Leaf,
  settings: Settings,
  sprout: Sprout
};

export const scenarioTones = {
  baseline: "border-agro-500 bg-agro-50 text-agro-800",
  modernized: "border-slate-200 bg-white text-agro-800",
  optimized: "border-amber-300 bg-amber-50 text-amber-800"
};

export const productiveRows = [
  ["Producción total (kg/ha)", "8.300", "9.450", "11.600", "+39,8%"],
  ["Rendimiento yuca (ton/ha)", "8", "9", "11", "+37,5%"],
  ["Rendimiento frijol caupí (ton/ha)", "0,3", "0,45", "0,6", "+100%"],
  ["Pérdidas poscosecha (%)", "15%", "8%", "5%", "-66,7%"]
];

export const economicRows = [
  ["Ingresos anuales ($)", formatCurrency(12600000), formatCurrency(14345100), formatCurrency(17608800), "+39,7%"],
  ["Costos totales ($)", formatCurrency(6727800), formatCurrency(6400000), formatCurrency(6200000), "-7,8%"],
  ["Utilidad neta ($)", formatCurrency(5872200), formatCurrency(7945100), formatCurrency(9352133), "+59,2%"]
];

export const profitabilityRows = [
  ["VAN (10%)", formatCurrency(19073302), formatCurrency(25800000), formatCurrency(31500000)],
  ["TIR (%)", "112,54%", "138%", "42%"],
  ["Relación B/C", "1,57", "1,82", "2,05"],
  ["Payback", "-", "1,8 años", "1,9 años"]
];

export const technologyRows = [
  ["Nivel tecnológico", "Bajo", "Medio", "Alto"],
  ["Riego", "No medido", "Eficiente básico", "Tecnificado (goteo)"],
  ["Energía", "No controlada", "Parcial", "Solar"],
  ["Mano de obra", "No valorizada", "Parcial", "Eficiente"],
  ["Uso de insumos", "Convencional", "Optimizado", "Alta eficiencia"],
  ["Gestión de datos", "Nula", "Básica", "Digital (app + sensores)"],
  ["Cumplimiento BPA", "Bajo", "Bajo", "Medio"]
];

export const chartData = [
  { label: "Escenario 1", income: 12.6, costs: 6.73, utility: 5.87 },
  { label: "Escenario 2", income: 14.35, costs: 6.4, utility: 7.95 },
  { label: "Escenario 3", income: 17.61, costs: 6.2, utility: 9.35 }
];

export const chartBars = [
  ["income", "bg-agro-500"],
  ["costs", "bg-amber-400"],
  ["utility", "bg-agro-800"]
];

export const chartLegendClasses = {
  costs: "bg-amber-400",
  income: "bg-agro-500",
  utility: "bg-agro-800"
};

export const conclusionRows = [
  ["Ingresos anuales", "+39,7%"],
  ["Utilidad neta", "+59,2%"],
  ["VAN (10%)", "+65,2%"],
  ["Pérdidas poscosecha", "-66,7%"]
];
