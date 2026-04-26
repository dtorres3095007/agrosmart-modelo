import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { settingsIcons } from "../constants.js";
import { settingsTranslations } from "../translations.js";

function ParametersSection() {
  const InfoIcon = settingsIcons.info;

  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{settingsTranslations.parameters.title}</h2>
      <p className="mt-1 text-sm text-slate-600">{settingsTranslations.parameters.description}</p>
      <div className="mt-4 divide-y divide-slate-100 rounded-lg border border-slate-200">
        {settingsTranslations.parameters.groups.map((group) => {
          const Icon = settingsIcons[group.icon];

          return (
            <article className="flex items-center gap-4 p-4" key={group.title}>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-agro-50 text-agro-700">
                <Icon size={23} />
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-agro-900">{group.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-600">{group.text}</p>
              </div>
            </article>
          );
        })}
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-lg border border-agro-100 bg-agro-50 p-3 text-xs font-semibold text-slate-600">
        <InfoIcon className="shrink-0 text-agro-700" size={17} />
        {settingsTranslations.parameters.note}
      </div>
    </SectionCard>
  );
}

export default ParametersSection;
