import {
  BarChart3,
  BookOpen,
  Calculator,
  FileText,
  Home,
  LineChart,
  TrendingUp
} from "lucide-react";
import { pageRoutes } from "../utils/router.js";

export const menuItems = [
  { id: "home", label: "Inicio", icon: Home, path: pageRoutes.home },
  { id: "project-info", label: "Proyecto", icon: FileText, path: pageRoutes["project-info"] },
  { id: "calculator", label: "Calculadora", icon: Calculator, path: pageRoutes.calculator },
  { id: "results", label: "Resultados", icon: BarChart3, path: pageRoutes.results },
  { id: "comparison", label: "Comparación", icon: LineChart, path: pageRoutes.comparison },
  { id: "sensitivity", label: "Análisis", icon: TrendingUp, path: pageRoutes.sensitivity },
  { id: "quick-guide", label: "Guía rápida", icon: BookOpen, path: pageRoutes["quick-guide"] }
];
