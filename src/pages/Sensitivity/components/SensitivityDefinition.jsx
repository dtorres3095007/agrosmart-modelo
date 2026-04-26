import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { sensitivityIcons } from "../constants.js";
import { sensitivityTranslations } from "../translations.js";

function SensitivityDefinition({ className = "" }) {
  const LineChartIcon = sensitivityIcons.lineChart;

  return (
    <SectionCard className={className}>
      <h2 className="text-lg font-bold text-agro-900">{sensitivityTranslations.definition.title}</h2>
      <div className="mt-4 flex gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-agro-100 text-agro-700">
          <LineChartIcon size={30} />
        </div>
        <p className="text-sm leading-7 text-slate-600">{sensitivityTranslations.definition.text}</p>
      </div>
    </SectionCard>
  );
}

export default SensitivityDefinition;
