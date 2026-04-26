export const settingsTranslations = {
  hero: {
    title: "Guía rápida del Modelo y Plataforma",
    description:
      "Conoce cómo funciona el modelo económico-financiero, los principales componentes que lo conforman y cómo utilizar la plataforma."
  },
  workflow: {
    title: "1. ¿Cómo funciona la plataforma?",
    description: "La plataforma sigue un flujo de trabajo simple y estructurado.",
    steps: [
      {
        icon: "database",
        title: "Ingresa datos",
        text: "Completa la información productiva, económica y operativa del sistema."
      },
      {
        icon: "calculator",
        title: "El modelo calcula",
        text: "El modelo procesa datos y genera indicadores financieros automáticamente."
      },
      {
        icon: "barChart",
        title: "Analiza resultados",
        text: "Revisa resultados por escenario y principales indicadores generados."
      },
      {
        icon: "lineChart",
        title: "Compara y evalúa",
        text: "Compara escenarios, analiza sensibilidad y toma mejores decisiones."
      },
      {
        icon: "download",
        title: "Exporta información",
        text: "Descarga reportes y gráficos para compartir o respaldar tu análisis."
      }
    ]
  },
  parameters: {
    title: "2. Parámetros del modelo",
    description: "El modelo se compone de cuatro grupos de parámetros principales.",
    note: "Todos los parámetros pueden ajustarse en la Calculadora antes de ejecutar el modelo.",
    groups: [
      {
        icon: "sprout",
        title: "Parámetros productivos",
        text: "Rendimientos, áreas cultivadas, número de ciclos, pérdidas, mano de obra, entre otros."
      },
      {
        icon: "calculator",
        title: "Parámetros económicos",
        text: "Precios de venta, costos de insumos, inflación, tasa de descuento e impuestos."
      },
      {
        icon: "settings",
        title: "Parámetros operativos",
        text: "Riego, energía, uso de agroquímicos, maquinaria, disponibilidad hídrica y prácticas BPA."
      },
      {
        icon: "clipboard",
        title: "Parámetros de tecnificación",
        text: "Inversiones en tecnología, infraestructura y mejoras productivas consideradas en los escenarios."
      }
    ]
  },
  assumptions: {
    title: "3. Supuestos clave del modelo",
    description: "Para el correcto funcionamiento, el modelo utiliza los siguientes supuestos generales.",
    items: [
      "Rendimientos estimados por cultivo en kg/ha.",
      "Frecuencia y costos de riego considerados según el sistema productivo.",
      "Uso de bioinsumos y fertilizantes según el escenario analizado.",
      "Pérdidas poscosecha entre 5% y 15%.",
      "Precios de venta proyectados por cultivo y costos actualizados de insumos y transporte.",
      "Inflación proyectada, tasa de descuento entre 8% y 12%, y vida útil de activos entre 3 y 15 años."
    ]
  },
  scopeLimitations: {
    title: "4. Alcance y limitaciones",
    scopeTitle: "Alcance",
    limitationTitle: "Limitaciones",
    scopeItems: [
      "Evalúa la viabilidad económica y financiera de sistemas productivos de yuca y frijol caupi.",
      "Permite comparar escenarios de tecnificación y buenas prácticas agrícolas.",
      "Apoya la toma de decisiones basada en datos y análisis financiero."
    ],
    limitationItems: [
      "Los resultados dependen de la calidad de los datos ingresados.",
      "No reemplaza el criterio técnico ni la experiencia del productor o asesor.",
      "No considera eventos extraordinarios no contemplados en los supuestos."
    ]
  },
  documents: {
    title: "5. Manual de usuario",
    description: "Descarga la documentación oficial para conocer en detalle el uso de la plataforma.",
    downloads: [
      {
        icon: "book",
        title: "Manual de usuario",
        text: "Guía completa para utilizar la plataforma, entender el modelo, sus parámetros y generar reportes.",
        buttonLabel: "Descargar manual PDF",
        href: "/documents/manual-de-usuario.pdf"
      },
      {
        icon: "spreadsheet",
        title: "Modelo económico financiero",
        text: "Archivo Excel completo con el modelo económico-financiero, escenarios, cálculos y supuestos detallados.",
        buttonLabel: "Descargar modelo Excel",
        href: "/documents/modelo-economico-financiero.xlsx"
      }
    ]
  },
  footer:
    "La plataforma está diseñada para ser una herramienta de apoyo a la planificación y evaluación de sistemas productivos agrosostenibles. Úsala, explora los escenarios y toma decisiones informadas."
};
