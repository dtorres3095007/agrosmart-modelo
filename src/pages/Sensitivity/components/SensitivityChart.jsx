import React from "react";
import { chartBars, chartLegendClasses, sensitivityChartRows } from "../constants.js";
import { sensitivityTranslations } from "../translations.js";

function SensitivityChart({ selectedRangeId }) {
  const maxValue = Math.max(
    ...sensitivityChartRows.flatMap((row) => chartBars.map(([key]) => row[key] || 0))
  );

  return (
    <div className="mt-5">
      <div className="grid h-72 grid-cols-5 items-end gap-4 rounded-lg bg-slate-50 p-5">
        {sensitivityChartRows.map((row) => (
          <div
            className={`flex h-full flex-col justify-end gap-3 transition-opacity ${
              row.id === selectedRangeId ? "opacity-100" : "opacity-35"
            }`}
            key={row.id}
          >
            <div className="flex h-full items-end justify-center gap-2">
              {chartBars.map(([key, color]) => {
                const value = row[key];

                return (
                  <div
                    className={`w-full max-w-7 rounded-t ${value ? color : "bg-slate-200"}`}
                    key={key}
                    style={{ height: value ? `${Math.max((value / maxValue) * 100, 5)}%` : "5%" }}
                  />
                );
              })}
            </div>
            <p className={`text-center text-xs font-bold ${row.id === selectedRangeId ? "text-agro-800" : "text-slate-500"}`}>
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
