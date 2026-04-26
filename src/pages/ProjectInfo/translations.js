export const projectInfoTranslations = {
  hero: {
    title: "Información del Proyecto",
    description:
      "Conoce el modelo económico-financiero, su metodología, supuestos y cómo se aplica al sistema productivo de yuca y frijol caupi."
  },
  intro: {
    title: "1. Introducción del Modelo Económico-Financiero",
    paragraphs: [
      "El modelo permite evaluar la viabilidad productiva, operativa y económica de sistemas agrícolas, integrando costos, ingresos, flujos de caja y análisis de escenarios.",
      "Se basa en información real de campo y permite simular diferentes condiciones productivas para apoyar la toma de decisiones estratégicas en el corto, mediano y largo plazo."
    ]
  },
  methodology: {
    title: "2. Metodología del Modelo",
    cards: [
      {
        icon: "barChart",
        title: "Datos de campo",
        text: "Información productiva real obtenida en los sistemas de yuca y frijol caupi."
      },
      {
        icon: "leaf",
        title: "Evaluación ACV",
        text: "Integración de resultados del ciclo de vida para identificar impactos y puntos críticos."
      },
      {
        icon: "money",
        title: "Precios de mercado",
        text: "Precios locales actualizados de insumos, productos y servicios utilizados en la producción."
      },
      {
        icon: "book",
        title: "Fuentes oficiales",
        text: "Información de DANE, ICA, FAO y otras bases sectoriales confiables."
      }
    ]
  },
  assumptions: {
    title: "3. Supuestos del Modelo",
    groups: [
      {
        icon: "sprout",
        title: "Productivos",
        items: [
          "Rendimientos por cultivo",
          "Pérdidas poscosecha 5% - 15%",
          "Uso de bioinsumos según escenario",
          "Mano de obra familiar complementada con jornales"
        ]
      },
      {
        icon: "money",
        title: "Económicos",
        items: [
          "Precios de venta proyectados",
          "Inflación proyectada",
          "Tasa de descuento 8% - 12%",
          "Vida útil de activos 3 - 15 años"
        ]
      },
      {
        icon: "settings",
        title: "Operativos",
        items: [
          "Áreas disponibles: 17,7 ha y 26,4 ha",
          "Número de ciclos productivos según cultivo",
          "Disponibilidad hídrica variable según temporada"
        ]
      }
    ]
  },
  baseline: {
    title: "4. Escenario 1 - Línea Base (Condición Inicial)",
    description:
      "Representa las condiciones actuales de producción con baja tecnificación y prácticas tradicionales.",
    featuresTitle: "Características principales",
    indicatorsTitle: "Indicadores clave (por 1 ha)",
    note: "Resultados aparentes que no incluyen todos los costos reales del sistema.",
    features: [
      "Sin tecnificación.",
      "Uso moderado de agroquímicos.",
      "Mano de obra familiar no monetizada.",
      "Riego sin medición.",
      "Pérdidas poscosecha cercanas al 15%.",
      "Costos subestimados: no incluye agua ni trabajo familiar."
    ],
    indicators: [
      ["Producción total", "8.300 kg"],
      ["Producción en bultos", "166"],
      ["Ingresos anuales", "$12.600.000"],
      ["Costos totales", "$6.727.800"],
      ["Utilidad neta", "$5.872.200"],
      ["VAN (10%)", "$19.073.302"],
      ["TIR", "112,54 %"],
      ["Relación B/C", "1,57"],
      ["Punto de equilibrio", "9,66 %"]
    ]
  },
  decisions: {
    title: "5. Importancia del Modelo para la Toma de Decisiones",
    items: [
      [
        "Permite comparar escenarios productivos",
        "Evalúa el impacto económico de diferentes niveles de tecnificación y buenas prácticas agrícolas."
      ],
      [
        "Identifica oportunidades de mejora",
        "Detecta puntos críticos en costos, productividad y sostenibilidad."
      ],
      [
        "Apoya la gestión de inversiones",
        "Proporciona indicadores financieros claros para evaluar la viabilidad de proyectos y tecnologías."
      ],
      [
        "Promueve la sostenibilidad financiera",
        "Integra criterios económicos, sociales y ambientales para decisiones responsables y de largo plazo."
      ]
    ]
  },
  footer:
    "Este modelo es una herramienta de apoyo para la planificación y evaluación de sistemas productivos agrosostenibles. Los resultados dependen de la calidad de los datos ingresados y de las condiciones reales de cada sistema."
};
