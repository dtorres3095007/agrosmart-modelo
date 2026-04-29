export const sensitivityTranslations = {
  hero: {
    title: "Análisis de Sensibilidad",
    description:
      "Evalúa cómo cambian los resultados del modelo ante variaciones en precios, rendimientos y costos."
  },
  definition: {
    title: "1. ¿Qué es el análisis de sensibilidad?",
    text:
      "Permite identificar qué variables tienen mayor impacto sobre los resultados financieros del proyecto y qué tan sensibles son los indicadores ante cambios positivos o negativos."
  },
  priceRange: {
    title: "2. Variación de precios",
    description: "Selecciona el rango de variación para el análisis",
    variableTitle: "Variable",
    variableText: "Precios de yuca y frijol caupí",
    selectedLabel: "Rango seleccionado"
  },
  chart: {
    title: "3. Sensibilidad del ingreso por escenario",
    description:
      "Efecto de la variación de precios sobre los ingresos de los dos escenarios del modelo.",
    note:
      "El documento fuente presenta sensibilidad para -20%, precio base y +20%.",
    legend: {
      scenario1: "Escenario tradicional",
      scenario2: "Escenario técnico"
    }
  },
  results: {
    title: "4. Resumen de ingresos por escenario",
    description: "Ingresos ante variaciones en precios según la Tabla 46 del documento.",
    note: "El Escenario técnico mantiene mayores márgenes absolutos de ingreso incluso en condiciones desfavorables.",
    headers: ["Variación de precios", "Escenario tradicional", "Escenario técnico"],
    selectedTitle: "Lectura del escenario seleccionado",
    selectedRows: {
      base:
        "El precio base corresponde a los ingresos originales reportados para los dos escenarios en la Tabla 46.",
      minus20:
        "Con una reducción del 20% en precios, el Escenario técnico conserva ingresos superiores al precio base del Escenario tradicional.",
      plus20:
        "Con un incremento del 20% en precios, los dos escenarios aumentan sus ingresos de forma proporcional, con mayor valor absoluto en el Escenario técnico."
    }
  },
  interpretation: {
    title: "5. Interpretación del análisis",
    cards: [
      {
        icon: "trending",
        title: "Variación proporcional",
        text: "Los ingresos de los dos escenarios cambian proporcionalmente ante variaciones de -20% y +20% en precios."
      },
      {
        icon: "shield",
        title: "Mayor resiliencia",
        text: "Incluso con precios -20%, el Escenario técnico conserva ingresos superiores al precio base del Escenario tradicional."
      },
      {
        icon: "leaf",
        title: "Mejor margen absoluto",
        text: "El sistema tecnificado mantiene mayores ingresos absolutos frente al escenario tradicional."
      },
      {
        icon: "target",
        title: "Riesgo de mercado",
        text: "La volatilidad de precios se mantiene como un riesgo alto y requiere diversificación comercial."
      }
    ]
  },
  risks: {
    title: "6. Riesgos asociados",
    description: "Riesgos del sistema productivo según la matriz de probabilidad e impacto del documento."
  },
  footer: {
    title: "Conclusión general",
    text:
      "El análisis evidencia que el sistema tecnificado mantiene mayor resiliencia financiera ante variaciones de precios y contribuye a reducir la vulnerabilidad frente a riesgos climáticos, operativos y de mercado."
  }
};
