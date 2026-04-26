import React from "react";
import { riskRows } from "../constants.js";

function RiskBars() {
  return (
    <div className="mt-5 space-y-4">
      {riskRows.map(([label, width, risk, barClass, badgeClass]) => (
        <div className="grid gap-3 sm:grid-cols-[150px_1fr_72px] sm:items-center" key={label}>
          <p className="text-sm font-semibold text-slate-600">{label}</p>
          <div className="h-2 rounded-full bg-slate-100">
            <div className={`h-2 rounded-full ${barClass}`} style={{ width: `${width}%` }} />
          </div>
          <span className={`rounded-full border px-3 py-1 text-center text-xs font-bold ${badgeClass}`}>
            {risk}
          </span>
        </div>
      ))}
    </div>
  );
}

export default RiskBars;
