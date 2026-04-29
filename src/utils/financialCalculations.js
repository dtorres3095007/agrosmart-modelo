import { analysisHorizon } from "../constants/calculator.js";

const toRate = (value) => Number(value || 0) / 100;

const costCategoryFields = [
  "soilPreparationCost",
  "sowingCost",
  "fertilizationCost",
  "pestDiseaseControlCost",
  "irrigationCost",
  "harvestCost"
];

const includesCrop = (values, cropName) =>
  values.primaryCrop === cropName || values.secondaryCrop === cropName;

const calculateInternalRate = (cashFlows) => {
  const hasPositive = cashFlows.some((cashFlow) => cashFlow > 0);
  const hasNegative = cashFlows.some((cashFlow) => cashFlow < 0);

  if (!hasPositive || !hasNegative) return null;

  const netPresentValueAtRate = (rate) =>
    cashFlows.reduce((total, cashFlow, index) => total + cashFlow / (1 + rate) ** (index + 1), 0);

  let lowerRate = -0.9999;
  let upperRate = 1;
  let lowerValue = netPresentValueAtRate(lowerRate);
  let upperValue = netPresentValueAtRate(upperRate);

  while (lowerValue * upperValue > 0 && upperRate < 100) {
    upperRate *= 2;
    upperValue = netPresentValueAtRate(upperRate);
  }

  if (lowerValue * upperValue > 0) return null;

  for (let iteration = 0; iteration < 100; iteration += 1) {
    const middleRate = (lowerRate + upperRate) / 2;
    const middleValue = netPresentValueAtRate(middleRate);

    if (Math.abs(middleValue) < 0.01) return middleRate * 100;

    if (lowerValue * middleValue <= 0) {
      upperRate = middleRate;
      upperValue = middleValue;
    } else {
      lowerRate = middleRate;
      lowerValue = middleValue;
    }
  }

  return ((lowerRate + upperRate) / 2) * 100;
};

export function calculateFinancials(values) {
  const lossRate = toRate(values.postharvestLoss);
  const inflationRate = toRate(values.inflation);
  const discountRate = toRate(values.discountRate);
  const productionFactor = Number(values.area || 0) * Number(values.cycles || 0) * (1 - lossRate);
  const cassavaProduction = includesCrop(values, "Yuca")
    ? productionFactor * Number(values.cassavaYield || 0)
    : 0;
  const beanProduction = includesCrop(values, "Frijol caupi")
    ? productionFactor * Number(values.beanYield || 0)
    : 0;
  const production = cassavaProduction + beanProduction;
  const cassavaIncome = cassavaProduction * Number(values.cassavaSalePrice || 0);
  const beanIncome = beanProduction * Number(values.beanSalePrice || 0);
  const income = cassavaIncome + beanIncome;
  const technologyInvestment =
    Number(values.irrigationSystemCost || 0) +
    Number(values.photovoltaicSystemCost || 0) +
    Number(values.sensorsCost || 0) +
    Number(values.installationCost || 0);

  const categorizedCosts = costCategoryFields.reduce(
    (total, fieldName) => total + Number(values[fieldName] || 0),
    0
  );

  const operatingCosts =
    categorizedCosts +
    Number(values.laborCost || 0) +
    Number(values.waterCost || 0) +
    Number(values.energyCost || 0) +
    Number(values.maintenanceCost || 0);

  const totalCosts = operatingCosts + technologyInvestment;
  const utility = income - totalCosts;
  const yearOneCashFlow = utility - technologyInvestment;

  const projections = Array.from({ length: analysisHorizon }, (_, index) => {
    const year = index + 1;
    const factor = (1 + inflationRate) ** year;
    const projectedIncome = income * factor;
    const projectedCosts = operatingCosts * factor;
    const projectedUtility = projectedIncome - projectedCosts;
    const cashFlow = year === 1 ? projectedUtility - technologyInvestment : projectedUtility;

    return {
      year,
      income: projectedIncome,
      costs: projectedCosts,
      utility: projectedUtility,
      cashFlow
    };
  });

  const netPresentValue = projections.reduce(
    (total, item) => total + item.cashFlow / (1 + discountRate) ** item.year,
    0
  );
  const internalRate = calculateInternalRate(projections.map((item) => item.cashFlow));

  const benefitCostRatio = totalCosts > 0 ? income / totalCosts : 0;
  const breakEvenPoint = income > 0 ? (totalCosts / income) * 100 : 0;
  let accumulatedCashFlow = -technologyInvestment;
  const paybackProjection = projections.find((item) => {
    accumulatedCashFlow += item.cashFlow;
    return accumulatedCashFlow >= 0;
  });

  return {
    production,
    cassavaProduction,
    beanProduction,
    income,
    cassavaIncome,
    beanIncome,
    operatingCosts,
    technologyInvestment,
    totalCosts,
    utility,
    yearOneCashFlow,
    projections,
    netPresentValue,
    internalRate,
    benefitCostRatio,
    breakEvenPoint,
    paybackYear: paybackProjection?.year || null
  };
}

export function formatCurrency(value) {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0
  }).format(Number(value || 0));
}

export function formatNumber(value, options = {}) {
  const minimumFractionDigits = options.minimumFractionDigits ?? 0;
  const maximumFractionDigits = Math.max(options.maximumFractionDigits ?? 0, minimumFractionDigits);

  return new Intl.NumberFormat("es-CO", {
    maximumFractionDigits,
    minimumFractionDigits
  }).format(Number(value || 0));
}
