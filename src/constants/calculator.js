export const analysisHorizon = 5;

const cropNames = {
  bean: "Frijol caupi",
  cassava: "Yuca"
};

const includesCrop = (values, cropName) =>
  values.primaryCrop === cropName || values.secondaryCrop === cropName;

export const isFieldVisible = (field, values) => (field.visibleWhen ? field.visibleWhen(values) : true);

export const initialScenario = {
  area: 1,
  primaryCrop: "Yuca",
  secondaryCrop: "Frijol caupi",
  cassavaYield: 8000,
  beanYield: 300,
  cycles: 2,
  postharvestLoss: 15,
  cassavaSalePrice: 1200,
  beanSalePrice: 4000,
  soilPreparationCost: 5000000,
  sowingCost: 780000,
  fertilizationCost: 680100,
  pestDiseaseControlCost: 254800,
  irrigationCost: 0,
  harvestCost: 1000000,
  inflation: 5,
  discountRate: 10,
  laborType: "familiar",
  laborCost: 900000,
  irrigationFrequency: "Semanal",
  waterCost: 180000,
  energyCost: 240000,
  irrigationSystemCost: 0,
  photovoltaicSystemCost: 0,
  sensorsCost: 0,
  installationCost: 0,
  maintenanceCost: 150000,
  assetLife: 5
};

export const wizardSteps = [
  {
    id: "productive",
    title: "Parámetros Productivos",
    shortTitle: "Productivos",
    description: "Ingresa la información relacionada con tu sistema productivo.",
    fields: [
      { name: "area", label: "Área cultivada", suffix: "ha", type: "number", min: 0 },
      {
        name: "primaryCrop",
        label: "Cultivo principal",
        type: "select",
        options: ["Yuca", "Frijol caupi"]
      },
      {
        name: "secondaryCrop",
        label: "Cultivo secundario",
        type: "select",
        options: ["Frijol caupi", "Yuca", "Ninguno"]
      },
      {
        name: "cassavaYield",
        label: "Rendimiento yuca",
        suffix: "kg/ha",
        type: "number",
        min: 0,
        visibleWhen: (values) => includesCrop(values, cropNames.cassava)
      },
      {
        name: "beanYield",
        label: "Rendimiento frijol caupi",
        suffix: "kg/ha",
        type: "number",
        min: 0,
        visibleWhen: (values) => includesCrop(values, cropNames.bean)
      },
      {
        name: "cycles",
        label: "Número de ciclos productivos",
        suffix: "ciclos",
        type: "number",
        min: 0
      },
      {
        name: "postharvestLoss",
        label: "Pérdidas poscosecha",
        suffix: "%",
        type: "number",
        min: 0,
        max: 100
      }
    ]
  },
  {
    id: "economic",
    title: "Parámetros Económicos",
    shortTitle: "Económicos",
    description: "Define precios, costos base y tasas para proyectar el escenario.",
    fields: [
      {
        name: "cassavaSalePrice",
        label: "Precio de venta yuca",
        prefix: "$",
        suffix: "/kg",
        type: "number",
        min: 0,
        visibleWhen: (values) => includesCrop(values, cropNames.cassava)
      },
      {
        name: "beanSalePrice",
        label: "Precio de venta frijol caupi",
        prefix: "$",
        suffix: "/kg",
        type: "number",
        min: 0,
        visibleWhen: (values) => includesCrop(values, cropNames.bean)
      },
      {
        name: "soilPreparationCost",
        label: "Preparación de suelos",
        helper: "Incluye limpieza del terreno, adecuación de linderos, mecanización, arado, rastrillado, cerramiento, postes, alambre y actividades similares.",
        prefix: "$",
        type: "number",
        min: 0
      },
      {
        name: "sowingCost",
        label: "Siembra",
        helper: "Incluye semillas de yuca, semilla de frijol caupí, labores de establecimiento del cultivo y otros costos directos de siembra.",
        prefix: "$",
        type: "number",
        min: 0
      },
      {
        name: "fertilizationCost",
        label: "Fertilización",
        helper: "Incluye fertilizantes, cal líquida, agrimins, abono orgánico, compost, aplicaciones y demás enmiendas requeridas.",
        prefix: "$",
        type: "number",
        min: 0
      },
      {
        name: "pestDiseaseControlCost",
        label: "Control de plagas y enfermedades",
        helper: "Incluye guadaña, insecticidas, tratamientos de semilla, herbicidas, aplicaciones y productos fitosanitarios.",
        prefix: "$",
        type: "number",
        min: 0
      },
      {
        name: "irrigationCost",
        label: "Riego",
        helper: "Incluye costos directos del riego del ciclo productivo, como agua, operación del sistema, combustible, energía o jornales asociados.",
        prefix: "$",
        type: "number",
        min: 0
      },
      {
        name: "harvestCost",
        label: "Cosecha",
        helper: "Incluye corte, recolección, alistamiento, cargue, empaque, transporte interno y labores asociadas a sacar la producción del lote.",
        prefix: "$",
        type: "number",
        min: 0
      },
      { name: "inflation", label: "Inflación", suffix: "%", type: "number", min: 0, max: 100 },
      {
        name: "discountRate",
        label: "Tasa de descuento",
        suffix: "%",
        type: "number",
        min: 0,
        max: 100
      }
    ]
  },
  {
    id: "operational",
    title: "Parámetros Operativos",
    shortTitle: "Operativos",
    description: "Incluye costos asociados a operación, mano de obra y recursos.",
    fields: [
      {
        name: "laborType",
        label: "Tipo de mano de obra",
        type: "select",
        options: ["familiar", "contratada"]
      },
      { name: "laborCost", label: "Costos de mano de obra", prefix: "$", type: "number", min: 0 },
      {
        name: "irrigationFrequency",
        label: "Frecuencia de riego",
        type: "select",
        options: ["Diaria", "Semanal", "Quincenal", "Mensual"]
      },
      { name: "waterCost", label: "Costos de agua", prefix: "$", type: "number", min: 0 },
      { name: "energyCost", label: "Costos de energía", prefix: "$", type: "number", min: 0 }
    ]
  },
  {
    id: "technology",
    title: "Parámetros de Tecnificación",
    shortTitle: "Tecnificación",
    description: "Registra inversiones y costos de mantenimiento de activos productivos.",
    fields: [
      {
        name: "irrigationSystemCost",
        label: "Costos del sistema de riego",
        prefix: "$",
        type: "number",
        min: 0
      },
      {
        name: "photovoltaicSystemCost",
        label: "Costos sistema fotovoltaico",
        prefix: "$",
        type: "number",
        min: 0
      },
      { name: "sensorsCost", label: "Costos sensores", prefix: "$", type: "number", min: 0 },
      {
        name: "installationCost",
        label: "Costos de instalación",
        prefix: "$",
        type: "number",
        min: 0
      },
      {
        name: "maintenanceCost",
        label: "Costos de mantenimiento",
        prefix: "$",
        type: "number",
        min: 0
      },
      { name: "assetLife", label: "Vida útil de activos", suffix: "años", type: "number", min: 1 }
    ]
  },
  {
    id: "results",
    title: "Resultados",
    shortTitle: "Resultados",
    description: "Consulta indicadores financieros, proyección y comparación contra el escenario inicial.",
    fields: []
  }
];
