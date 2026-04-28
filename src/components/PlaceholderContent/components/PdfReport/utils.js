import { formatCurrency, formatNumber } from "../../../../utils/financialCalculations.js";

export function formatInputValue(field, value) {
  if (field.prefix === "$") {
    return formatCurrency(value);
  }

  if (field.suffix) {
    return `${formatNumber(value, { maximumFractionDigits: 2 })} ${field.suffix}`;
  }

  return String(value ?? "");
}
