import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { sensitivityIcons } from "../constants.js";
import { sensitivityTranslations } from "../translations.js";
import SensitivityChart from "./SensitivityChart.jsx";

function FinancialImpactSection({ className = "", selectedRangeId }) {
  const InfoIcon = sensitivityIcons.info;

  return (
    <SectionCard className={className}>
      <h2 className="text-lg font-bold text-agro-900">{sensitivityTranslations.chart.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{sensitivityTranslations.chart.description}</p>
      <SensitivityChart selectedRangeId={selectedRangeId} />
      <div className="mt-4 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
        <InfoIcon className="shrink-0 text-agro-700" size={17} />
        {sensitivityTranslations.chart.note}
      </div>
    </SectionCard>
  );
}

export default FinancialImpactSection;
