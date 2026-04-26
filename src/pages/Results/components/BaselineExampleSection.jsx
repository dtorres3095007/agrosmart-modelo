import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { baselineValues, resultsIcons } from "../constants.js";
import { resultsTranslations } from "../translations.js";
import ResultMetric from "./ResultMetric.jsx";

function BaselineExampleSection() {
  const InfoIcon = resultsIcons.info;
  const content = resultsTranslations.baselineExample;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{content.title}</h2>
      <p className="mt-1 text-sm font-semibold text-agro-700">{content.subtitle}</p>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
        {content.metrics.map((metric) => (
          <ResultMetric
            icon={resultsIcons[metric.icon]}
            key={metric.label}
            label={metric.label}
            tone={metric.tone}
            value={baselineValues[metric.valueKey]}
          />
        ))}
      </div>
      <div className="mt-5 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
        <InfoIcon className="shrink-0 text-agro-700" size={18} />
        {content.note}
      </div>
    </SectionCard>
  );
}

export default BaselineExampleSection;
