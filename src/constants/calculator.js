export const analysisHorizon = 5;

export const initialScenario = {
  area: 1,
  primaryCrop: "Yuca",
  secondaryCrop: "Frijol caupi",
  cassavaYield: 8000,
  beanYield: 300,
  cycles: 2,
  postharvestLoss: 15,
  salePrice: 1200,
  suppliesCost: 1800000,
  transportCost: 450000,
  administrativeCost: 300000,
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
        min: 0
      },
      {
        name: "beanYield",
        label: "Rendimiento frijol caupi",
        suffix: "kg/ha",
        type: "number",
        min: 0
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
      { name: "salePrice", label: "Precio de venta", prefix: "$", suffix: "/kg", type: "number", min: 0 },
      { name: "suppliesCost", label: "Costos de insumos", prefix: "$", type: "number", min: 0 },
      { name: "transportCost", label: "Costos de transporte", prefix: "$", type: "number", min: 0 },
      {
        name: "administrativeCost",
        label: "Costos administrativos",
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
