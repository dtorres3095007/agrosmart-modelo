import React from "react";
import { chartBars, chartData, chartLegendClasses, comparisonIcons } from "../constants.js";
import { comparisonTranslations } from "../translations.js";

function formatChartValue(value) {
  return `$${Number(value || 0).toLocaleString("es-CO", {
    maximumFractionDigits: 2,
    minimumFractionDigits: 0
  })}M`;
}

function ComparisonChart() {
  const InfoIcon = comparisonIcons.info;
  const maxValue = Math.max(...chartData.flatMap((item) => [item.income, item.costs, item.utility]));

  return (
    <div className="mt-5 flex flex-1 flex-col">
      <div className="flex min-h-64 flex-1 min-w-0 items-end gap-3 rounded-lg bg-slate-50 p-4 pt-8 sm:gap-5 sm:p-5 sm:pt-8">
        {chartData.map((item) => (
          <div className="flex h-full min-w-0 flex-1 flex-col justify-end gap-3" key={item.label}>
            <div className="flex h-full items-end justify-center gap-1 sm:gap-2">
              {chartBars.map(([key, color]) => (
                <div className="flex h-full w-full max-w-10 flex-col items-center justify-end" key={key}>
                  <span className="mb-1 whitespace-nowrap text-[10px] font-bold leading-none text-slate-600">
                    {formatChartValue(item[key])}
                  </span>
                  <div
                    className={`w-full max-w-8 rounded-t ${color}`}
                    style={{ height: `${Math.max((item[key] / maxValue) * 100, 6)}%` }}
                    title={`${item.label}: ${formatChartValue(item[key])}`}
                  />
                </div>
              ))}
            </div>
            <p className="text-center text-[11px] font-bold leading-4 text-slate-500 sm:text-xs">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-600">
        {Object.entries(comparisonTranslations.chart.legend).map(([key, label]) => (
          <span className="flex items-center gap-2" key={key}>
            <i className={`h-3 w-3 rounded-sm ${chartLegendClasses[key]}`} />
            {label}
          </span>
        ))}
      </div>
      <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-slate-500">
        <InfoIcon size={15} />
        {comparisonTranslations.chart.note}
      </p>
    </div>
  );
}

export default ComparisonChart;
