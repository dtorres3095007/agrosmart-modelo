import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { settingsIcons } from "../constants.js";
import { settingsTranslations } from "../translations.js";

function AssumptionsSection() {
  const CheckIcon = settingsIcons.check;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{settingsTranslations.assumptions.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{settingsTranslations.assumptions.description}</p>
      <div className="mt-4 grid gap-3 md:grid-cols-2">
        {settingsTranslations.assumptions.items.map((item) => (
          <div className="flex items-start gap-3 text-sm leading-6 text-slate-600" key={item}>
            <CheckIcon className="mt-0.5 shrink-0 text-agro-600" size={17} />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

export default AssumptionsSection;
