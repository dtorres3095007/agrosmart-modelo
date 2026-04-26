import React from "react";
import { projectInfoIcons } from "../constants.js";
import { projectInfoTranslations } from "../translations.js";

function ProjectFooter() {
  const CalculatorIcon = projectInfoIcons.calculator;
  const LeafIcon = projectInfoIcons.leaf;
  const LineChartIcon = projectInfoIcons.lineChart;
  const SproutIcon = projectInfoIcons.sprout;

  return (
    <section className="flex flex-col gap-4 rounded-lg border border-agro-100 bg-agro-50 p-5 text-sm text-slate-600 shadow-panel sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-white text-agro-700">
          <LeafIcon size={28} />
        </div>
        <p>{projectInfoTranslations.footer}</p>
      </div>
      <div className="flex justify-end gap-3 text-agro-800">
        <CalculatorIcon size={44} strokeWidth={1.6} />
        <LineChartIcon size={44} strokeWidth={1.6} />
        <SproutIcon size={44} strokeWidth={1.6} />
      </div>
    </section>
  );
}

export default ProjectFooter;
