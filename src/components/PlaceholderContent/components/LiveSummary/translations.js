export const liveSummaryTranslations = {
  title: "Resumen en tiempo real",
  description: "Los valores se actualizan automáticamente al completar cada paso.",
  footer: "Completa todos los pasos para ver los resultados completos.",
  items: [
    { icon: "sprout", label: "Producción total", valueKey: "production", suffix: "kg", tone: "bg-agro-100 text-agro-700" },
    { icon: "trending", label: "Ingresos estimados", valueKey: "income", suffix: "$", tone: "bg-green-100 text-green-700" },
    { icon: "wallet", label: "Costos totales", valueKey: "totalCosts", suffix: "$", tone: "bg-orange-100 text-orange-700" },
    { icon: "barChart", label: "Utilidad neta", valueKey: "utility", suffix: "$", tone: "bg-sky-100 text-sky-700" },
    { icon: "info", label: "VAN (10%)", valueKey: "netPresentValue", suffix: "$", tone: "bg-violet-100 text-violet-700" }
  ]
};
