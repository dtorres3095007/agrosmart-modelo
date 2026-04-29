export const comparisonTranslations = {
  hero: {
    title: "Comparación de Escenarios",
    description:
      "Compara los resultados productivos, económicos y financieros de los dos escenarios para identificar el impacto de la tecnificación y las buenas prácticas agrícolas."
  },
  selector: {
    scenarios: [
      { id: "s1", name: "Escenario tradicional", subtitle: "Línea Base", icon: "sprout", tone: "baseline" },
      { id: "s2", name: "Escenario técnico", subtitle: "Modernización Técnica", icon: "settings", tone: "modernized" }
    ],
    note: "Los valores están expresados por hectárea (1 ha) y proyectados a 5 años."
  },
  tables: {
    productive: {
      title: "1. Comparación Productiva",
      headers: ["Indicador", "Escenario tradicional", "Escenario técnico"],
      variationHeader: "Variación E1-E2"
    },
    economic: {
      title: "2. Comparación Económica",
      headers: ["Concepto", "Escenario tradicional", "Escenario técnico"],
      variationHeader: "Variación E1-E2"
    },
    profitability: {
      title: "3. Comparación de Rentabilidad",
      headers: ["Indicador", "Escenario tradicional", "Escenario técnico"]
    },
    technology: {
      title: "4. Comparación Tecnológica y Operativa",
      headers: ["Aspecto", "Escenario tradicional", "Escenario técnico"]
    }
  },
  chart: {
    title: "5. Visualización Comparativa",
    note: "Valores aproximados en millones de pesos por hectárea.",
    legend: {
      costs: "Costos totales",
      income: "Ingresos anuales",
      utility: "Utilidad neta"
    }
  },
  conclusion: {
    title: "Conclusión General",
    text:
      "El Escenario técnico presenta el mejor desempeño integral, con mayor productividad, mayor utilidad y mejores indicadores financieros.",
    subtitle: "Mejora del Escenario técnico vs Escenario tradicional"
  },
  footer:
    "Esta comparación permite identificar el impacto económico y financiero de avanzar hacia un sistema productivo más tecnificado y sostenible."
};
