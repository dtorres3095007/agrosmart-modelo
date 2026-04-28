import { formatCurrency } from "../../../../utils/financialCalculations.js";
import { barToneClasses } from "./constants.js";

function formatBarValue(value) {
  const absoluteValue = Math.abs(Number(value || 0));

  if (absoluteValue >= 1000000) {
    return `$${(Number(value || 0) / 1000000).toLocaleString("es-CO", {
      maximumFractionDigits: 1,
      minimumFractionDigits: 0
    })}M`;
  }

  if (absoluteValue >= 1000) {
    return `$${Math.round(Number(value || 0) / 1000).toLocaleString("es-CO")}K`;
  }

  return formatCurrency(value);
}

function SimpleBars({ data, keys }) {
  const maxValue = Math.max(...data.flatMap((item) => keys.map((key) => Math.abs(item[key]))), 1);
  const chartMinWidth = Math.max(data.length * keys.length * 54, 320);

  return (
    <div className="mt-4 w-full max-w-full overflow-x-auto rounded-lg bg-slate-50">
      <div className="flex h-56 items-end gap-3 p-4 pt-6" style={{ minWidth: `${chartMinWidth}px` }}>
        {data.map((item) => (
          <div className="flex h-full flex-1 flex-col justify-end gap-2" key={item.year}>
            <div className="flex h-full items-end justify-center gap-1">
              {keys.map((key) => (
                <div className="flex h-full w-full max-w-10 flex-col items-center justify-end" key={key}>
                  <span className="mb-1 whitespace-nowrap text-[10px] font-bold leading-none text-slate-600">
                    {formatBarValue(item[key])}
                  </span>
                  <div
                    className={`w-full max-w-8 rounded-t ${barToneClasses[key] ?? "bg-sky-600"}`}
                    style={{ height: `${Math.max((Math.abs(item[key]) / maxValue) * 100, 4)}%` }}
                    title={`${key}: ${formatCurrency(item[key])}`}
                  />
                </div>
              ))}
            </div>
            <span className="text-center text-[11px] font-bold text-slate-400">A{item.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SimpleBars;
