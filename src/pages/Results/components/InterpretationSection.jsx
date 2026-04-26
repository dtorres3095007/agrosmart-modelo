import React from "react";
import SectionCard from "../../../components/SectionCard/SectionCard.jsx";
import { resultsIcons } from "../constants.js";
import { resultsTranslations } from "../translations.js";

function InterpretationSection() {
  return (
    <SectionCard>
      <h2 className="text-lg font-bold text-agro-900">{resultsTranslations.interpretation.title}</h2>
      <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        {resultsTranslations.interpretation.items.map((item) => {
          const Icon = resultsIcons[item.icon];

          return (
            <article className="rounded-lg border border-slate-200 p-4" key={item.title}>
              <Icon className="text-agro-700" size={24} />
              <h3 className="mt-3 text-sm font-bold text-agro-900">{item.title}</h3>
              <p className="mt-2 text-xs leading-5 text-slate-600">{item.text}</p>
            </article>
          );
        })}
      </div>
    </SectionCard>
  );
}

export default InterpretationSection;
