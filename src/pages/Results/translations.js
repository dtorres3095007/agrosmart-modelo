export const resultsTranslations = {
  hero: {
    title: "Resultados del Modelo",
    description:
      "Conoce los principales resultados económicos y financieros que genera el modelo a partir de los datos ingresados y los escenarios analizados."
  },
  modelOutputs: {
    title: "1. ¿Qué calcula el modelo?",
    cards: [
      {
        icon: "money",
        title: "Ingresos",
        text: "Valor generado por la producción agrícola a partir de la venta de los cultivos.",
        tone: "green"
      },
      {
        icon: "cart",
        title: "Costos",
        text: "Costos directos e indirectos necesarios para la operación del sistema productivo.",
        tone: "orange"
      },
      {
        icon: "barChart",
        title: "Utilidad",
        text: "Diferencia entre ingresos y costos que indica la rentabilidad del sistema.",
        tone: "blue"
      },
      {
        icon: "refresh",
        title: "Flujo de caja",
        text: "Comportamiento de ingresos y egresos a lo largo del horizonte de análisis.",
        tone: "violet"
      }
    ]
  },
  financialIndicators: {
    title: "2. Indicadores financieros que genera el modelo",
    note:
      "Estos indicadores permiten evaluar la viabilidad, rentabilidad y sostenibilidad económica del sistema productivo.",
    items: [
      {
        icon: "money",
        title: "VAN",
        text: "Valor actual neto del proyecto a la tasa de descuento definida."
      },
      {
        icon: "percent",
        title: "TIR",
        text: "Mide la rentabilidad del proyecto; mientras mayor sea, más atractivo es."
      },
      {
        icon: "scale",
        title: "Relación B/C",
        text: "Indica cuánto se obtiene por cada unidad monetaria invertida."
      },
      {
        icon: "calendar",
        title: "Payback",
        text: "Periodo en el que se recupera la inversión inicial."
      },
      {
        icon: "target",
        title: "Punto de equilibrio",
        text: "Nivel mínimo de ingresos necesario para cubrir todos los costos."
      }
    ]
  },
  baselineExample: {
    title: "3. Ejemplo: Escenario tradicional",
    subtitle: "Valores por hectárea",
    note: "Nota: Los valores del escenario tradicional no incluyen costos de mano de obra familiar ni consumo de agua.",
    metrics: [
      { icon: "money", label: "Ingresos anuales", valueKey: "income" },
      { icon: "wallet", label: "Costos totales", valueKey: "costs", tone: "orange" },
      { icon: "barChart", label: "Utilidad neta", valueKey: "utility", tone: "blue" },
      { icon: "refresh", label: "VAN (10%)", valueKey: "netPresentValue" },
      { icon: "percent", label: "TIR", valueKey: "internalRate" },
      { icon: "scale", label: "Relación B/C", valueKey: "benefitCostRatio" }
    ]
  },
  interpretation: {
    title: "4. Interpretación de los resultados",
    items: [
      {
        icon: "trending",
        title: "Evaluar desempeño",
        text: "Permite conocer la rentabilidad y eficiencia económica del sistema productivo."
      },
      {
        icon: "refresh",
        title: "Comparar escenarios",
        text: "Facilita la comparación entre diferentes niveles de tecnificación y prácticas sostenibles."
      },
      {
        icon: "shield",
        title: "Tomar decisiones",
        text: "Proporciona información clave para priorizar inversiones y mejoras técnicas."
      },
      {
        icon: "leaf",
        title: "Promover sostenibilidad",
        text: "Integra criterios económicos, sociales y ambientales para decisiones responsables."
      }
    ]
  },
  notes: {
    title: "Información importante",
    items: [
      "Los resultados dependen de la calidad de los datos ingresados.",
      "Los indicadores financieros consideran un horizonte de 5 años.",
      "Tasa de descuento recomendada: 10% configurable.",
      "Se recomienda realizar análisis de sensibilidad para evaluar riesgos."
    ]
  },
  footer:
    "Los resultados del modelo son una herramienta de apoyo para la planificación y la toma de decisiones en sistemas agrícolas agrosostenibles."
};
