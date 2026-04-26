import React from "react";
import { sensitivityIcons } from "../constants.js";
import { sensitivityTranslations } from "../translations.js";

function SensitivityFooter() {
  const BarChartIcon = sensitivityIcons.barChart;
  const SproutIcon = sensitivityIcons.sprout;

  return (
    <section className="flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
          <SproutIcon size={24} />
        </div>
        <div>
          <h2 className="font-bold text-agro-900">{sensitivityTranslations.footer.title}</h2>
          <p className="mt-1">{sensitivityTranslations.footer.text}</p>
        </div>
      </div>
      <BarChartIcon className="shrink-0 text-agro-700" size={48} strokeWidth={1.6} />
    </section>
  );
}

export default SensitivityFooter;
