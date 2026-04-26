import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { comparisonIcons, conclusionRows } from "../constants.js";
import { comparisonTranslations } from "../translations.js";

function ConclusionCard({ className = "" }) {
  const CheckIcon = comparisonIcons.check;
  const LeafIcon = comparisonIcons.leaf;

  return (
    <SectionCard className={`justify-between bg-agro-50 ${className}`}>
      <div className="flex min-w-0 gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-agro-700">
          <LeafIcon size={24} />
        </div>
        <div className="min-w-0">
          <h2 className="text-lg font-bold text-agro-900">{comparisonTranslations.conclusion.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{comparisonTranslations.conclusion.text}</p>
        </div>
      </div>

      <div className="mt-5 rounded-lg bg-white/70 p-4">
        <h3 className="text-sm font-bold text-agro-900">{comparisonTranslations.conclusion.subtitle}</h3>
        <div className="mt-3 grid gap-3">
          {conclusionRows.map(([label, value]) => (
            <div className="flex items-center justify-between gap-3 text-sm" key={label}>
              <span className="flex min-w-0 items-center gap-2 font-semibold text-slate-600">
                <CheckIcon className="text-agro-600" size={16} />
                <span>{label}</span>
              </span>
              <span className="font-bold text-agro-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionCard>
  );
}

export default ConclusionCard;
