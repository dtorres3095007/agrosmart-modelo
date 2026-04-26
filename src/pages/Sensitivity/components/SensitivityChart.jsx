import React from "react";
import { chartBars, chartLegendClasses, sensitivityChartRows } from "../constants.js";
import { sensitivityTranslations } from "../translations.js";

function SensitivityChart({ selectedRangeId }) {
  const maxValue = Math.max(
    ...sensitivityChartRows.flatMap((row) => chartBars.map(([key]) => row[key] || 0))
  );

  return (
    <div className="mt-5">
      <div className="grid h-80 grid-cols-3 items-end gap-5 rounded-lg bg-slate-50 px-5 pb-5 pt-6 sm:gap-8 sm:px-8">
        {sensitivityChartRows.map((row) => (
          <div
            className={`flex h-full min-w-0 flex-col justify-end gap-4 transition-opacity ${
              row.id === selectedRangeId ? "opacity-100" : "opacity-35"
            }`}
            key={row.id}
          >
            <div className="flex h-full items-end justify-center gap-2 sm:gap-3">
              {chartBars.map(([key, color]) => {
                const value = row[key];

                return (
                  <div
                    className={`w-full max-w-16 rounded-t-md ${value ? color : "bg-slate-200"}`}
                    key={key}
                    style={{ height: value ? `${Math.max((value / maxValue) * 100, 8)}%` : "8%" }}
                  />
                );
              })}
            </div>
            <p className={`truncate text-center text-xs font-bold sm:text-sm ${row.id === selectedRangeId ? "text-agro-800" : "text-slate-500"}`}>
              {row.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs font-bold text-slate-600">
        {Object.entries(sensitivityTranslations.chart.legend).map(([key, label]) => (
          <span className="flex items-center gap-2" key={key}>
            <i className={`h-3 w-3 rounded-sm ${chartLegendClasses[key]}`} />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SensitivityChart;
