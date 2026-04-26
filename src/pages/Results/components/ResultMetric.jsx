import React from "react";
import { metricTones } from "../constants.js";

function ResultMetric({ icon: Icon, label, value, tone = "green" }) {
  return (
    <article className="rounded-lg border border-slate-200 p-4">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold text-slate-600">{label}</p>
          <p className={`mt-2 text-lg font-bold ${metricTones[tone]}`}>{value}</p>
        </div>
        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${metricTones[tone]}`}>
          <Icon size={19} />
        </span>
      </div>
    </article>
  );
}

export default ResultMetric;
