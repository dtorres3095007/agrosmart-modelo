export const placeholderTranslations = {
  header: {
    title: "Calculadora Económico-Financiera",
    description: "Ingresa los parámetros de tu sistema productivo para calcular los indicadores financieros.",
    guideButton: "Ver guía"
  },
  reference: {
    title: "Escenario 1 - Inicial",
    note: "Valores base para comparar con los resultados de tus entradas.",
    currentArea: "Área actual",
    baseUtility: "Utilidad base"
  },
  liveSummary: {
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
  },
  results: {
    income: "Ingresos",
    costs: "Costos",
    utility: "Utilidad",
    incomeVsCosts: "Ingresos vs costos",
    utilityEvolution: "Evolución de utilidad",
    financialIndicators: "Indicadores financieros",
    userVsScenario: "Usuario vs Escenario 1",
    userUtility: "Utilidad usuario",
    baseUtility: "Utilidad escenario base",
    difference: "Diferencia",
    projection: "Proyección a 5 años con inflación de",
    van: "VAN",
    benefitCostRatio: "Relación Beneficio / Costo",
    breakEvenPoint: "Punto de equilibrio",
    payback: "Payback",
    noRecovery: "No recupera",
    newSimulation: "Nueva simulación",
    next: "Siguiente",
    previous: "Anterior",
    restart: "Reiniciar",
    exportPdf: "Exportar PDF",
    exportExcel: "Exportar Excel"
  },
  export: {
    inputSection: "Dato ingresado",
    resultSection: "Resultado",
    production: "Producción total",
    totalCosts: "Costos totales",
    netUtility: "Utilidad neta",
    inputSheet: "Datos ingresados",
    resultsSheet: "Resultados",
    projectionSheet: "Proyección",
    excelFileName: "agrosostenible-resultados.xlsx",
    pdfFileName: "agrosostenible-resultados.pdf",
    year: "año",
    income: "ingresos",
    costs: "costos",
    utility: "utilidad",
    cashFlow: "flujo",
    yearPrefix: "Año"
  },
  helper:
    "Los resultados se recalculan automáticamente. Compara tus datos con el Escenario 1 - Inicial para evaluar el impacto de tus decisiones.",
  pdf: {
    brand: "AgroSostenible",
    title: "Reporte de resultados económico-financieros",
    description: "Resumen generado con la información ingresada en la calculadora y la proyección financiera del modelo.",
    inputsTitle: "Datos ingresados por el usuario",
    mainResultsTitle: "Resultados principales",
    conclusionsTitle: "Conclusiones",
    conclusionsIntro: "La utilidad estimada es",
    conclusionsDifference: "Frente al escenario base, la diferencia es de",
    notes: [
      "Los resultados se calculan con los parámetros ingresados por el usuario.",
      "El VAN se estima descontando los flujos proyectados al valor presente con la tasa definida.",
      "La comparación contra el Escenario 1 ayuda a dimensionar el impacto económico de los cambios ingresados.",
      "Este reporte es una herramienta de apoyo y debe revisarse junto con criterios técnicos y productivos."
    ]
  }
};
